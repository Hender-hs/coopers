import { useState } from 'react'
import CompleteTask from '../../../../assets/EllipseDone.svg'
import { useTasks } from '../../../../provider/tasks'
import * as S 			from './styles'

interface DoneRowProps {
	'children': string,
	'id': number
}

export const DoneRow = ({children, id}: DoneRowProps) => {

	const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false)

	const { removeTask } = useTasks()

	return (
		<S.CompletedTaskRow onMouseOut={() => setShowDeleteTask(false) } onMouseOver={() => setShowDeleteTask(true)}>
			<S.DivIcon>
				<img src={CompleteTask} alt='complete the task' />
			</S.DivIcon>
			<S.TaskText>
				{children.slice(0, 50)}
			</S.TaskText>
			{showDeleteTask && <S.DeleteOption onClick={() => removeTask(id)} >delete</S.DeleteOption>}
		</S.CompletedTaskRow>
	)
}