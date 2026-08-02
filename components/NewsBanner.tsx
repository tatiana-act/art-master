'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NEWS_SORTED, formatEventDate, newsDate, newsHref, toDateString } from '@/config/news'

const latest = NEWS_SORTED[0]

// Keyed by slug, so a new announcement shows up again for people who dismissed
// the previous one.
const storageKey = latest ? `art-master:news-banner-dismissed:${latest.slug}` : ''

const NewsBanner = () => {
    // Starts hidden and is switched on after mount. Visibility depends on the
    // viewer's own clock and on what they have dismissed, neither of which
    // exists when these pages are prerendered.
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!latest) {
            return
        }

        // Nothing to announce once the date has passed.
        if (newsDate(latest) < toDateString(new Date())) {
            return
        }

        try {
            if (window.localStorage.getItem(storageKey)) {
                return
            }
        } catch {
            // Storage blocked (private browsing) — show the banner anyway.
        }

        setVisible(true)
    }, [])

    if (!visible) {
        return null
    }

    const dismiss = () => {
        setVisible(false)

        try {
            window.localStorage.setItem(storageKey, '1')
        } catch {
            // Nothing to persist to; it stays hidden for this page view only.
        }
    }

    return (
        <div className="bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
                {/* The link fills the bar, so clicking anywhere but the close button opens the post. */}
                <Link
                    href={newsHref(latest)}
                    className="flex-1 min-w-0 py-3 flex flex-col sm:flex-row sm:items-baseline sm:gap-2 hover:underline"
                >
                    <span className="font-semibold whitespace-nowrap flex-shrink-0">
                        {formatEventDate(newsDate(latest))}:
                    </span>
                    {/* Truncated so the bar stays one line on desktop and two on mobile. */}
                    <span className="min-w-0 truncate">{latest.title}</span>
                </Link>

                <button
                    type="button"
                    onClick={dismiss}
                    aria-label="Dismiss announcement"
                    className="flex-shrink-0 p-2 -mr-2 rounded hover:bg-red-700 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NewsBanner
