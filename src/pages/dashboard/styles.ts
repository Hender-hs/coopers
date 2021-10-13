import styled from 'styled-components'

export const BodyPage = styled.div `
	width: 98vw;
	height: 440vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`

export const CirclesImg = styled.img `
	cursor: pointer;
`


export const DivGetInTouch = styled.div `

	margin-top: 120px;

	@media (min-width: 768px) {
		margin-top: 180px;
	}
`

export const ButtonLogOut = styled.button `
	position: absolute;
	right: 20px;
	top: 15px;

	width: 120px;
	height: 40px;

	background-color: #000;

	font-size: 14px;
	font-family: 'Poppins', sans-serif;

	border: none;

	color: #fff;

	cursor: pointer;

	@media (min-width: 768px) {
		top: 25px;
	}
`