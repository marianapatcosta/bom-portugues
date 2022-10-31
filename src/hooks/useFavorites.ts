import { useEffect, useState, useCallback, MouseEvent } from 'react'
import { useLocalStorage } from './useLocalStorage'

interface UseFavoritesProps {
  favoriteItems: string[]
  showOnlyFavorites: boolean
  toggleShowFavorites: (event: MouseEvent<HTMLInputElement>) => void
  addToFavorites: (itemId: string) => void
  removeFromFavorites: (itemId: string) => void
}

export const useFavorites = (collection: string): UseFavoritesProps => {
  const [favoriteItems, setFavoriteItems] = useState<string[]>([])
  const { getStoredItem, saveItemInStorage } = useLocalStorage()
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const getFavorites = useCallback(() => {
    const favoriteItems = getStoredItem<string[]>(collection)
    setFavoriteItems(favoriteItems || [])
  }, [collection, getStoredItem])

  const addToFavorites = useCallback(
    (itemId: string): void => {
      const updatedFavoriteItems = [...favoriteItems, itemId]
      saveItemInStorage<string[]>(collection, updatedFavoriteItems)
      setFavoriteItems(updatedFavoriteItems)
    },
    [collection, favoriteItems, saveItemInStorage, setFavoriteItems]
  )

  const removeFromFavorites = useCallback(
    (itemId: string): void => {
      const updatedFavoriteItems = favoriteItems.filter((id) => id !== itemId)
      saveItemInStorage<string[]>(collection, updatedFavoriteItems)
      setFavoriteItems(updatedFavoriteItems)
    },
    [collection, favoriteItems, saveItemInStorage]
  )

  const toggleShowFavorites = useCallback(
    (event: MouseEvent<HTMLInputElement>): void => {
      const target = event.target as HTMLInputElement
      setShowOnlyFavorites(target.checked)
    },
    []
  )

  useEffect(() => {
    getFavorites()
  }, [])

  return {
    favoriteItems,
    showOnlyFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleShowFavorites,
  }
}
