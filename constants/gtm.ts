export const gtmEventMap = {
  section: {
    clickArticle: 'GTM-section_click_article',
    clickFirstArticleImg: 'GTM-section_click_first_article_img',
    clickFirstArticleTitle: 'GTM-section_click_first_article_title',
    popularNews: 'GTM-section_click_popular_article',
    toLoadmore: 'GTM-section_scroll_to_loadmore',
    loadMore: 'GTM-section_click_loadmore_button',
  },
  tag: {
    article: 'GTM-tag_click_related_articles',
    more: 'GTM-tag_click_more_button',
    popularNews: 'GTM-tag_click_popular_articles',
  },
  author: {
    story: 'GTM-author_click_related_articles',
    more: 'GTM-author_click_more_button',
    popularNews: 'GTM-author_click_popular_articles',
  },
} as const
