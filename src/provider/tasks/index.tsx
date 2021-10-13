import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface Tasks {
	'description': string,
	'id': number,
	'completed': boolean
}


interface Context {
	'addTask': (description: string) => void,
	'removeTask': (id: number) => void,
	'updateTask': (id: number) => void,
	'eraseAllTasks': (whichTasks: string) => void,
	'tasks': Tasks[]
}

interface ProviderProps {
	'children': ReactNode
}


export const TasksContext = createContext<Context>({} as Context)

export const TasksProvider = ({children}: ProviderProps) => {

	const setState = localStorage.getItem('coopers/tasks') || '[]'
	const [tasks, setTasks] = useState<Tasks[]>(JSON.parse(setState))


	const setLocalStorage = () => {
		const toSet = JSON.stringify(tasks)
		localStorage.setItem('coopers/tasks', toSet)
	}


	const addTask = (description: string) => {
		const newTask = {
			description,
			'id': tasks.length,
			'completed': false
		}
		setTasks([...tasks, newTask])
	}
	

	const removeTask = (id: number) => {
		const newTasksArray = tasks.filter((el) => el.id !== id)
		setTasks(newTasksArray)
	}


	const updateTask = (id: number) => {
		const newTasksArray = tasks.map((el) => {
				if (el.id === id) el.completed = true 
				return el
			}
		)
		setTasks(newTasksArray)
	}


	const eraseAllTasks = (whichTasks: string) => {
		whichTasks === 'todo' && setTasks(tasks.filter((el) => el.completed !== false))
		whichTasks === 'done' && setTasks(tasks.filter((el) => el.completed !== true))
	}


	useEffect(() => setLocalStorage())

	
	return (
		<TasksContext.Provider value={{ addTask, eraseAllTasks, removeTask, updateTask, tasks }}>
			{children}
		</TasksContext.Provider>
	)
}

export const useTasks = () => useContext(TasksContext)