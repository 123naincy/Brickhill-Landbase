import { upcomingEvents } from "../../data/eventsData";

export default function EventsSection() {
    return (
        <section className="py-16 bg-[#F8F8F8]">
            <div className="max-w-[1200px] mx-auto px-4">

                {/* 🔵 Upcoming Events */}
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                    Upcoming Events
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-52 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-[#C8A45D] text-white text-xs px-3 py-1 rounded">
                                    {event.date}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    {event.title}
                                </h3>

                                <p className="text-sm text-gray-600 mb-1">
                                    📍 {event.location}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    ⏰ {event.time}
                                </p>

                                <p className="text-sm text-gray-500 mb-4">
                                    {event.description}
                                </p>

                                <button className="w-full bg-[#0B3D2E] text-white py-2 rounded hover:bg-[#092f24]">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🟣 Past Events */}
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">
                    Past Events
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "/images/past1.jpg",
                        "/images/past2.jpg",
                        "/images/past3.jpg",
                        "/images/past4.jpg",
                        "/images/past5.jpg",
                        "/images/past6.jpg",
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl group"
                        >
                            <img
                                src={img}
                                alt="Past Event"
                                className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <p className="text-white text-lg font-medium">
                                    View Event
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}