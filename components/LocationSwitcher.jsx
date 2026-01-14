"use client"
import Image from 'next/image';

const LocationSwitcher = () => {
    return (
        <div className="relative">
            <button>
                <Image
                    className="size-9"
                    src="/link.svg"
                    alt="link icon"
                    width={10}
                    height={10}
                />
            </button>
            <div
                className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2"
            >
                <ul
                    role="list"
                    className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                >
                    <li>Kolkata</li>
                    <li>Dhaka</li>
                    <li>London</li>
                    <li>Amsterdam</li>
                </ul>
            </div>
        </div>
    );
};

export default LocationSwitcher;