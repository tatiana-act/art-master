import { NewsEvent, formatEventDate } from '@/config/news'

const iconClass = 'w-6 h-6 text-primary flex-shrink-0'

const CalendarIcon = () => (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
    </svg>
)

const ClockIcon = () => (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
)

const PinIcon = () => (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

const EventDetails = ({ event }: { event: NewsEvent }) => {
    return (
        <div className="bg-warm-100 border-l-4 border-primary rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
                <CalendarIcon />
                <p className="text-lg md:text-xl font-semibold text-dark">
                    <time dateTime={event.date}>{formatEventDate(event.date)}</time>
                </p>
            </div>

            {event.time && (
                <div className="flex items-start gap-3">
                    <ClockIcon />
                    <p className="text-lg text-dark">{event.time}</p>
                </div>
            )}

            {(event.location || event.address) && (
                <div className="flex items-start gap-3">
                    <PinIcon />
                    <p className="text-lg text-dark">
                        {event.location}
                        {event.address && (
                            <>
                                <br />
                                <span className="text-base text-medium">{event.address}</span>
                            </>
                        )}
                    </p>
                </div>
            )}
        </div>
    )
}

export default EventDetails
