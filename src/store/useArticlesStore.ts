import { create } from 'zustand'
import type { Article, ArticlesResponse } from '../types/types';

interface ArticleStore {
  articles: Article[],
  loading: boolean,
  error: string | null,
  fetchArticles: () => Promise<void>
}


export const useArticlesStore = create<ArticleStore>((set) => ({
  articles: [],
  loading: false,
  error: null,

  fetchArticles: async () => {
    set({ loading: true, error: null })

    try {
      const getData = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=100')

      const data: ArticlesResponse = await getData.json()


      set({ articles: data.results, loading: false })
    } catch (err) {
      set({ error: 'Помилка завантаження статей', loading: false })
    }
  }
}));