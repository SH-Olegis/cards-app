import { defineStore } from 'pinia'

import api from '@/api/api';
import type { DocsInterfaces } from '@/stores/docs/docs.interfaces';
import { ref } from 'vue';

export const useDocsStore = defineStore('docs', () => {

  const documents = ref<DocsInterfaces[]>([])
  const getDocsRequest = async (searchParam: string = ''): Promise<DocsInterfaces[]> => {
    const response = await api.get('user/docs', {
      params: {
        search: searchParam
      }
    })

    documents.value = response.data
  }

  return {
    documents,
    getDocsRequest
  }
})
