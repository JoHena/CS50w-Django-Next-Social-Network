export interface Pagerequest {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
}

export interface IPost {
  id: number;
  user: string;
  username: string;
  content: string;
  likes: number[];
  total_likes: number;
  created_at: string;
  updated_at: string;
}
