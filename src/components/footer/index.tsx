import * as S 							from './styles'
import FooterSVG 						from '../../assets/footer.svg'
import BottomFooter 				from '../../assets/subFooter.svg'
import FooterSVGDesktop 		from '../../assets/footerDesktop.svg'
import BottomFooterDesktop 	from '../../assets/subFooterDesktop.svg'


export const Footer = () => {

	return (
		<S.Footer>
			<S.DivInfo>
				<div className='company-info' >
					<S.P>Need help?</S.P>
					<S.PEmail>coopers@coopers.pro</S.PEmail>
					<S.PRights>2021 Coopers. All rights reserved</S.PRights>
				</div>
				<S.BottomFooterImg src={BottomFooter} />
				<S.BottomFooterImgDesktop src={BottomFooterDesktop} />
			</S.DivInfo>
			<S.Img src={FooterSVG} />
			<S.ImgDesktop src={FooterSVGDesktop} />
		</S.Footer>
	)
}

