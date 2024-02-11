import { Metadata } from 'next'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'privacy-policy',
}

export default function Page() {
	return (
		<div className='mx-auto w-full max-w-3xl px-4 pb-10 pt-28'>
			<h2 className='mx-auto w-fit border-b border-b-black text-center text-xl md:text-2xl'>プライバシーポリシー</h2>
			<dl className='py-10 text-lg md:text-xl'>
				{[
					{
						detail:
							'本サイトでは、お客様の個人情報を収集する場合があります。収集する情報は、お名前、メールアドレス、住所などです。これらの情報は、サービス提供やお問い合わせへの対応のために使用されます。',
						label: '個人情報の収集',
					},
					{
						detail:
							'お客様の個人情報は、適切なセキュリティ対策を講じて保護されます。また、法律に基づく要請がない限り、第三者との共有は行いません。お客様の個人情報は、お客様の同意を得ることなく、他の目的で使用されることはありません。',
						label: '個人情報の保護と利用',
					},
					{
						detail:
							'本サイトでは、お客様により良いサイト体験を提供するために、Cookieを使用する場合があります。Cookieは個人情報を収集するものではありません。ブラウザの設定でCookieを無効にすることも可能です。',
						label: 'Cookieの使用',
					},
					{
						detail:
							'本ポリシーは、変更される場合があります。重要な変更がある際には、ウェブサイト上でお知らせいたします。',
						label: 'プライバシーポリシーの変更',
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
