import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import NavBar from './components/NavBar'
import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'

import './App.css'

export const App = () => {
	return (
		<Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDetails />} />
			</Routes>
			<Footer />
		</Box>
	)
}
