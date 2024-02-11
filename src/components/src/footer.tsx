import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
	return (
		<footer
			className='flex justify-center bg-cover bg-left bg-no-repeat'
			style={{ backgroundImage: 'url(./images/footer-bg.webp)' }}
		>
			<div className='flex h-full flex-col items-center justify-between gap-40 bg-white/70 p-10'>
				<div className='flex flex-col items-center gap-8'>
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
					<div className='flex flex-col items-center gap-4'>
						<nav className='max-md:hidden'>
							<ul className='flex items-center gap-8'>
								{['TOP', 'SHOP', 'MENU'].map((item, index) => (
									<li className='group relative text-xl' key={`nav-${index}`}>
										<Link className='cinzel' href={item === 'TOP' ? '/' : item.toLowerCase()}>{item}</Link>
										<span className='absolute inset-x-0 bottom-0 m-auto block h-px w-full origin-center scale-0 bg-primary transition duration-500 group-hover:scale-100'></span>
									</li>
								))}
							</ul>
						</nav>
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
					</div>
				</div>
				<div className='text-center'>
					<p>パティスリー・ルミナ</p>
					<p>
						東京都花園区シャンパーニュ通り123-456
						<br />
						花華ビル2F
					</p>
					<p>
						Tel:<a href='tel:'>03-0000-0000</a>
					</p>
					<p>営業時間:10:00~18:00 定休日:月曜日</p>
					<div className='flex flex-col gap-2 py-6'>
						<Link
							className='block text-sub underline decoration-sub underline-offset-4 hover:no-underline'
							href='/site-policy'
						>
							サイトポリシー
						</Link>
						<Link
							className='block text-sub underline decoration-sub underline-offset-4 hover:no-underline'
							href='/privacy-policy'
						>
							プライバシーポリシー
						</Link>
					</div>
					<p className='text-xs'>&copy; 2024 Patisserie Lumina. All rights reserved. </p>
				</div>
			</div>
		</footer>
	)
}
