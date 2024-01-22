import { Box, Pagination, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ExerciseOptions, FetchData } from '../utils/FetchData'
import { ExerciseCard } from './ExerciseCard'

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const exercisePerPage = 9

	const paginate = (e, value) => {
		setCurrentPage(value)
		window.scrollTo({ top: 1800, behavior: 'smooth' })
	}

	const indexOfLastExercise = currentPage * exercisePerPage
	const indexOfFirstExercise = indexOfLastExercise - exercisePerPage

	const currentExercise = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	)

	useEffect(() => {
		const exercisesFetchData = async () => {
			let exercisesData = []

			if (bodyPart === 'all') {
				const exercisesData = await FetchData(
					'https://exercisedb.p.rapidapi.com/exercises',
					ExerciseOptions
				)
			} else {
				const exercisesData = await FetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					ExerciseOptions
				)
				setExercises(exercisesData)
			}
		}
		exercisesFetchData()
	}, [bodyPart])

	return (
		<Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
			<Typography variant='h3' mb='46px'>
				Showing Results
			</Typography>
			<Stack
				direction='row'
				flexWrap='wrap'
				justifyContent='center'
				sx={{ gap: { lg: '100px', xs: '50px' } }}
			>
				{currentExercise.map((exercise, index) => (
					<ExerciseCard exercise={exercise} key={index} />
				))}
			</Stack>
			<Stack mt='100px' alignItems='center'>
				{exercises.length > 9 && (
					<Pagination
						shape='rounded'
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisePerPage)}
						page={currentPage}
						onChange={paginate}
					/>
				)}
			</Stack>
		</Box>
	)
}
