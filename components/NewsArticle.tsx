import Link from 'next/link'
import Image from 'next/image'
import EventDetails from '@/components/EventDetails'
import { NewsBlock, NewsItem, NewsText, formatNewsDate } from '@/config/news'

const textClass = 'text-lg md:text-xl leading-relaxed'
const strongClass = 'font-semibold text-dark'

/** Plain text renders as-is; { strong: … } picks up the emphasis styling. */
const textOf = (text: NewsText) => (typeof text === 'string' ? text : text.strong)
const classOf = (text: NewsText) => (typeof text === 'string' ? textClass : `${textClass} ${strongClass}`)

const renderBlock = (block: NewsBlock, index: number) => {
    if (typeof block !== 'string' && 'list' in block) {
        return (
            <ul key={index} className="list-disc pl-6 space-y-2 marker:text-primary">
                {block.list.map((listItem, listIndex) => (
                    <li key={listIndex} className={classOf(listItem)}>
                        {textOf(listItem)}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <p key={index} className={classOf(block)}>
            {textOf(block)}
        </p>
    )
}

type Props = {
    item: NewsItem
    /** Hidden when the article is shown at /news itself — there is no list to go back to. */
    showBackLink?: boolean
}

const NewsArticle = ({ item, showBackLink = true }: Props) => {
    return (
        <div className="py-16">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {showBackLink && (
                    <Link href="/news" className="text-primary font-medium hover:underline">
                        ← Back to News
                    </Link>
                )}

                <header className={`mb-8 ${showBackLink ? 'mt-6' : ''}`}>
                    <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>
                </header>

                {item.event && (
                    <div className="mb-8">
                        <EventDetails event={item.event} />
                    </div>
                )}

                {item.image && (
                    <div className="mb-8">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={675}
                            className="w-full rounded-lg shadow-lg object-cover"
                        />
                    </div>
                )}

                <div className="space-y-6 text-gray-700">{item.body.map(renderBlock)}</div>

                <p className="mt-12 text-sm text-gray-500">
                    Posted <time dateTime={item.published}>{formatNewsDate(item.published)}</time>
                </p>
            </article>
        </div>
    )
}

export default NewsArticle
