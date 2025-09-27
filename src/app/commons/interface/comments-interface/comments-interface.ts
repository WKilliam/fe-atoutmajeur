export interface CommentsInterface {
  id: number;
  orderId: number;
  authorId: number;
  content: string;
  createdAt: string;
  authorName?: string;
  authorEmail?: string;
}
