import styled from 'styled-components'


export const Card = styled.div `
	width: 365.4px;
	height: 700px;

	box-shadow: 0px 4px 60px rgba(66, 66, 66, 0.2);

	display: flex;
	flex-direction: column;
	align-items: center;

	font-family: 'Montserrat', sans-serif;

	@media(min-width: 768px)  {
		height: 754px;	
	}
`

export const TopBorder = styled.div `
	width: 100%;
	height: 20px;

	background-color: #E88D39;
`

export const Titles = styled.div `
	width: 80%;
	height: 20%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	margin-top: 20px;
`

export const H1 = styled.h1 `
	font-size: 35px;
	font-weight: 600;
	letter-spacing: 3px;
	font-family: 'Poppins', sans-serif;
`

export const P = styled.p `
	text-align: center;
	font-size: 28px;
	line-height: 29px;
`

export const TasksList = styled.div `
	width: 90%;
	height: 370px;

	overflow-y: scroll;

	@media(min-width: 768px)  {
		height: 410px;
	}
`

export const DivAddNewTask = styled.div `
	min-width: 200px;
	height: 50px;

	display: flex;
	align-items: center;

	cursor: pointer;

	input {
		outline: none;
		border: 1px solid #d0d0d0;
		margin: 10px;
	}

	button {
		border: none;
		height: 25px;
		width: 40px;
	}
`

export const PAddNew = styled.p `
	margin-left: 15px;
`

export const ButtonErase = styled.button `
	width: 300px;
	height: 60px;
	
	border: none;
	border-radius: 10px;

	background-color: black;

	color: #fff;
	font-size: 25px;
	font-weight: 700;
	letter-spacing: 1px;
	font-family: 'Poppins', sans-serif;

	margin-top: 50px;

	cursor: pointer;
`
