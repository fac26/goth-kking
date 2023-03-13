import Member from "./Member"
// import classes from '@styles/Task.module.css';//styling

function ListOfMembers(props) {
	return (
		<ul>
			{props.members.map((spaceMember) => {
				return (
                    <>				
                    <Member
						key={spaceMember.id}
						id={spaceMember.id}
						name={spaceMember.name}
						email={spaceMember.email}
					/>
                    </>

				)
			})}
		</ul>
	)
}

export default ListOfMembers