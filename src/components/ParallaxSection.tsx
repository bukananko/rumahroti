'use client'

import { Parallax } from 'react-parallax'

const ParallaxSection = () => {
  return (
    <Parallax bgImage="/bgresto.png" strength={-200} bgClassName="object-cover">
      <div className="container flex justify-end items-end pb-20 pt-80">
        <div className="text-5xl text-white">
          ALWAYS <br />
          FRESH
        </div>
      </div>
    </Parallax>
  )
}

export default ParallaxSection
