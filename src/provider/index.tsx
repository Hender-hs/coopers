import { ReactNode } from 'react'
import { TasksProvider } from './tasks'


interface Props {
	'children': ReactNode
}

export const Provider = ({children}: Props) => {

	return (
		<TasksProvider>
			{children}
		</TasksProvider>
	)
}
