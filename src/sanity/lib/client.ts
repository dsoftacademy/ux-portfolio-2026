import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Added '!'
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,     // Added '!'
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-18',
  useCdn: false,
})