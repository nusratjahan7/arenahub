import Image from 'next/image';
import Link from 'next/link';

const FeaturedCard = ({ facility }) => {
    const { _id, facilityName, type, description, imageUrl, location, capacity, price } = facility;

    return (
        <div className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden bg-white flex flex-col">
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
                <Image
                    height={400}
                    width={400}
                    src={imageUrl}
                    alt={facilityName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                {/* Name + Type badge */}
                <div className="flex items-start justify-between gap-2">
                    <h2 className="font-bold text-gray-900 text-base leading-tight">{facilityName}</h2>
                    <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {type}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{description}</p>

                {/* Location + Capacity */}
                <div className="flex flex-col gap-1.5 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <span>Capacity {capacity}</span>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mt-auto" />

                {/* Price + Book */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-bold text-gray-900">${price}</span>
                        <span className="text-xs text-gray-400">/hr</span>
                    </div>
                    <Link
                        href={`/facilities/${_id}`}
                        className="bg-(--noir) hover:bg-(--noir)/90 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-150"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;