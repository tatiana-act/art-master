import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NewsArticle from '@/components/NewsArticle'
import { NEWS, getNewsItem } from '@/config/news'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
    return NEWS.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const item = getNewsItem(slug)

    if (!item) {
        return { title: 'News - Art Master' }
    }

    return {
        title: `${item.title} - Art Master`,
        description: item.excerpt,
    }
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params
    const item = getNewsItem(slug)

    if (!item) {
        notFound()
    }

    // With a single post, /news already shows it and there is no list to return to.
    return <NewsArticle item={item} showBackLink={NEWS.length > 1} />
}
