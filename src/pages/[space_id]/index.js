export default function SpaceHome(props) {
	return <div>Welcome to ${props}</div>
}

export async function getStaticPaths() {
	// const arrIds = getAllIds().map((idObj) => ({
	// 	params: {
	// 		space_id: idObj.id.toString()
	// 	}
	// }))
	// return {
	// 	paths: arrIds,
	// 	fallback: false
	// }
}

export async function getStaticProps(context) {
	// const spaceId = context.params.space_id //we receive this data when user visit this path, not during the build process
	// //fetch data from db for single fruit
	// const space = getSpaceById(spaceId)
	// return {
	// 	props: {
	// 		spaceData: space
	// 	}
	// }
}
