import { Footer } 							from '../../components/footer'
import { GetInTouch } 					from '../../components/getInTouch'
import { TodoBand } 						from '../../components/toDoBand'
import * as S 									from './styles'
import { useEffect, useState }	from 'react'
import { LoginModel } 					from '../../components/modelLogin'
import { Header } 							from '../../components/header'
import { GoodThingsGround } 		from '../../components/goodThings/ground'
import { ToDoSection } 					from '../../components/toDo/ToDoSection'


export const Dashboard = () => {

	const isWidth768px 					= document.body.offsetWidth >= 768 ? true : false
	const isUserInLocalStorage 	= Boolean(localStorage.getItem('coopers/login'))

	
	const [onDesktopScreen, setOnDesktopScreen]	= useState<boolean>(isWidth768px)
	const [logedIn, setLogedIn] 								= useState<boolean>(isUserInLocalStorage)


	const calculateDocumentSize = () => {
		window.addEventListener('resize', () => {
			if (document.body.offsetWidth >= 768) return setOnDesktopScreen(true)
			return setOnDesktopScreen(false)
			}
		)
	}
	calculateDocumentSize()
		

	useEffect( () => {
		const getItemFromLocalStorage = () => {
			if (localStorage.getItem('coopers/login')) return setLogedIn(true)
			return setLogedIn(false)
		}
		getItemFromLocalStorage()
	})


	const makeLogin = (userLogin: string, passwordLogin: string) => {
		const data = JSON.stringify({'user': userLogin, 'passwrod': passwordLogin})
		localStorage.setItem('coopers/login', data)
		setLogedIn(true)
	}


	const logOut = () => {
		localStorage.removeItem('coopers/login')
		setLogedIn(false)
	}


	useEffect( () => {
		const ModelBodyOverflow = () => {
			if (!logedIn) document.body.style.overflow = 'hidden' 
			if (!!logedIn) document.body.style.overflow = 'unset'
		}
		ModelBodyOverflow()
	}, [logedIn])


	return (
		<>
			<S.ButtonLogOut onClick={logOut} >Log-out</S.ButtonLogOut>
			{!logedIn && <LoginModel makeLogin={makeLogin} />}

			<S.BodyPage>
				<Header />
				<TodoBand />
				<ToDoSection onDesktopScreen={onDesktopScreen} />
				<GoodThingsGround onDesktopScreen={onDesktopScreen} />
				<S.DivGetInTouch>
					<GetInTouch />
				</S.DivGetInTouch>
				<Footer />
			</S.BodyPage>
		</>
	)	
}
