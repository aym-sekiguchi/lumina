'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function TopHero() {
	return (
		<>
			<div className='aspect-[4/3] w-full p-4 md:h-[100vh] md:p-8'>
				<div
					className='h-full w-full bg-cover bg-center bg-no-repeat backdrop-blur-lg'
					style={{ backgroundImage: 'url(/images/hero.webp)' }}
				>
					<div className='mx-auto h-full w-full max-w-7xl'>
						<motion.div
							animate={{ margin: '0 1rem', width: '25%' }}
							className='mx-4 flex h-full min-w-28 flex-col justify-center border-l border-r border-white/40 bg-white/40 backdrop-blur-sm md:w-[25%]'
							initial={{ margin: 0, width: '100%' }}
							transition={{ duration: 1, ease: 'easeInOut' }}
						>
							<motion.div
								animate={{ opacity: 1 }}
								className='flex flex-col items-center justify-center gap-8'
								initial={{ opacity: 0 }}
								transition={{ delay: 1, duration: 1 }}
							>
								<figure>
									<Link className='transition hover:opacity-70' href='/'>
										<Image
											alt='LUMINA'
											className='h-8 w-full object-contain md:h-12'
											height={175}
											src='/images/logo.svg'
											width={502}
										/>
									</Link>
								</figure>
								<nav className='max-md:hidden'>
									<ul className='flex flex-col items-center justify-center gap-8'>
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
								<div className='flex gap-6 md:gap-10'>
									<figure>
										<a className='transition hover:opacity-70' href='https://www.facebook.com/' target='_blank'>
											<Image
												alt='facebook'
												className='h-6 w-full object-contain md:h-10'
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
												className=' h-6 w-full object-contain md:h-10'
												height={100}
												src='/images/instagram.svg'
												width={100}
											/>
										</a>
									</figure>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
			{/* sp navigation */}
			<div className='bg-primary p-4 md:hidden'>
				<nav className='flex w-full flex-col items-center gap-2'>
					<ul className='flex w-full items-center justify-around gap-8'>
						{['TOP', 'SHOP', 'MENU'].map((item, index) => (
							<li className='group relative flex flex-col items-center text-xl' key={`nav-${index}`}>
								<Link className=' cinzel text-white' href={item === 'TOP' ? '/' : item.toLowerCase()}>
									{item}
								</Link>
								<span className='block'>
									<Image
										alt='instagram'
										className='h-full w-full object-contain'
										height={26}
										src='/images/separator.svg'
										width={243}
									/>
								</span>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	)
}
