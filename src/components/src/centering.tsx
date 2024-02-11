export function Centering(props: { children: string[]; key: string }) {
	const { children, key } = props
	return (
		<>
			{children.map((child, index) =>
				index === 0 ? (
					child
				) : (
					<span className='inline-block' key={`${key}-${index}`}>
						{child}
					</span>
				),
			)}
		</>
	)
}
