import CoopersLogo 							from '../../assets/CoopersLogo.svg'
import { Button } 							from '../../components/button'
import CoopersBigLogo 					from '../../assets/CoopersBigLogo.svg'
import CoopersBigLogoDesktop 		from '../../assets/CoopersBigLogoDesktop.svg'
import PCImg 										from '../../assets/headerPhoto.png'
import * as S 									from './styles'

export const Header = () => {

	return (
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
	)
}