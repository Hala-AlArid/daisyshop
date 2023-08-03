import apiClient from '../apiClient'
import { useQuery } from '@tanstack/react-query'
import {WebsiteInfo} from '../types/WebsiteInfo'

export const useGetWebsiteInfoQuery = () =>
  useQuery({
    queryKey: ['websiteinfo'],
    queryFn: async () => (await apiClient.get<WebsiteInfo[]>(`api/websiteinfo`)).data,
  })
