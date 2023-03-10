export interface PostFrontMatter {
  title: string;
  summary: string;
  publishedAt: string;
  views: number;
  slug: string;
  tag?: string;
}

export interface Post extends PostFrontMatter {
  wordCount: number;
  readingTime: string;
  sourceCode: string;
}
