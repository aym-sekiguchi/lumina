'use client'

import { useEffect, useRef } from 'react'

export function Twinkle(props: React.PropsWithChildren<{ className: string }>) {
	const { children, className } = props
	const twinkleRef = useRef<HTMLDivElement>(null)
	twinkleRef.current?.classList.add('relative', 'overflow-hidden')

	const createStar = () => {
		const span = document.createElement('span')
		span.classList.add(
			'absolute',
			'block',
			'bg-[#FFFF58]',
			'rounded-full',
			'shadow-[0_0_0.25rem_0.125rem_rgb(255_255_255_/.2)]',
			'opacity-0',
			'animate-[twinkle_5s_infinite]',
			'z-10',
		)
		const minSize = 1
		const maxSize = 4
		const size = Math.random() * (maxSize - minSize) + minSize
		span.style.width = `${size}px`
		span.style.height = `${size}px`
		span.style.left = `${Math.random() * 100}%`
		span.style.top = `${Math.random() * 100}%`
		span.style.animationDelay = `${Math.random() * 10}s`
		twinkleRef.current?.appendChild(span)
	}
	useEffect(() => {
		for (let i = 0; i <= 300; i++) {
			createStar()
		}
	}, [])

	return (
		<div className={`${className} z-0`} ref={twinkleRef}>
			{children}
		</div>
	)
}
