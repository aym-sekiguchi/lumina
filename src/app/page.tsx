import { Centering, SectionTitle } from '@/components'
import { TopHero } from '@/components/src/top-hero'
import { Twinkle } from '@/components/src/twinkle'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className=''>
			<TopHero />
			<div className='mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 pb-32 pt-10 md:gap-20'>
				<Shop />
				<Menu />
			</div>
		</div>
	)
}

function Shop() {
	return (
		<div>
			<SectionTitle title='SHOP' />
			<div className='bg-primary'>
				<figure>
					<Image
						alt=''
						className='h-full w-full object-contain'
						height={479}
						src='/images/shop-image.webp'
						width={768}
					/>
				</figure>
				<Twinkle className='relative flex flex-col items-center gap-10 px-4 py-10 text-center !leading-loose text-white md:gap-16 md:py-16'>
					<p className='relative z-20'>
						華やかなケーキのアートが煌めき
						<br />
						見る者の目を魅了し
						<br />
						味わう者の心に幸福の光を灯し
						<br />
						心地よい空間で共有された瞬間が
						<br />
						一瞬でも贅沢な輝きをお届けします。
						<br />
						<br />
						至福の味わい、輝く出会い
						<br />
						そして心地よいひととき。
						<br />
						<br />
						ルミナがケーキを通じて
						<br />
						人々の日常を特別な輝きで満たします。
					</p>
					{/* more */}
					<LinkButton href='shop' label='LUMINAについて' />
				</Twinkle>
			</div>
		</div>
	)
}

function Menu() {
	return (
		<div>
			<SectionTitle title='MENU' />
			<div className='bg-black'>
				<figure>
					<Image
						alt=''
						className='h-full w-full object-contain'
						height={528}
						src='/images/menu-image.webp'
						width={768}
					/>
				</figure>
				<div className='relative flex flex-col items-center gap-10 px-4 py-10 text-center !leading-loose text-white md:gap-16 md:py-16'>
					<p className='relative z-20'>
						<Centering key='menu1'>
							{'LUMINAでは心躍るケーキの宝箱を'} {'ご用意しております。'}
						</Centering>
						<br />
						<Centering key='menu2'>
							{'味わいと美しさが融合した'} {'ケーキの世界へ足を踏み入れて、'}
						</Centering>
						<br />
						<Centering key='menu3'>
							{'ケーキの魔法に包まれる特別なひとときを'}
							{'お楽しみください。'}
						</Centering>
					</p>
					{/* more */}
					<LinkButton href='menu' label='LUMINAのケーキ' />
				</div>
			</div>
		</div>
	)
}

function LinkButton(props: { href: string; label: string }) {
	const { href, label } = props
	return (
		<div className='relative z-20 w-fit'>
			<Link
				className='group flex items-center justify-center gap-4 border border-primary bg-white/30 px-8 py-3 transition duration-300 hover:border-white hover:bg-transparent'
				href={`/${href}`}
			>
				<p className='-translate-y-0.5 !leading-none transition duration-300 group-hover:text-white'>{label}</p>
				<span
					className='block h-0 w-0 border-solid border-[transparent_transparent_transparent_#2C3E57] transition duration-300 group-hover:text-white'
					style={{
						borderColor: 'transparent transparent transparent currentColor',
						borderStyle: 'solid',
						borderWidth: '0.25rem 0 0.25rem 0.25rem',
					}}
				/>
			</Link>
		</div>
	)
}
