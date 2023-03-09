function SpaceList({ spaces }) {
	return (
		<div className="form-widget">
			{spaces ? (
				<ul>
					{spaces.map((spaceitem) => (
						<li
							key={spaceitem.id}
							id={spaceitem.id}>
							{spaceitem.name}
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default SpaceList
