import styled from 'styled-components'

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