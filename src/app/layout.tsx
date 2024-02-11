import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	description:
		'東京花園区にあるケーキ・焼き菓子を販売するパティスリー・ルミナの公式ホームページです。甘美な贅沢を味わう至福のひとときを提供する、当店のケーキは新鮮な素材と職人の技が調和した極上のデザートです。豊富なバリエーションの中から、特別な日のお祝いや日常のちょっとした贈り物にぴったりの一品をお選びいただけます。素材の質にこだわり、季節感あふれるフレーバーでお客様の心を満たします。オーダーメイドのケーキやイベント用の特別なデザインも承っております。当店のケーキは、感動の一刻をお届けいたします。ぜひ、甘くて美しい世界への扉を開け、至福の味覚体験をご堪能ください。',
	icons: [
		{ sizes: 'any', url: '/favicons/favicon.ico' },
		{ sizes: '16x16', type: 'image/png', url: '/favicons/icon-16x16.png' },
		{ sizes: '32x32', type: 'image/png', url: '/favicons/icon-32x32.png' },
		{ rel: 'apple-touch-icon', url: '/favicons/apple-touch-icon.png' },
	],
	manifest: '/favicons/site.webmanifest',
	// themeColor: '#ffffff',
	title: {
		default: 'パティスリー・ルミナ【公式】',
		template: '%s | パティスリー・ルミナ【公式】',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<head>
				{/* GTM */}
				{/* {[''].map((id, index) => (
					<Script
						key={`script-${index}`}
						id={`gtm-${id}`}
						dangerouslySetInnerHTML={{
							__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-${id}');
						`,
						}}
					/>
				))} */}
				<meta content='https://project/url/thumbnail.jpg' name='thumbnail' />
				<link color='#' href='/favicons/safari-pinned-tab.svg' rel='mask-icon' />
				<meta content='#' name='msapplication-TileColor' />
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
			<GoogleAnalytics
				gaId='G-8TW1Q1EL0W
'
			/>
		</html>
	)
}
