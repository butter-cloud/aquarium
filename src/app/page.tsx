'use client'

import MainText from '@/components/MainText'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false)
  const [progressNumber, setProgressNumber] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // load scroll trigger
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        setScrollTriggerLoaded(true)
      })
    }
  }, [])

  useEffect(() => {
    console.log('scrollTriggerLoaded', scrollTriggerLoaded)
    if (!scrollTriggerLoaded) return

    const el = document.querySelector('#test')

    gsap.to(el, {
      x: 200, // 스크롤에 의해 x축으로 200px 이동
      scrollTrigger: {
        trigger: el,
        start: 'top center',
        end: '+=200',
        scrub: true, // 스크롤에 따라 부드럽게 이동
        markers: true, // ✅ 디버깅용 마커 표시
        onUpdate: (self) => {
          console.log('triggered!')
          if (self.progress > 0.5) {
            router.push('/gallery') // 스크롤이 50% 이상일 때 페이지 이동
            console.log('halfway there!')
          }
          // const el = self.trigger as HTMLElement
          // const progress = self.progress
          //   setProgressNumber(progress)
          // // 예: 스크롤 비율에 따라 빨간색 → 검은색으로 변화
          // const red = Math.round(255 - 255 * progress)
          // el.style.color = `rgb(${red}, 0, 0)`
          //
          // console.log('📦 progress:', self.progress.toFixed(2)) // 0 ~ 1
          // console.log('📍 scrollY:', self.scroll()) // 현재 스크롤 위치
        },
      },
    })

    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh()
    })
  }, [scrollTriggerLoaded])

  return (
    <div className="flex flex-col items-center justify-center h-[150vh]">
      <div id={'test'}>trigger test</div>
      <span>{progressNumber}</span>
      <MainText />
    </div>
  )
}
