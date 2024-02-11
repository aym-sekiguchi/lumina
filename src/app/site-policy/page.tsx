import { Metadata } from 'next'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'site-policy',
}

export default function Page() {
	return (
		<div className='mx-auto w-full max-w-3xl px-4 pb-10 pt-28'>
			<h2 className='mx-auto w-fit border-b border-b-black text-center text-xl md:text-2xl'>サイトポリシー</h2>
			<dl className='py-10 text-lg md:text-xl'>
				{[
					{
						detail:
							'このウェブサイトの利用には、以下の利用規約が適用されます。本サイトを利用することで、利用規約に同意したものとみなされます。',
						label: 'サイトの利用規約',
					},
					{
						detail:
							'本サイトに掲載されているすべてのコンテンツ（文章、画像、動画など）は、著作権法により保護されています。無断での複製や使用はご遠慮ください。',
						label: 'コンテンツの所有権',
					},
					{
						detail:
							'本サイトのコンテンツは、情報提供を目的としていますが、正確性や完全性を保証するものではありません。利用者の責任において情報をご利用ください。',
						label: '免責事項',
					},
					{
						detail:
							'本サイトからリンクされている外部サイトのコンテンツやプライバシーポリシーについて、一切の責任を負いません。リンク先のサイトを利用する際は、利用者自身の判断と責任において行ってください。',
						label: 'リンク先の責任',
					},
				].map((item, index) => (
					<Fragment key={`site-policy-${index}`}>
						<dt>
							{index + 1}.{item.label}
						</dt>
						<dd className='pb-8 pl-8'>{item.detail}</dd>
					</Fragment>
				))}
			</dl>
		</div>
	)
}
