import styled from 'styled-components'

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