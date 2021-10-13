import styled from 'styled-components'

export const Header = styled.header `
	width: 85vw;
	height: 600px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	margin: 50px;

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
		
		margin: 10px;

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
