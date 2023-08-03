import apiClient from '../apiClient'
import { useQuery } from '@tanstack/react-query'
import {Category} from '../types/Category'

export const useGetCategoryQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => (await apiClient.get<Category[]>(`api/categories`)).data,
  })

  export const useGetCategoryDetailsBySlugQuery = (category: string) =>
  useQuery({
    queryKey: ['categories', category],
    queryFn: async () =>
    (await apiClient.get<Category>(`api/categories/category/${category}`)).data,
  })  