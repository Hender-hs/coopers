import styled from 'styled-components'

export const DivBand = styled.div `
	height: 300px;
	font-family: 'Poppins', sans-serif;
	
	@media (min-width: 768px) {
		height: 30vw;
		margin-top: 300px;
	}
`

export const SVGBandImg = styled.img `
	width: 100vw;

	@media (min-width: 768px) {
		display: none;
	}
`

export const SVGBandImgDesktop = styled.img `
	display: none;

	@media (min-width: 768px) {
		width: 100vw;
		display: unset;
	}
`

export const BandTextSection = styled.div `
	position: relative;
	top: -25vh; //-------------------------------
	left: 15vw;

	height: 20vh;
	width: 70vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;


	@media (min-width: 768px) {
		top: -40vh; //-------------------------------
	}
`

export const BandTitle = styled.h1 `
	font-size: 40px;
	font-weight: 500;
	line-height: 60px;
	color: #fff;
	text-align: center;

	width: 60vw;

	@media (min-width: 768px) {
		font-size: 65px;
		font-weight: 600;
	}
`

export const Hr = styled.hr `
	border: none;
	border-radius: 10px;

	height: 5px;
	width: 60vw;

	background-color: #4AC959;

	@media (min-width: 768px) {
		width: 20vw;
	}
`

export const P = styled.p `
	line-height: 28px;
	font-size: 15px;
	color: #fff;
	text-align: center;
	font-family: 'Mulish', sans-serif;

	width: 60vw;

	@media (min-width: 768px) {
		width: 40vw;

		font-size: 25px;
	}
`