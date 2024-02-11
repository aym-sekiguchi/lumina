'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

export function Card(props: { detail: string; index: number; title: string }) {
	const { detail, index, title } = props
	return (
		<motion.div
			initial={{ marginTop: '48px', opacity: 0 }}
			transition={{ duration: 0.4, ease: 'easeIn' }}
			viewport={{ once: true }}
			whileInView={{ marginTop: 0, opacity: 1 }}
		>
			<figure>
				<Image
					alt=''
					className='h-full w-full object-contain'
					height={355}
					src={`/images/menu/menu-image${index}.webp`}
					width={568}
				/>
			</figure>
			<div className='flex flex-col gap-3 bg-primary p-4 text-white md:p-8'>
				<p className='text-lg underline decoration-accent underline-offset-8 md:text-2xl'>{title}</p>
				<p className='max-md:text-sm'>{detail}</p>
			</div>
		</motion.div>
	)
}
