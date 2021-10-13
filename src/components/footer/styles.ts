import styled from 'styled-components'


export const Footer = styled.footer `
	margin-top: 60px;

	font-family: 'Poppins', sans-serif;

	@media (min-width: 768px) {
		margin-top: 0px;
	}	
`

export const Img = styled.img `
	width: 100vw;
	
	@media (min-width: 768px) {
		display: none;
	}
`

export const ImgDesktop = styled.img `
	display: none;

	@media (min-width: 768px) {
		width: 99.5vw;
		display: unset;
	}
`

export const DivInfo = styled.div `
	position: relative;
	bottom: -170px;

	width: 100%;
	height: 130px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	color: #fff;

	text-align: center;


	.company-info {
		height: 80px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	@media (min-width: 768px) {
		bottom: -355px;
		height: 250px;

		.company-info {
			height: 150px;
		}
	}
`

export const P = styled.p `
	font-size: 20px;
	line-height: 20px;

	@media (min-width: 768px) {
		font-size: 30px;
	}
`

export const PEmail = styled.p `
	font-size: 13px;
	font-weight: 800;
	text-decoration: underline;
	line-height: 18px;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`

export const PRights = styled.p `
	font-size: 10px;
	line-height: 21px;

	@media (min-width: 768px) {
		font-size: 13px;
	}
`

export const BottomFooterImg = styled.img `
	width: 100vw;

	@media (min-width: 768px) {
		display: none;
	}
`

export const BottomFooterImgDesktop = styled.img `
	display: none;
	width: 30vw;

	@media (min-width: 768px) {
		width: auto;
		display: unset;
	}
`
