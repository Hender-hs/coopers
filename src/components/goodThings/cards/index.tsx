import * as S from './styles'
import CoopersLogo from '../../../assets/CoopersLogo.svg'

interface Props {
	'props': {
		'description': string,
		'imgPath': string
	}
}

export const GoodThingsCard = ({props: {description, imgPath}}: Props) => {
	
	return (
		<S.Card>
			<S.Img src={imgPath} />
			<S.DivCoopersLogo src={CoopersLogo}  />
			<S.BottomSide>
				<S.FunctionInfo>function</S.FunctionInfo>
				<S.Text>{description}</S.Text>
				<S.H5>read more</S.H5>
			</S.BottomSide>
		</S.Card>
	)
}
