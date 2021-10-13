import styled from 'styled-components'

export const Card = styled.div `

	width: 340px;
	height: 430px;

	filter: drop-shadow(8px 8px 24px rgba(12, 41, 208, 0.16));

	border-radius: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	
	color: #fff;

	font-family: 'Montserrat', sans-serif;

	background-color: #fff;
`

export const Img = styled.img `
	width: 100%;
	height: 45%;

	border: none;
`

export const BottomSide = styled.div `
	width: 100%;
	height: 45%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly	;
`

export const Text = styled.h3 `
	max-width: 85%;

	font-size: 18px;
	font-weight: 100;
	line-height: 24px;

	margin-left: 20px;

	color: #000;
`

export const FunctionInfo = styled.div `
	width: 86px;
	height: 31px;

	padding: 6px, 12px, 6px, 12px;

	border: 1px #9499B3 solid;
	border-radius: 50px;

	color: #9499B3;

	display: flex;
	justify-content: center;
	align-items: center;
	
	margin-left: 20px;
`

export const H5 = styled.h5 `
	margin-left: 20px;
	color: #42D76B;
	font-weight: 700;

	cursor: pointer;
`

export const DivCoopersLogo = styled.img `
	position: relative;
	bottom: 25px;
	left: 120px;

	height: 50px;
	/* width: auto; */
`