import { useEffect, useState, useCallback, MouseEvent } from 'react'
import { getRandomNumber } from '@/utils'
import { useFavorites } from '@/hooks/useFavorites'

interface UseItemsManagersProps<T> {
  item: T | null
  items: T[]
  showOnlyFavorites: boolean
  getRandomItem: () => void
  toggleIsFavorite: (event: MouseEvent<HTMLButtonElement>) => void
  toggleShowFavorites: (event: MouseEvent<HTMLInputElement>) => void
}

interface Item {
  id: string
  isFavorite?: boolean
}

export const useItemsManager = <T extends Item>(
  collection: string,
  allItems: T[]
): UseItemsManagersProps<T> => {
  const {
    favoriteItems,
    showOnlyFavorites,
    toggleShowFavorites,
    addToFavorites,
    removeFromFavorites,
  } = useFavorites(collection)

  const [items, setItems] = useState(allItems)
  const [item, setItem] = useState<T | null>(null)
  const [currentFavoriteIndex, setCurrentFavoriteIndex] = useState<
    number | null
  >(null)

  const getUpdatedIndex = (): number => {
    if (
      currentFavoriteIndex === null ||
      currentFavoriteIndex + 1 === items.length
    ) {
      return 0
    }
    return currentFavoriteIndex + 1
  }

  const getRandomItem = useCallback(() => {
    if (!items.length) {
      return setItem(null)
    }

    if (showOnlyFavorites) {
      const updatedIndex = getUpdatedIndex()
      setCurrentFavoriteIndex(updatedIndex)
      const newItem = items[updatedIndex]
      return setItem({
        ...newItem,
        isFavorite: favoriteItems.some((id) => id === newItem!.id),
      })
    }
    setCurrentFavoriteIndex(null)
    const randomIndex = getRandomNumber(0, items.length - 1)
    const newItem = items[randomIndex]
    const isFavorite = favoriteItems.some((id) => id === newItem!.id)
    setItem({ ...newItem, isFavorite })
  }, [items, currentFavoriteIndex])

  const toggleIsFavorite = useCallback((): void => {
    if (!item) return
    const newFavoriteStatus = !item.isFavorite
    newFavoriteStatus ? addToFavorites(item.id) : removeFromFavorites(item.id)
    if (!newFavoriteStatus && showOnlyFavorites) {
      return getRandomItem()
    }
    setItem({ ...item, isFavorite: newFavoriteStatus })
  }, [item, showOnlyFavorites])

  useEffect(() => {
    if (showOnlyFavorites) {
      return setItems(
        allItems.filter((item) => favoriteItems.includes(item.id))
      )
    }
    setItems(allItems)
  }, [showOnlyFavorites, favoriteItems])

  useEffect(() => {
    getRandomItem()
  }, [items])

  return {
    item,
    items,
    getRandomItem,
    toggleIsFavorite,
    showOnlyFavorites,
    toggleShowFavorites,
  }
}
