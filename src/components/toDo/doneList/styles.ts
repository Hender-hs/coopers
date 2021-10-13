import styled from 'styled-components'
import * as TodoListStyle from '../toDoList/styles'

export const Card = styled(TodoListStyle.Card) `
	height: 700px;

	@media(min-width: 768px)  {
		height: 581px;	
	}
`

export const TopBorder = styled(TodoListStyle.TopBorder) `
	background-color: #4AC959;
`

export const Titles = styled(TodoListStyle.Titles) ``

export const H1 = styled(TodoListStyle.H1) `
	font-size: 40px;
`

export const P = styled(TodoListStyle.P) `
	font-size: 25px;
`

export const Span = styled.span `
	text-align: center;
	font-size: 23px;
	font-weight: 600;
	line-height: 39px;
`

export const TasksList = styled(TodoListStyle.TasksList) `
	height: 370px;
	margin-top: 30px;

	@media(min-width: 768px)  {
		height: 280px;	
	}
`

export const ButtonErase = styled(TodoListStyle.ButtonErase) `
	margin-top: 10px;
`
