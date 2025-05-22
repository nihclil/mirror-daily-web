import type { HeroImage } from './common'
import type { gtmEventMap } from '@/constants/gtm'

export type AuthorPost = {
  title: string
  publishedDate: string
  link: string
  sectionColor: string
  sectionName: string
  postMainImage: HeroImage
  textContent: string
}

export type AuthorInfo = {
  authorId: string
  name: string
}

export type GtmAuthorPageEvents = (typeof gtmEventMap)['author']
