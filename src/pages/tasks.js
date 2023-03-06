//localhost:3000/tasks
import ListOfTasks from "@components/ListOfTasks"
const tasklist = [{id:1,taskName:'task 1',assignedMember:'basil',taskPoints:10}]

function Tasks() {

  return (<>
  <button >AddTask</button>
  <ListOfTasks tasks={tasklist}/>
  </>)
}
///
// export async function getStaticProps() {}

export default Tasks;