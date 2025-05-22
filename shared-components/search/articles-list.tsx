'use client'

import ArticleCard from './article-card'
import InfiniteScrollList from '@readr-media/react-infinite-scroll-list'
import type { PostDataWithSection } from '@/utils/data-process'
import type { GtmTagPageEvents } from '@/types/tag'
import type { GtmAuthorPageEvents } from '@/types/author'

type Props<T> = {
  initialList: T[]
  totalAmount: number
  fetchMorePosts(page: number): Promise<T[]>
  gtmEvents:
    | {
        story: GtmTagPageEvents['article']
        loadmore: GtmTagPageEvents['more']
      }
    | {
        story: GtmAuthorPageEvents['article']
        loadmore: GtmAuthorPageEvents['more']
      }
}

const PAGE_SIZE = 12

export default function ArticlesList<T extends PostDataWithSection>({
  initialList,
  totalAmount,
  fetchMorePosts,
  gtmEvents,
}: Props<T>) {
  return (
    <InfiniteScrollList
      initialList={initialList}
      pageSize={PAGE_SIZE}
      fetchListInPage={fetchMorePosts}
      isAutoFetch={false}
      amountOfElements={totalAmount}
      loader={
        <button
          className={`h-9 rounded border-[1.5px] px-[33px] py-[4.5px] text-lg font-bold leading-[1.3] text-[#7F8493] hover-or-active:border-[#119CC7] hover-or-active:text-[#119CC7] ${gtmEvents.loadmore}`}
        >
          看更多
        </button>
      }
    >
      {(posts) =>
        posts.map((post) => (
          <ArticleCard {...post} key={post.title} gtmTag={gtmEvents.story} />
        ))
      }
    </InfiniteScrollList>
  )
}
