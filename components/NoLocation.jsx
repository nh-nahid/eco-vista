import React from 'react'
import Card from './Card'
import Link from 'next/link'

const NoLocation = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center gap-4 py-6">
        <h2 className="text-xl font-semibold text-white">
          No location found
        </h2>

        <p className="text-white/80">
          We couldn’t find weather data for{" "}
          <span className="font-medium text-white">{location}</span>.
        </p>

        <Link
          href="/"
          className="inline-block rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          Back to current location
        </Link>
      </div>
    </Card>
  )
}

export default NoLocation
