import { useState } from 'react'
import UncompleteTask from '../../../../assets/EllipseTodo2.svg'
import { useTasks } from '../../../../provider/tasks'
import * as S from './styles'

interface ToDoRowProps {
	'children': string,
	'id': number,
}

export const TodoRow = ({children, id}: ToDoRowProps) => {

	const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false)

	const {removeTask, updateTask} = useTasks()

	return (
		<S.TaskRow onDragStart={(event) => event.dataTransfer.setData('id', id.toString())} draggable onMouseOut={() => setShowDeleteTask(false) } onMouseOver={() => setShowDeleteTask(true)}>
			<S.DivIcon>
				<img src={UncompleteTask} onClick={() => updateTask(id)} alt='task uncompleted' />
			</S.DivIcon>
			<S.TaskText>
				{children.slice(0, 50)}
			</S.TaskText>
			{showDeleteTask && <S.DeleteOption onClick={() => removeTask(id)} >delete</S.DeleteOption>}
		</S.TaskRow>
	)
}