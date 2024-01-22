import { Box, Stack, Typography } from '@mui/material'
import HERO_BANNER from '../assets/images/banner.png'

import './../App.css'
export const HeroBanner = () => {
	return (
		<Box
			sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
			p='20px'
			position='relative'
		>
			<Typography fontWeight='600' color='#eb2502' fontSize='40px'>
				Fitness club
			</Typography>
			<Typography
				fontWeight='700'
				mb='43px'
				mt='30px'
				fontFamily='Alegreya'
				sx={{ fontSize: { lg: '44px', sm: '40px' } }}
			>
				Sweet, Smile <br /> And Repeat
			</Typography>
			<Typography
				sx={{ fontSize: { lg: '30px', sm: '25px' } }}
				lineHeight='35px'
			>
				Check out the most effective exercises
			</Typography>
			<Stack>
				<a className='exercise_btn' href='#exercises' style={{}}>
					Explore Exercises
				</a>
			</Stack>
			<Typography
				fontWeight={600}
				color='#FF2625'
				sx={{
					opacity: '0.1',
					display: { lg: 'block', xs: 'none' },
					fontSize: '200px',
				}}
			>
				Exercise
			</Typography>
			<img src={HERO_BANNER} alt='banner' className='hero-banner-img' />
		</Box>
	)
}
