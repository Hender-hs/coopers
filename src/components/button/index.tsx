import { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
	'children': ReactNode
}

export const Button = ({ children }: ButtonProps) => {

	return (
		<S.StyledButton><a href='#to-do-box'>{children}</a></S.StyledButton>
	)
}