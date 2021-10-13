import styled from 'styled-components'


interface SendingEmailStatus {
  'status': string,
}


export const Card = styled.div `

	width: 390px;
	height: 580px;

	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05), 0px 1px 10px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.14);

	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	
	color: #000;

	font-family: 'Montserrat', sans-serif;

	@media (min-width: 768px) {
		width: 700px;
		height: 820px;
	}
`

export const ContactInputsSection = styled.div `
	width: 95%;
	height: 50%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	padding: 0 0 20px 15px;

	@media (min-width: 768px) {
		width: 90%;
		height: 60%;

		padding: 0 0 0 30px;
	}
`

export const NormalInput = styled.input `
	width: 80%;
	height: 30px;

	border: 0.5px solid #d0d0d0;
	border-radius: 5px;

	outline: none;

	padding-left: 10px;

	font-size: 18px;
	font-weight: 300;

	@media (min-width: 768px) {
		height: 50px;

		&::placeholder {
			font-size: 20px;
		}
	}
`

export const NameInput = styled(NormalInput) `
	width: 90%;
`

export const NameInfo = styled.div `
	width: 200px;
	width: 30px;
`

export const ContactInfo = styled.div `
	width: 100%;

	display: flex;
	justify-content: center;
`

export const Message = styled.div `
`

export const InputDiv = styled.div `
	width: 100%;
	height: 80px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`

export const TextAreaDiv = styled(InputDiv) `
	height: 150px;
`

export const TextInput = styled.textarea `
	width: 90%;
	height: 150px;

	border: 0.5px solid #d0d0d0;
	border-radius: 5px;

	outline: none;
	resize: none;

	padding: 10px 0 0 10px;

	font-size: 18px;

	@media (min-width: 768px) {
		&::placeholder {
			font-size: 20px;
		}
	}
`

export const Button = styled.button `
	width: 358.43px;
	height: 43.44px;

	filter: drop-shadow(0px 16px 24px rgba(6, 21, 43, 0.12));
	box-shadow: 0px 16px 24px rgba(6, 21, 43, 0.12);
	border: none;
	border-radius: 5px;

	color: #fff;
	font-size: 15px;

	background-color: #46BD62;

	text-transform: uppercase;
	cursor: pointer;


	@media (min-width: 768px) {
		width: 628.43px;
		height: 60px;
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 40px;
}
`

export const ImgLogo = styled.img `
	position: relative;
	top: 110px;
	right: 90px;

	width: 150px;

	@media (min-width: 768px) {
		top: 150px;
		right: 210px;

		width: 178.43px;
	}
`

export const Img = styled.img `
	position: relative;
	top: -95px;

	z-index: 1;

	@media (min-width: 768px) {
		top: -140px;

		width: 178.43px;
	}
`

export const Graphism = styled.img `
	position: relative;
	bottom: 175px;
	right: 50px;

	z-index: 0;

	@media (min-width: 768px) {
		bottom: 240px;
		right: 80px;
	}
`


export const BoxSendingStatus = styled.div<SendingEmailStatus> `
  position: fixed;
  left: auto;
  bottom: 100px;
  padding: 5px 20px;
  height: 50px;
  background: ${({status}) => {
      if (status === 'sent') return '#19bd19'
      if (status === 'sending') return 'white'
      if (status === 'error') return 'red'
    }
  };
  color: ${({status}) => {
      if (status === 'sending') return 'var(--custom-black)'
      if (status === 'sent') return 'var(--white)'
      if (status === 'error') return 'var(--white)'
    }
  };
  opacity: ${({status}) => status === 'finalize-box' || status === 'null' ? '0' : '1'};
  transform: translateY(${({status}) => status === 'null' || status === 'finalize-box' ? '10vh' : '0' });
  transition: 1.5s;
  display: flex;
  align-items: center;
  justify-content: center;
	border-radius: 10px;
	filter: drop-shadow(0px 16px 24px rgba(6,21,43,0.12));
	box-shadow: 0px 16px 24px rgba(6,21,43,0.12);
  z-index: 10;
`