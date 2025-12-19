export type Article = {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

export type ArticlesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}