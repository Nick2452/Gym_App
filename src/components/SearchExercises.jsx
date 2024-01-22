import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ExerciseOptions, FetchData } from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollBar'

export const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
	const [search, setSearch] = useState('')
	const [bodyParts, setBodyParts] = useState([])

	useEffect(() => {
		const fetchExerciseData = async () => {
			const bodyPartsData = await FetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				ExerciseOptions
			)
			setBodyParts(['all', ...bodyPartsData])
		}
		fetchExerciseData()
	}, [])

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await FetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				ExerciseOptions
			)

			const searchedExercises = exercisesData.filter(
				exercise =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search)
			)
			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

			setExercises(searchedExercises)
			setSearch('')
		}
	}

	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography
				fontWeight={700}
				sx={{
					textTransform: 'capitalize',
					textAlign: 'center',
					fontSize: { lg: '40px', sx: '30px' },
					mb: '50px',
				}}
			>
				Awesome exercises you <br />
				should know
			</Typography>
			<Box position='relative' mb='70px'>
				<TextField
					sx={{
						input: {
							fontWeight: '700',
							border: 'none',
							borderRadius: '5px',
						},
						backgroundColor: '#ffff',
						width: { lg: '800px', sm: '350px' },
					}}
					label='Search exercises'
					value={search}
					variant='outlined'
					onChange={e => setSearch(e.target.value.toLowerCase())}
					autoComplete='off'
				/>
				<Button
					className='search-btn'
					sx={{
						backgroundColor: '#e01304',
						width: { lg: '175px', sm: '80px' },
						color: '#ffff',
						height: '56px',
						fontSize: { lg: '20px', sm: '14px' },
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					isBodyParts
				/>
			</Box>
		</Stack>
	)
}
