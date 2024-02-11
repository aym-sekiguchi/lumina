import { useEffect, useState } from 'react'

export function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState<string | null>(null)
	const isClient = typeof window === 'object'

	useEffect(() => {
		if (isClient) {
			let prevScrollY = window.scrollY

			const handleScroll = () => {
				const currentScrollY = window.scrollY

				if (currentScrollY > prevScrollY) {
					setScrollDirection('down')
				} else if (currentScrollY < prevScrollY) {
					setScrollDirection('up')
				}

				prevScrollY = currentScrollY
			}

			window.addEventListener('scroll', handleScroll)

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [isClient])

	return scrollDirection
}
