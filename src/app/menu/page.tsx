import { Hero } from '@/components'
import { Metadata } from 'next'
import { Fragment } from 'react'
import { Card } from './card'

export const metadata: Metadata = {
	title: 'menu',
}

export default function Page() {
	return (
		<>
			<Hero page='menu' />
			<div className='mx-auto grid w-full max-w-5xl gap-x-16 gap-y-10 px-4 py-10 md:grid-cols-2 md:gap-y-32 md:py-16 md:even:[&>div]:translate-y-[60%]'>
				{[
					{
						detail:
							'リッチなチョコレートスポンジに濃厚なチョコレートクリーム、ダークなガナッシュでコーティングし、チョコレートクリームで美しくデコレーションした贅沢なケーキ。',
						title: 'チョコレートの輝き',
					},
					{
						detail:
							'濃厚なチーズケーキに、甘酸っぱいベリーが彩りを添え、鮮やかな花が華やかさを演出。美味しさと美しさが融合した贅沢な一品。',
						title: 'ベリーブロッサムチーズケーキ',
					},
					{
						detail:
							'7つのパステルカラーで積み重ねられたスポンジと、優しい色味の生クリームが織り成す、美しい層のケーキ。色彩の豊かさと、口溶けの良さが魅力。',
						title: 'パステルレイヤー',
					},
					{
						detail:
							'キャラメルでコーティングされたムースタルトには、幸せのオーラが漂う。香ばしいクッキーがその幸福を増大させ、口いっぱいに上品な味わいが広がる。',
						title: '幸せのキャラメル・クッキーオーラ',
					},
					{
						detail:
							'いちごの華やかな味わいが詰まった、サクサクのパイ生地と濃厚なクリームのハーモニーを奏でるミルフィーユ。至福の時を奏でられる。',
						title: 'いちごのシンフォニー',
					},
				].map((value, index) => (
					<Fragment key={`menu-${index}`}>
						<Card detail={value.detail} index={index + 1} title={value.title} />
					</Fragment>
				))}
			</div>
		</>
	)
}
