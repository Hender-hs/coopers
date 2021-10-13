import { useState }	from 'react'
import * as S 									from './styles'
import ImgModal1 								from '../../assets/ModalImg1.svg'
import ImgModal2Title 					from '../../assets/ModalImg2Title.svg'

interface LoginModelProps {
	'makeLogin': (userLogin: string, passwordLogin: string) => void
}

export const LoginModel = ({makeLogin}: LoginModelProps) => {

	const [userLogin, setUserLogin] 								= useState<string>('')
	const [passwordLogin, setPasswordLogin] 				= useState<string>('')

		return (
				<S.AuthModal>
					<S.LoginBox>
						<div>
							<S.Img1 src={ImgModal1} alt='ilustration1' />
							<S.Img2 src={ImgModal2Title} alt='ilustration2' />
						</div>
						<S.inputArea >
							<S.DivInputs>
								<S.Label>User: </S.Label>
								<S.Input onChange={(event) => setUserLogin(event.target.value)} />
							</S.DivInputs>
							<S.DivInputs>
								<S.Label>Password: </S.Label>
								<S.Input onChange={(event) => setPasswordLogin(event.target.value)} />
							</S.DivInputs>
							<S.ButtonLogin onClick={() => makeLogin(userLogin, passwordLogin)} >Log-In</S.ButtonLogin>
						</S.inputArea>
					</S.LoginBox>
				</S.AuthModal>
		)
}