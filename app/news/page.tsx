import type { Metadata } from 'next'
import News from '@/components/News'
import NewsArticle from '@/components/NewsArticle'
import { NEWS_SORTED } from '@/config/news'

// With only one post there is no list worth showing, so /news opens the post
// itself. Adding a second post switches this page back to the card grid.
const soleItem = NEWS_SORTED.length === 1 ? NEWS_SORTED[0] : null

export const metadata: Metadata = soleItem
    ? {
          title: `${soleItem.title} - Art Master`,
          description: soleItem.excerpt,
      }
    : {
          title: 'News - Art Master',
          description: 'Upcoming classes, workshops, and studio updates from Art Master Tatiana',
      }

export default function NewsPage() {
    if (soleItem) {
        return <NewsArticle item={soleItem} showBackLink={false} />
    }

    return <News />
}
