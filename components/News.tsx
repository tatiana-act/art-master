import Link from 'next/link'
import Image from 'next/image'
import { NEWS_SORTED, formatEventDate, formatNewsDate } from '@/config/news'

const News = () => {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">News</h1>
                    <p className="text-xl text-medium max-w-3xl mx-auto">
                        Upcoming classes, workshops, and studio updates
                    </p>
                </div>

                {NEWS_SORTED.length === 0 ? (
                    <p className="text-center text-medium">No news yet — check back soon!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_SORTED.map((item) => (
                            <Link key={item.slug} href={`/news/${item.slug}`} className="group">
                                <article className="bg-cream rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-warm-200 h-full flex flex-col">
                                    {item.image && (
                                        <div className="relative aspect-video">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={400}
                                                height={225}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h2>

                                        {item.event && (
                                            <div className="mb-3 border-l-4 border-primary pl-3">
                                                <p className="font-semibold text-dark">
                                                    <time dateTime={item.event.date}>
                                                        {formatEventDate(item.event.date)}
                                                    </time>
                                                </p>
                                                {item.event.time && <p className="text-medium">{item.event.time}</p>}
                                                {item.event.location && (
                                                    <p className="text-medium">{item.event.location}</p>
                                                )}
                                            </div>
                                        )}

                                        <p className="text-medium flex-grow">{item.excerpt}</p>

                                        <span className="mt-4 text-primary font-medium group-hover:underline">
                                            Read more →
                                        </span>
                                        <span className="mt-3 text-sm text-gray-500">
                                            Posted{' '}
                                            <time dateTime={item.published}>{formatNewsDate(item.published)}</time>
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default News
