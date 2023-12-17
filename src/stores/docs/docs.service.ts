import { defineStore } from 'pinia'

import api from '@/api/api';
import type { DocsInterfaces } from '@/stores/docs/docs.interfaces';


export const useDocsStore = defineStore('docs', () => {
  const getDocs = async (searchParam: string = ''): Promise<DocsInterfaces[]> => {
    const response = await api.get('user/docs', {
      params: {
        search: searchParam
      }
    })

    console.log(response.data);

    return response.data
  }

  return {
    getDocs
  }
})
