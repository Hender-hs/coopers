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
	right: 10px;
	top: 20px;
`