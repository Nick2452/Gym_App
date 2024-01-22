import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

export default function ExerciseVideos({ name, exerciseVideos }) {
	if (!exerciseVideos || !exerciseVideos.length) return <Loader />

	return (
		<Box p='20px' sx={{ marginTop: { lg: '200px', xs: '20px' } }}>
			<Typography
				sx={{ fontSize: { lg: '42px', xs: '25px' } }}
				fontWeight={700}
				color='#000'
				mb='35px'
			>
				Watch{' '}
				<span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
					{name}
				</span>{' '}
				exercise videos
			</Typography>
			<Stack
				sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
				justifyContent='flex-start'
				flexWrap='wrap'
				alignItems='center'
			>
				{exerciseVideos?.slice(0, 3)?.map((item, index) => (
					<a
						key={index}
						className='exercise-video'
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target='_blank'
						rel='noreferrer'
						style={{ marginBottom: '20px' }}
					>
						<img
							style={{ borderTopLeftRadius: '20px' }}
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
							className='exercise-img'
						/>
						<Typography
							sx={{ fontSize: { lg: '24px', xs: '16px' } }}
							fontWeight={600}
							color='#000'
						>
							{item.video.title}
						</Typography>
						<Box display='flex' justifyContent='space-between'>
							<Typography
								sx={{ fontSize: { lg: '22px', xs: '15px' } }}
								color='#b0300c'
								fontWeight={700}
							>
								{item.video.channelName}
							</Typography>
							<Typography
								sx={{ fontSize: { lg: '19px', xs: '16px' } }}
								fontWeight={500}
								color='#000'
							>
								{item.video.lengthText}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	)
}
