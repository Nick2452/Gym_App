import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({ exercise }) => {
	return (
		<Link className='exercise-card' to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
			<Stack direction='row'>
				<Button
					sx={{
						ml: '20px',
						backgroundColor: '#ff1f21',
						color: '#000',
						borderRadius: '10px',
						fontSize: '18px',
						textTransform: 'capitalize',
					}}
				>
					{exercise.bodyPart}
				</Button>
				<Button
					sx={{
						ml: '20px',
						backgroundColor: '#ff245d',
						color: '#000',
						borderRadius: '10px',
						fontSize: '18px',
						textTransform: 'capitalize',
					}}
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				ml='20px'
				fontWeight='bold'
				color='#000'
				sx={{ fontSize: { lg: '24px', xs: '20px' } }}
				mt='15px'
				pb='15px'
				textTransform='capitalize'
			>
				{exercise.name}
			</Typography>
		</Link>
	)
}
