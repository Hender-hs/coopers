import * as S 									from './styles'
import { useState } 						from 'react'
import { goodThings } 					from './goodthingsContent'
import { GoodThingsCard } 			from '../../../components/goodThings/cards'
import CircleGray 							from '../../../assets/EllipseGray.svg'
import CircleGreen 							from '../../../assets/EllipseGreen.svg'

interface GoodThingsGroundProps {
	'onDesktopScreen': boolean,
}

const goodThingsArrayLength = Number((goodThings.length / 3).toFixed(0))
const goodThingsInitialArray = Array(goodThingsArrayLength).fill(1, 0, 1).fill(0, 1)

export const GoodThingsGround = ({onDesktopScreen}: GoodThingsGroundProps) => {

	const [goodThingsIndexed, setGoodThingsIndexed] = useState<number[]>(goodThingsInitialArray)


	const updateGoodThingsIndex = (i: number) => {
		const array = [...goodThingsIndexed]
		const lastIndex = array.indexOf(1)
		array[i] = 1
		array[lastIndex] = 0
		setGoodThingsIndexed(array)
	}

	return (
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
	)
}
