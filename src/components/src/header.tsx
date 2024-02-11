'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Hamburger } from './hamburger'

export function Header() {
	const [scrollWindow, setScrollWindow] = useState(true)
	const pathName = usePathname()
	useEffect(() => {}, [])
	useEffect(() => {
		if (pathName === '/') {
			setScrollWindow(false)
			window.addEventListener('scroll', () => {
				if (window.scrollY >= window.innerHeight) {
					setScrollWindow(true)
				} else {
					setScrollWindow(false)
				}
			})
		}
	}, [pathName])
	return (
		<AnimatePresence>
			<motion.header
				animate={scrollWindow ? { translateY: 0 } : { translateY: '-100%' }}
				className='fixed z-50 flex w-full items-center justify-between bg-white/40 px-8 py-4 backdrop-blur-sm'
				initial={{ translateY: '-100%' }}
				transition={{ duration: 0.4 }}
			>
				<h1>
					<figure>
						<Link className='transition hover:opacity-70' href='/'>
							<Image
								alt='LUMINA'
								className='h-12 w-full object-contain'
								height={175}
								src='/images/logo.svg'
								width={502}
							/>
						</Link>
					</figure>
				</h1>
				<nav className='max-md:hidden'>
					<ul className='flex items-center gap-8'>
						{['TOP', 'SHOP', 'MENU'].map((item, index) => (
							<li className='group relative text-xl' key={`nav-${index}`}>
								<Link className='cinzel' href={item === 'TOP' ? '/' : item.toLowerCase()}>
									{item}
								</Link>
								<span className='absolute inset-x-0 bottom-0 m-auto block h-px w-full origin-center scale-0 bg-primary transition duration-500 group-hover:scale-100'></span>
							</li>
						))}
					</ul>
				</nav>
				<Hamburger />
			</motion.header>
		</AnimatePresence>
	)
}
