'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MainText() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter')
      gsap.fromTo(
        letters,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
        },
      )
    }
  }, [])

  const lines = ['Aquarium', 'Archive .']

  return (
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
  )
}
