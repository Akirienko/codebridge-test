import { useMemo } from 'react';
import type { Article } from '../types/types';

const TITLE_WEIGHT = 2;
const SUMMARY_WEIGHT = 1;

const normalizeText = (text: string): string =>
  text.toLowerCase().trim();

const splitToWords = (text: string): string[] => {
  const normalized = normalizeText(text);
  return normalized.split(/\s+/).filter(word => word.length > 0);
};

const countMatches = (text: string, words: string[]): number => {
  const normalized = normalizeText(text);
  return words.filter(word => normalized.includes(word)).length;
};

const calculateScore = (article: Article, words: string[]): number => {
  const titleMatches = countMatches(article.title, words);
  const summaryMatches = countMatches(article.summary, words);
  return titleMatches * TITLE_WEIGHT + summaryMatches * SUMMARY_WEIGHT;
};

export const useSearch = (articles: Article[], keywords: string): Article[] => {
  return useMemo(() => {

    if (!articles?.length || !keywords?.trim()) {
      return articles || [];
    }

    const words = splitToWords(keywords);
    if (words.length === 0) {
      return articles;
    }


    return articles
      .map(article => ({
        ...article,
        score: calculateScore(article, words)
      }))
      .filter(article => article.score > 0)
      .sort((a, b) => b.score - a.score);

  }, [articles, keywords]);
};