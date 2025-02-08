/*
  # Create interactions logging table

  1. New Tables
    - `interactions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `query` (text) - User's question
      - `response` (text) - AI's response
      - `language` (text) - Language code
      - `feedback_rating` (integer) - User's rating (1-5)
      - `user_id` (uuid) - Optional user ID for authenticated users

  2. Security
    - Enable RLS on `interactions` table
    - Add policies for inserting and updating feedback
*/

CREATE TABLE IF NOT EXISTS interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  query text NOT NULL,
  response text NOT NULL,
  language text NOT NULL,
  feedback_rating integer CHECK (feedback_rating >= 1 AND feedback_rating <= 5),
  user_id uuid REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert interactions
CREATE POLICY "Anyone can insert interactions"
  ON interactions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to update their own feedback
CREATE POLICY "Users can update their own feedback"
  ON interactions
  FOR UPDATE
  USING (
    (auth.uid() = user_id) OR
    (user_id IS NULL AND created_at > now() - interval '1 hour')
  );