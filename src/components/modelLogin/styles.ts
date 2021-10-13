import styled from 'styled-components'

export const AuthModal = styled.div `
	position: absolute;

	width: 100vw;
	height: 100vh;

	background-color: rgb(0, 0, 0, 0.5);
	
	z-index: 10;

	display: flex;
	justify-content: center;

	font-family: 'Montserrat', sans-serif;
`

export const LoginBox = styled.div `
	width: 432px;
	height: 721px;

	margin-top: 50px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	background-color: #fff;

	@media (min-width: 768px) {
		width: 932px;
		height: 721px;
		
		margin-top: 100px;
	}
` 

export const Img1 = styled.img `
	width: 180px;

	@media (min-width: 768px) {
		width: auto;
	}
`

export const Img2 = styled.img `
	width: 250px;
	
	@media (min-width: 768px) {
		width: auto;
	}
`

export const inputArea = styled.div `
	height: 50%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`

export const DivInputs = styled.div `
	height: 100px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`

export const Label = styled.label `
	font-weight: 900;
	font-size: 25px;
`

export const Input = styled.input `
	width: 342px;
	height: 44px;

	border: 1px #000 solid;
	border-radius: 10px;
	font-size: 20px;

	outline: none;

	padding-left: 10px;
`

export const ButtonLogin = styled.button `
	width: 335.93px;
	height: 68.68px;

	background-color: #4AC959;

	font-size: 25px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	letter-spacing: 1px;
	color: #fff;

	border: none;
	border-radius: 10px;

	cursor: pointer;
`