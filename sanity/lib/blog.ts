import type {BLOG_POST_QUERY_RESULT, BLOG_POSTS_QUERY_RESULT} from '@/sanity.types'

export type BlogCardPost = BLOG_POSTS_QUERY_RESULT[number]
export type BlogPost = NonNullable<BLOG_POST_QUERY_RESULT>

export function formatPostDate(value: string | null) {
  if (!value) return ''

  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Nairobi',
  }).format(new Date(value))
}

export function formatReadingTime(value: number | null) {
  return `${value ?? 1} min read`
}
