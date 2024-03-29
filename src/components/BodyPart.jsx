import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

export const BodyPart = ({ item, setBodyPart, bodyPart }) => (
	<Stack
		type='button'
		alignItems='center'
		justifyContent='center'
		className='bodyPart-card'
		sx={{
			borderTop: bodyPart === item ? '4px solid #FF2625' : '',
			zIndex: 1,
			background: '#fff',
			borderBottomLeftRadius: '20px',
			width: '250px',
			height: '260px',
			cursor: 'pointer',
			gap: '20px',
		}}
		onClick={() => {
			setBodyPart(item)
			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
		}}
	>
		<img src={Icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />
		<Typography
			fontSize='24px'
			fontWeight='bold'
			fontFamily='Alegreya'
			color='#3A1212'
			textTransform='capitalize'
		>
			{item}
		</Typography>
	</Stack>
)
