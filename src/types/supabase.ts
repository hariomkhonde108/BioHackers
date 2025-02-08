export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      interactions: {
        Row: {
          id: string
          created_at: string
          query: string
          response: string
          language: string
          feedback_rating: number | null
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          query: string
          response: string
          language: string
          feedback_rating?: number | null
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          query?: string
          response?: string
          language?: string
          feedback_rating?: number | null
          user_id?: string | null
        }
      }
    }
  }
}