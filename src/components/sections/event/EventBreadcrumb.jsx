import { Link } from "react-router-dom";

export default function EventBreadcrumb({ title, paths }) {
    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-[1200px] mx-auto px-4">

                {/* Breadcrumb Path */}
                <p className="text-sm text-gray-500 mb-2 flex items-center flex-wrap">
                    {paths.map((item, index) => (
                        <span key={index} className="flex items-center">

                            {item.link ? (
                                <Link
                                    to={item.link}
                                    className="text-[#0B3D2E] font-medium hover:underline"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-gray-700">{item.name}</span>
                            )}

                            {index !== paths.length - 1 && (
                                <span className="mx-2">{">"}</span>
                            )}
                        </span>
                    ))}
                </p>

                {/* Page Title */}
                <h1 className="text-3xl font-semibold text-gray-900">
                    {title}
                </h1>

            </div>
        </section>
    );
}