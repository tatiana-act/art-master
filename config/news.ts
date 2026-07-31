export type NewsEvent = {
    /** ISO date (YYYY-MM-DD) the event takes place */
    date: string
    /** Free text so any format works, e.g. '9:00 AM – 1:00 PM' */
    time?: string
    /** Venue name, e.g. 'Bloom Village Education Center' */
    location?: string
    /** Street address, shown under the venue name */
    address?: string
}

/** A run of text: plain, or semi-bold when written as { strong: 'text' }. */
export type NewsText = string | { strong: string }

/**
 * One piece of an article body:
 *   'text'                    → a normal paragraph
 *   { strong: 'text' }        → a semi-bold paragraph, for lines worth stressing
 *   { list: [...] }           → a bulleted list, whose items are NewsText too,
 *                               so { list: ['plain', { strong: 'bold' }] } works
 */
export type NewsBlock = NewsText | { list: NewsText[] }

export type NewsItem = {
    slug: string
    title: string
    /** When the announcement was posted. Shown small — the event date leads. */
    published: string
    /** The event being announced. Omit for general studio news. */
    event?: NewsEvent
    excerpt: string
    image?: string
    /** Body blocks, rendered in order */
    body: NewsBlock[]
}

// To add a post: copy the block and give it a unique `slug`.
//
// Put date / time / place in `event` rather than in `body` — they render as a
// highlighted details panel, and the event date is what visitors see first.
//
// With a single post, /news shows that post directly. From two posts on,
// /news becomes a list of cards and each post gets its own /news/<slug> page.
// Nothing else needs changing — the pages follow this array.
export const NEWS: NewsItem[] = [
    {
        slug: 'bloom-village-family-event-1',
        title: 'Join Me at the Bloom Village Family Event!',
        published: '2026-07-15',
        event: {
            date: '2026-08-15',
            time: '9:00 AM – 1:00 PM',
            location: 'Bloom Village Education Center',
            address: '11718 Metric Blvd, Building A, Austin, TX 78758',
        },
        excerpt:
            'A free family morning in Austin — stop by my table, see the fiber art workshops, and let the kids make a craft to take home.',
        /*image: '/images/watercolor-woolpainting-1.jpg',*/
        body: [
            'Looking for a fun and creative family activity? I\'d love to meet you at the Bloom Village Family Event!',
            'Stop by my table to discover my hands-on fiber art workshops for children and adults, ask questions, and see examples of the creative projects we make together.',
            { strong: 'Kids are invited to enjoy a FREE make-and-take craft activity! They can try:'},
            { list: [{strong: 'Weaving'}, {strong: 'Yarn Wrapping'}] },
            'These simple, engaging crafts help children develop creativity, focus, and fine motor skills—while having fun and creating something they can proudly take home.',
            'Whether you\'re looking for a new creative hobby, unique art classes, or just a fun family outing, I\'d love to meet you and share what I do.',
            { strong: 'Admission is free. Bring the whole family and join us for a morning of creativity!' },
        ],
    },
]

/** The date a post leads with: the event date if there is one, else the post date. */
function primaryDate(item: NewsItem): string {
    return item.event?.date ?? item.published
}

// "Today" is fixed at build time, so the ordering below refreshes on each deploy.
const today = new Date().toISOString().slice(0, 10)

/** Upcoming events first (soonest first), then everything else newest first. */
export const NEWS_SORTED = [...NEWS].sort((a, b) => {
    const aDate = primaryDate(a)
    const bDate = primaryDate(b)
    const aUpcoming = aDate >= today
    const bUpcoming = bDate >= today

    if (aUpcoming !== bUpcoming) {
        return aUpcoming ? -1 : 1
    }

    return aUpcoming ? aDate.localeCompare(bDate) : bDate.localeCompare(aDate)
})

export function getNewsItem(slug: string): NewsItem | undefined {
    return NEWS.find((item) => item.slug === slug)
}

/** e.g. 'July 15, 2026' */
export function formatNewsDate(date: string): string {
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

/** e.g. 'Saturday, August 15, 2026' — the weekday helps people plan. */
export function formatEventDate(date: string): string {
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
