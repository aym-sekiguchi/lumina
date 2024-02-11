'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Hamburger() {
	const [isActive, setIsActive] = useState(false)
	return (
		<>
			<AnimatePresence>
				<button
					className='flex aspect-square h-14 w-14 flex-col items-center justify-center gap-2 bg-primary p-2 md:hidden'
					onClick={() => setIsActive((prod) => !prod)}
				>
					<motion.div
						animate={isActive ? { rotate: '20deg', translateY: '1rem' } : { rotate: 0, translateY: 0 }}
						className='h-0.5 w-full origin-center bg-[#9C8B58]'
						initial={{ translateY: 0 }}
						transition={
							isActive
								? { rotate: { delay: 0.2, duration: 0.2 }, translateY: { duration: 0.2 } }
								: { rotate: { duration: 0.2 }, translateY: { delay: 0.2, duration: 0.2 } }
						}
					></motion.div>
					<motion.p
						animate={
							isActive
								? { opacity: 0, scale: 0.5, translateY: '-0.125rem' }
								: { opacity: 1, scale: 1, translateY: '-0.125rem' }
						}
						className='-translate-y-0.5 text-sm !leading-none text-[#9C8B58]'
						initial={{ opacity: 1, scale: 1, translateY: '-0.125rem' }}
						transition={{ duration: 0.2 }}
					>
						menu
					</motion.p>
					<motion.div
						animate={isActive ? { rotate: '-20deg', translateY: '-16px' } : { rotate: 0, translateY: 0 }}
						className='h-0.5 w-full origin-center bg-[#9C8B58]'
						initial={{ translateY: 0 }}
						transition={
							isActive
								? { rotate: { delay: 0.2, duration: 0.2 }, translateY: { duration: 0.2 } }
								: { rotate: { duration: 0.2 }, translateY: { delay: 0.2, duration: 0.2 } }
						}
					></motion.div>
				</button>
			</AnimatePresence>
			<Navigation handleClickNavigation={() => setIsActive(false)} isActive={isActive} />
		</>
	)
}

function Navigation(props: { handleClickNavigation: () => void; isActive: boolean }) {
	const { handleClickNavigation, isActive } = props
	return (
		<motion.nav
			animate={isActive ? { translateX: 0 } : { translateX: '-100%' }}
			className='fixed left-0 top-full flex h-auto w-1/2 -translate-x-full flex-col items-center justify-center gap-8 border-l border-r border-white/40 bg-primary/60 py-10'
			initial={{ translateX: '-100%' }}
			transition={{ duration: 0.4 }}
		>
			<ul className='flex flex-col items-center gap-8'>
				{['TOP', 'SHOP', 'MENU'].map((item, index) => (
					<li className='group relative text-xl' key={`nav-${index}`}>
						<Link
							className='cinzel text-white'
							href={item === 'TOP' ? '/' : `/${item.toLowerCase()}`}
							onClick={() => handleClickNavigation()}
						>
							{item}
						</Link>
						<span className='absolute inset-x-0 bottom-0 m-auto block h-px w-full origin-center scale-0 bg-primary transition duration-500 group-hover:scale-100'></span>
					</li>
				))}
			</ul>
			<div className='flex gap-10'>
				<figure>
					<a className='transition hover:opacity-70' href='https://www.facebook.com/' target='_blank'>
						<Image
							alt='facebook'
							className='h-10 w-full object-contain'
							height={100}
							src='/images/facebook.svg'
							width={100}
						/>
					</a>
				</figure>
				<figure>
					<a className='transition hover:opacity-70' href='https://www.instagram.com/' target='_blank'>
						<Image
							alt='instagram'
							className='h-10 w-full object-contain'
							height={100}
							src='/images/instagram.svg'
							width={100}
						/>
					</a>
				</figure>
			</div>
		</motion.nav>
	)
}
