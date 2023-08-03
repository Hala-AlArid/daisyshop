import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  })

  export const useGetProductDetailsBySlugQuery = (_id: string) =>
  useQuery({
    queryKey: ['products', _id],
    queryFn: async () =>
    (await apiClient.get<Product>(`api/products/_id/${_id}`)).data,
  })  