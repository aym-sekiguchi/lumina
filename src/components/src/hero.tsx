'use client'

import Image from 'next/image'

export function Hero(props: { page: string }) {
	const { page } = props
	return (
		<div className='p-4 pt-[5.5rem] md:p-8 md:pt-20'>
			<div
				className='flex aspect-[1302/352] h-auto min-h-40 w-full items-center justify-center bg-cover bg-center'
				style={{ backgroundImage: `url(/images/${page}/hero.webp)` }}
			>
				<div className='flex flex-col items-center gap-2 md:gap-4'>
					<p className='cinzel text-center text-3xl md:text-5xl'>{page.toUpperCase()}</p>
					<span className='block w-52 md:w-72'>
						<Image
							alt=''
							className='h-full w-full object-contain'
							height={26}
							src='/images/separator.svg'
							width={243}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
