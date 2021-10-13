import styled from 'styled-components'

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


export const CirclesImg = styled.img `
	cursor: pointer;
`