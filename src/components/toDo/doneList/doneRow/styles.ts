import styled from 'styled-components'
import * as TodoRowStyles from '../../toDoList/TodoRow/styles'

export const CompletedTaskRow = styled(TodoRowStyles.TaskRow) ``

export const DivIcon = styled(TodoRowStyles.DivIcon) `
	width: 40px;

	display: flex;
	justify-content: flex-start;
`

export const TaskText = styled.div ``

export const DeleteOption = styled(TodoRowStyles.DeleteOption) `
	margin-left: auto;
	padding-right: 20px;

	color: #aaa;

	border: none;

	background-color: #fff;
`