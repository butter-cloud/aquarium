'use client'

import { useRef } from 'react'

export default function MainText() {
  const textRef = useRef<HTMLDivElement>(null)

  const lines = ['Aquarium', 'Archive .']

  return (
    <>
      <div ref={textRef} className="font-bold text-center leading-none">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex justify-center flex-wrap text-[15vw] sm:text-[12vw] md:text-[10vw]"
          >
            {line.split('').map((char, index) => (
              <span key={index} className="letter inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
