import * as S from './styles'

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
			<S.BottomSide>
				<S.FunctionInfo>function</S.FunctionInfo>
				<S.Text>{description}</S.Text>
				<S.H5>read more</S.H5>
			</S.BottomSide>
		</S.Card>
	)
}
