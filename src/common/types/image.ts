export interface ImageUrlType {
  raw: string;
  full: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface ImageType {
  alt_description?: string | null;
  blur_hash?: string;
  color?: string;
  created_at?: string;
  description?: string | null;
  downloads?: number;
  id: string;
  likes?: number;
  promoted_at?: string;
  updated_at?: string;
  urls: ImageUrlType;
}
