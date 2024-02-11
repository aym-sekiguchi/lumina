import Image from 'next/image'

export function SectionTitle(props: { title: string }) {
	const { title } = props
	return (
		<div className='flex flex-col items-center pb-8'>
			<p className='cinzel text-center text-2xl md:text-3xl'>{title}</p>
			<span className='block w-60'>
				<Image alt='' className='h-full w-full object-contain' height={26} src='/images/separator.svg' width={243} />
			</span>
		</div>
	)
}
