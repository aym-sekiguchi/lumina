import { Hero } from '@/components'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'shop',
}

export default function Page() {
	return (
		<>
			<Hero page='shop' />
			<div className='mx-auto flex w-full max-w-7xl items-center gap-8 px-4 py-10 max-md:flex-col md:flex-row-reverse md:px-8 md:py-16'>
				<dl className='flex shrink-0 flex-col gap-2'>
					{[
						{ item: '東京都花園区シャンパーニュ通り123-456　花華ビル2F', label: '所在地' },
						{ item: '03-0000-0000', label: 'Tel' },
						{ item: '10:00~18:00', label: '営業時間' },
						{
							item: (
								<>
									<Link href='https://www.facebook.com/'>Facebook</Link> /{' '}
									<Link href='https://www.instagram.com/'>Instagram</Link>
								</>
							),
							label: 'SNS',
						},
					].map((value, index) => (
						<div
							className='grid grid-cols-[6rem_auto] border-b border-dashed border-b-primary/50'
							key={`shop-${index}`}
						>
							<dt>{value.label}</dt>
							<dd>{value.item}</dd>
						</div>
					))}
				</dl>
				<div className='aspect-[8/5] h-auto w-full'>
					<iframe
						className='h-full w-full'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663021.963677571!2d138.45049962103616!3d35.5020583633139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1707295372675!5m2!1sja!2sjp'
						width='600'
					></iframe>
				</div>
			</div>
		</>
	)
}
