//import {useState} from "react";
function AddTaskForm(props) {
//const [frequency, setFrequency] = useState('weekly')
const submitTaskHandler=(event)=>{
  event.preventDefault()
}
  return (
    <form onSubmit={submitTaskHandler}>
      <div>
        <label htmlFor="taskname"></label>
        <input id="taskname" type="text" name="taskname" />
      </div>
      <div>
        <label htmlFor="taskDescription"></label>
        <input id="taskDescription" type="text" name="taskDescription" />
      </div>
      <input type="number" name="points" />
      <select>
        {props.members.map(member => (
          <option key="" value={member.id}>{member.name}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskForm;