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
					<div className='login-box' >
						<div>
							<img src={ImgModal1} />
							<img src={ImgModal2Title} />
						</div>
						<div className='input-area' >
							<input onChange={(event) => setUserLogin(event.target.value)} />
							<input onChange={(event) => setPasswordLogin(event.target.value)} />
							<button onClick={() => makeLogin(userLogin, passwordLogin)} >Log-In</button>
						</div>
					</div>
				</S.AuthModal>
		)
}