import Link from 'next/link'
function SpaceList({ spaces }) {
	return (
		<div className="form-widget">
			{spaces ? (
				<ul>
					{spaces.map((spaceitem) => (
						<li
							key={spaceitem.id}
							id={spaceitem.id}>
							<Link href={spaceitem.id.toString()}>{spaceitem.name}</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default SpaceList
