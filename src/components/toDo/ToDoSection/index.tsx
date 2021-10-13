import { useState } 						from 'react'
import * as S 									from './styles'
import { DoneList } 						from '../doneList'
import { TodoList } 						from '../toDoList'
import CircleGray 							from '../../../assets/EllipseGray.svg'
import CircleGreen 							from '../../../assets/EllipseGreen.svg'

interface ToDoSectionProps {
	'onDesktopScreen': boolean
}

export const ToDoSection = ({onDesktopScreen}: ToDoSectionProps) => {

	const [switchTasksBoxes, setSwitchTasksBoxes] 	= useState<number>(1)

	return (
		<S.DivTasksBoxes id='to-do-box' >
		{
		onDesktopScreen
		?
		<>
			<TodoList />
			<DoneList />
		</>
		:
		<>
			{switchTasksBoxes ? <TodoList /> : <DoneList />}
			<div className='circles'>
				<S.CirclesImg src={switchTasksBoxes ? CircleGray : CircleGreen}  onClick={() => setSwitchTasksBoxes(0) }	/> 
				<S.CirclesImg src={!switchTasksBoxes ? CircleGray : CircleGreen} onClick={() => setSwitchTasksBoxes(1) } />
			</div>
		</>
		}
	</S.DivTasksBoxes>
	)
}