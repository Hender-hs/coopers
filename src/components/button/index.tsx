import { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
	'children': ReactNode
}

export const Button = ({ children }: ButtonProps) => {

	return (
		<a href='#to-do-box'><S.StyledButton>{children}</S.StyledButton></a>
	)
}