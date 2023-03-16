function Member(props) {
	const deleteMemberHandler = () => {
		console.log('delete )))) ')
	};

	return (
		<li>
			<div>
				<h3>{props.name}</h3>
				<p>{props.email}</p>
			</div>
			<div>
				<p>{props.taskPoints}</p>
			</div>
			
		</li>
	)
}

export default Member
