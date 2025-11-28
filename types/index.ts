export interface Article {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  body: string;
  slug?: string;
  date?: string;
  readTime?: string;
  popular?: boolean;
}

export interface WasteEntry {
  type: string;
  weight: string;
}

export interface RankingCardProps {
  rank: number;
  name: string;
  imageUrl?: string;
  totalWaste: string;
  points: string;
  isUser?: boolean;
}
