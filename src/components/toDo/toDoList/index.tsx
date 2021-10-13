import { TodoRow } 							from './TodoRow'
import * as S 									from './styles'
import AddNewTask 							from '../../../assets/EllipseTodo1.svg'
import { useTasks } 						from '../../../provider/tasks'
import { useState } 						from 'react'

interface Tasks {
	'description': string,
	'id': number,
	'completed': boolean
}


export const TodoList = () => {

	const {tasks, addTask, eraseAllTasks} 					= useTasks()
	const [showAddTaskInput, setShowAddTaskInput] 	= useState<boolean>(false)
	const [addTaskInputValue, setAddTaskInputValue] = useState<string>('')


	const JSXRenderToDoTaks = ({id, description, completed}: Tasks) => {
		return !completed && <TodoRow id={id}>{description}</TodoRow>
	}

	
	return (
		<S.Card>
			<S.TopBorder />
			<S.Titles>
				<S.H1>To-Do</S.H1>
				<div>
					<S.P>Take a breath</S.P>
					<S.P>Start doing</S.P>
				</div>
			</S.Titles>
			<S.TasksList>
				<S.DivAddNewTask onClick={() => setShowAddTaskInput(true)} >
					<img src={AddNewTask} alt='add new task' />
					{
						!showAddTaskInput 
						? 
						<S.PAddNew>Add new here...</S.PAddNew> 
						: 
						<div>
							<input onChange={(event)  => setAddTaskInputValue(event?.target.value)} />
							<button onClick={ () => {
									addTask(addTaskInputValue)
									setShowAddTaskInput(false)
								} 
							} >add</button>
						</div>
					}
				</S.DivAddNewTask>
				{tasks.map(JSXRenderToDoTaks)}
			</S.TasksList>
			<S.ButtonErase onClick={() => eraseAllTasks('todo')}>erase all</S.ButtonErase>
		</S.Card>
	)
}
