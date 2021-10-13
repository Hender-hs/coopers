import { Footer } from '../../components/footer'
import { GetInTouch } from '../../components/getInTouch'
import { GoodThingsCard } from '../../components/goodThings/cards'
import { TodoList } from '../../components/toDo/toDoList'
import { TodoBand } from '../../components/toDoBand'
import * as S from './styles'

import CoopersLogo from '../../assets/CoopersLogo.svg'
import { Button } from '../../components/button'
import CoopersBigLogo from '../../assets/CoopersBigLogo.svg'
import CoopersBigLogoDesktop from '../../assets/CoopersBigLogoDesktop.svg'
import { useEffect, useState } from 'react'
import { DoneList } from '../../components/toDo/doneList'
import CircleGray from '../../assets/EllipseGray.svg'
import CircleGreen from '../../assets/EllipseGreen.svg'
import { goodThings } from './goodthingsContent'
import PCImg from '../../assets/headerPhoto.png'
import ImgModal1 from '../../assets/ModalImg1.svg'
import ImgModal2Title from '../../assets/ModalImg2Title.svg'


const goodThingsArrayLength = Number((goodThings.length / 3).toFixed(0))

const goodThingsInitialArray = Array(goodThingsArrayLength).fill(1, 0, 1).fill(0, 1)


export const Dashboard = () => {

	const [switchTasksBoxes, setSwitchTasksBoxes] = useState<number>(1)

	const [goodThingsIndexed, setGoodThingsIndexed] = useState<number[]>(goodThingsInitialArray)

	const [onDesktopScreen, setOnDesktopScreen] = useState<boolean>(document.body.offsetWidth >= 768 ? true : false)

	const [logedIn, setLogedIn] = useState<boolean>(Boolean(localStorage.getItem('coopers/login')))

	const [userLogin, setUserLogin] = useState<string>('')

	const [passwordLogin, setPasswordLogin] = useState<string>('')


	const updateGoodThingsIndex = (i: number) => {

		const array = [...goodThingsIndexed]

		const lastIndex = array.indexOf(1)

		array[i] = 1

		array[lastIndex] = 0

		setGoodThingsIndexed(array)
	}


	const calculateDocumentSize = () => {

		window.addEventListener('resize', () => {
			if (document.body.offsetWidth >= 768) return setOnDesktopScreen(true)
			return setOnDesktopScreen(false)
			}
		)
	}
	calculateDocumentSize()
		

	useEffect( () => {
		if (localStorage.getItem('coopers/login')) return setLogedIn(true)
		return setLogedIn(false)
	})


	const makeLogin = () => {
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
			<S.ButtonLogOut onClick={logOut} >Sair</S.ButtonLogOut>
			{
				!logedIn &&
				<S.AuthModal>
					<div className='login-box' >
						<div>
							<img src={ImgModal1} />
							<img src={ImgModal2Title} />
						</div>
						<div className='input-area' >
							<input onChange={(event) => setUserLogin(event.target.value)} />
							<input onChange={(event) => setPasswordLogin(event.target.value)} />
							<button onClick={makeLogin} >Log-In</button>
						</div>
					</div>
				</S.AuthModal>
			}
			<S.BodyPage>
				<S.Header>
					<div className='name-logo' >
						<img className='logo' src={CoopersLogo} alt='coopers company logo' />
						<h1 className='companys-name' > coopers</h1>
					</div>
					<div className='section-titles-1'>
						<h1 className='first-title' >Organize</h1>
						<h2 className='second-title' >your daily jobs</h2>
					</div>
					<div>
						<p className='third-subtitle' >The only way to get things done</p>
					</div>
					<div className='button-div' >
						<Button>Go to To-Do list</Button>
					</div>
					<S.ArrowImg src={CoopersBigLogo} />
					<S.ArrowImgDesktop src={CoopersBigLogoDesktop} />
					<S.HeaderImg src={PCImg} />
				</S.Header>
				<TodoBand />
				<S.DivTasksBoxes id='to-do-box' >
					{
					onDesktopScreen
					?
					<>
						<TodoList />
						<DoneList />
					</>
					:
					<>
						{switchTasksBoxes ? <TodoList /> : <DoneList />}
						<div className='circles'>
							<S.CirclesImg src={switchTasksBoxes ? CircleGray : CircleGreen}  onClick={() => setSwitchTasksBoxes(0) }	/> 
							<S.CirclesImg src={!switchTasksBoxes ? CircleGray : CircleGreen} onClick={() => setSwitchTasksBoxes(1) } />
						</div>
					</>
					}
				</S.DivTasksBoxes>
				<S.GoodThings>
					<S.GoodThingsSection>
						<h1 className='title'>GoodThings</h1>
						<div className='div-cards'>
							{
								onDesktopScreen?
								<>
									<GoodThingsCard props={goodThings[goodThingsIndexed.indexOf(1) * 1 + 3 ]} />
									<GoodThingsCard props={goodThings[goodThingsIndexed.indexOf(1) * 2 + 2 ]} />
									<GoodThingsCard props={goodThings[goodThingsIndexed.indexOf(1) * 3 + 1 ]} />
								</>
								:
								<GoodThingsCard props={goodThings[goodThingsIndexed.indexOf(1)]} />
							}
						</div>
					</S.GoodThingsSection>
					<div className='good-things-circles'>
						{
							goodThingsIndexed.map((num, i) =>
							!!num ? 
							<S.CirclesImg onClick={() => updateGoodThingsIndex(i)} key={i} src={CircleGreen} /> 
							: 
							<S.CirclesImg onClick={() => updateGoodThingsIndex(i)} key={i} src={CircleGray} />
							)
						}
					</div>
				</S.GoodThings>
				<S.DivGetInTouch>
					<GetInTouch />
				</S.DivGetInTouch>
				{/* <div> */}
					<Footer />
				{/* </div> */}
			</S.BodyPage>
		</>
	)	
}
