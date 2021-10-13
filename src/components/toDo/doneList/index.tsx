import { useTasks } from '../../../provider/tasks'
import { DoneRow } from './doneRow'
import * as S from './styles'

interface Tasks {
	'description': string,
	'id': number,
	'completed': boolean
}

export const DoneList = () => {

	const { tasks, eraseAllTasks, updateTask} = useTasks()

	const concludeTasks = (acc: number, current: Tasks) => {
		if (current.completed) return acc + 1
		return 0
	}

	return (
		<S.Card>
			<S.TopBorder />
			<S.Titles>
				<S.H1>Done</S.H1>
				<div>
					<S.P>Congratulations!</S.P>
					<S.Span>You have done {tasks.reduce(concludeTasks, 0)} tasks</S.Span>
				</div>
			</S.Titles>
			<S.TasksList onDragOver={(event) => event.preventDefault()} onDrop={(event) => updateTask(Number(event.dataTransfer.getData('id')))} >
				{tasks.map(({id, description, completed}) => completed && <DoneRow id={id}>{description}</DoneRow>)}
			</S.TasksList>
			<S.ButtonErase onClick={() => eraseAllTasks('done')} >erase all</S.ButtonErase>
		</S.Card>
	)
}
