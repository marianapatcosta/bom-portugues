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

  const getFavorites = () => {
    const favoriteItems = getStoredItem<string[]>(collection)
    setFavoriteItems(favoriteItems || [])
  }

  const addToFavorites = (itemId: string): void => {
    const updatedFavoriteItems = [...favoriteItems, itemId]
    saveItemInStorage<string[]>(collection, updatedFavoriteItems)
    setFavoriteItems(updatedFavoriteItems)
  }

  const removeFromFavorites = (itemId: string): void => {
    const updatedFavoriteItems = favoriteItems.filter((id) => id !== itemId)
    saveItemInStorage<string[]>(collection, updatedFavoriteItems)
    setFavoriteItems(updatedFavoriteItems)
  }

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
