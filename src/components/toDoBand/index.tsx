import * as S from './styles'
import TodoBandSVG from '../../assets/TodoBand.svg'
import TodoBandDesktopSVG from '../../assets/TodoBandDesktop.svg'

export const TodoBand = () => {

	return (
		<S.DivBand>
			<S.SVGBandImg src={TodoBandSVG} />
			<S.SVGBandImgDesktop src={TodoBandDesktopSVG} />
			<S.BandTextSection>
				<S.BandTitle>To-do List</S.BandTitle>
				<S.Hr />
				<S.P>Drag and drop to set your main priorities, check when done and create what´s new.</S.P>
			</S.BandTextSection>
		</S.DivBand>
	)
}
