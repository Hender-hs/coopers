import styled from 'styled-components'

export const BodyPage = styled.div `
	width: 98vw;
	height: 400vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`

export const Header = styled.header `
	width: 85vw;
	height: 600px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	.name-logo {
		font-size: 40px;
		font-weight: 600;

		display: flex;
		align-items: center;
	}

	.companys-name {
		font-family: 'Poppins', sans-serif;
	}

	.logo {
		margin-right: 15px;
	}

	.first-title {
		font-size: 75px;
		font-weight: 700;
	}

	.second-title {
		color: #4AC959;
		font-size: 50px;
	}

	.third-subtitle, .fourth-subtitle {
		font-size: 30px;
	}


	@media (min-width: 768px) {
		width: 90vw;
		height: 800px;

		justify-content: unset;
		
		.name-logo {
			margin-top: 50px;
		}
		
		.section-titles-1 {
			margin-top: 110px;
		}

		.companys-name {
			margin-bottom: 8px;
			font-size: 50px;
			font-weight: 300;
		}
		
		.first-title {
			font-size: 100px;
			letter-spacing: 1px;
		}

		.second-title {
			font-size: 70px;
			font-weight: 100;
			line-height: 80px;
		}

		.third-subtitle {
			font-weight: 500;
			margin-top: 70px;
		}

		.button-div {
			margin-top: 50px;
		}
	}
`


export const ArrowImg = styled.img `
	position: absolute;
	right: 0;
	top: 5px;

	height: 20%;

	z-index: -1;

	@media (min-width: 768px) {
		display: none;
	}
`

export const ArrowImgDesktop = styled.img `
	display: none;

	@media (min-width: 768px) {
		position: absolute;
		right: 0;
		top: 0px;

		width: 50%;

		z-index: -1;

		display: unset;
	}
`


export const HeaderImg = styled.img `
	display: none;

	@media (min-width: 1200px) {
		display: unset;
		width: 30%;

		position: absolute;
		top: 215px;
		right: 230px;
	}
`



export const GoodThingsSection = styled.div `

	width: 347px;
	height: 661px;

	background-color: #4AC959;

	padding: 0 30px;

	border-radius: 10px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	.title {
		font-size: 40px;
		font-weight: 700;
		text-align: end;

		color: #fff;
	}

	@media (min-width: 768px) {
		width: 1080px;
		height: 520px;

		.title {
			position: relative;
			top: 50px;
			left: 50px;

			text-align: start;
		}
		
		.div-cards {
			width: 1200px;

			display: flex;
			justify-content: space-evenly;

			position: relative;
			top: 120px;
			left: 50px;
		}
	}

`

export const DivTasksBoxes = styled.div `
	height: 780px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.circles {
		width: 20%;

		display: flex;
		justify-content: space-between;

		margin-top: 30px;

	}

	margin-top: 100px;

	@media (min-width: 768px) {
		width: 800px;
		flex-direction: row;
		align-items: flex-start;
	}

`

export const CirclesImg = styled.img `
	cursor: pointer;
`

export const GoodThings = styled.div `
	height: 710px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.good-things-circles {
		min-width: 30%;
		margin-top: 30px;

		display: flex;
	}

	.good-things-circles > img {
		margin-right: 10px;
	}

	margin-top: 100px;

	@media (min-width: 768px) {

		margin-top: 150px;

		.good-things-circles {
			margin-top: 150px;
			min-width: 13%;
		}
	}
`

export const DivGetInTouch = styled.div `

	margin-top: 120px;

	@media (min-width: 768px) {
		margin-top: 180px;
	}
`

export const AuthModal = styled.div `
	position: absolute;

	width: 100vw;
	height: 100vh;

	background-color: rgb(0, 0, 0, 0.5);
	
	z-index: 10;

	display: flex;
	justify-content: center;

	.login-box {
		width: 932px;
		height: 721px;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		background-color: #fff;
	}

	.input-area {
		height: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

`

export const ButtonLogOut = styled.button `
	position: absolute;
	right: 10px;
	top: 20px;
`