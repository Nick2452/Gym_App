import { Button, Stack, Typography } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import EquipmentImage from '../assets/icons/equipment.png'
import TargetImage from '../assets/icons/target.png'

export default function Detail({ exerciseDetail }) {
	const { bodyPart, gifUrl, name, target, equipment, instructions } =
		exerciseDetail

	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	]

	return (
		<Stack
			gap='60px'
			sx={{ flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px' }}
		>
			<img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
			<Stack sx={{ gap: { lg: '40px', xs: '20px' } }}>
				<Typography
					sx={{
						textAlign: 'center',
						fontSize: { lg: '50px', xs: '30px' },
						fontWeight: 700,
						textTransform: 'capitalize',
					}}
				>
					{name}
				</Typography>
				<Typography
					sx={{ fontSize: { lg: '24px', xs: '18px' } }}
					color='#4F4C4C'
				>
					Exercises keep you strong.{' '}
					<span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
					of the best <br /> exercises to target your {target}. It will help you
					improve your <br /> mood and gain energy.
				</Typography>
				<Typography
					sx={{
						textAlign: 'center',
						fontSize: {
							lg: '50px',
							xs: '30px',
						},
						color: '#e34709',
						textTransform: 'capitalize',
					}}
				>
					instructions
				</Typography>
				<Stack sx={{ gap: { lg: '20px', xs: '10px' } }}>
					{Array.isArray(instructions) &&
						instructions.slice(0, 3).map((instruction, index) => (
							<Typography
								key={index}
								sx={{
									fontSize: { lg: '20px', xs: '15px' },
									fontWeight: 600,
									color: '#458f04',
								}}
							>
								{'=>'} {instruction}
							</Typography>
						))}
				</Stack>
				{extraDetail?.map(item => (
					<Stack key={item.name} direction='row' alignItems='center' gap='20px'>
						<Button
							sx={{
								backgroundColor: '#fff2D8',
								borderRadius: '50%',
								width: '100px',
								height: '100px',
							}}
						>
							<img
								style={{ width: '50px', height: '50px' }}
								src={item.icon}
								alt={item.bodyPart}
							/>
						</Button>
						<Typography
							sx={{
								fontSize: { lg: '28px', xs: '20px' },
								textTransform: 'capitalize',
							}}
						>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	)
}
