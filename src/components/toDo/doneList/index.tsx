import { useTasks } from '../../../provider/tasks'
import { DoneRow } 	from './doneRow'
import * as S 			from './styles'

interface Tasks {
	'description': string,
	'id': number,
	'completed': boolean
}

export const DoneList = () => {

	const { tasks, eraseAllTasks, updateTask} = useTasks()

	const concludedTasks = (acc: number, current: Tasks) => {
		if (current.completed) return acc + 1
		return 0
	}

	const JSXRenderDoneTasks = ({id, description, completed}: Tasks) => {
		return completed && <DoneRow id={id}>{description}</DoneRow>
	}

	return (
		<S.Card>
			<S.TopBorder />
			<S.Titles>
				<S.H1>Done</S.H1>
				<div>
					<S.P>Congratulations!</S.P>
					<S.Span>You have done {tasks.reduce(concludedTasks, 0)} tasks</S.Span>
				</div>
			</S.Titles>
			<S.TasksList 
				onDragOver={(event) => event.preventDefault()} 
				onDrop={(event) => updateTask(Number(event.dataTransfer.getData('id')))} 
			>
				{tasks.map(JSXRenderDoneTasks)}
			</S.TasksList>
			<S.ButtonErase onClick={() => eraseAllTasks('done')} >erase all</S.ButtonErase>
		</S.Card>
	)
}
