import { motion } from 'framer-motion'
import { useState } from 'react'

import { Box } from '@mui/material'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import { BodyPart } from './BodyPart'
import { ExerciseCard } from './ExerciseCard'

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const scrollNext = () => {
		if (currentIndex < data.length - 1) {
			setCurrentIndex(prevIndex => prevIndex + 1)
		}
	}

	const scrollPrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevIndex => prevIndex - 1)
		}
	}

	return (
		<div style={{ position: 'relative', overflow: 'hidden' }}>
			<motion.div
				style={{
					display: 'flex',
					transition: 'transform 0.3s ease-in-out',
					transform: `translateX(-${currentIndex * 80}%)`,
				}}
			>
				{data.map(item => (
					<Box
						key={item.id || item}
						style={{ marginBottom: '40px', marginRight: '40px' }}
					>
						{isBodyParts ? (
							<BodyPart
								item={item}
								setBodyPart={setBodyPart}
								bodyPart={bodyPart}
							/>
						) : (
							<ExerciseCard exercise={item} />
						)}
					</Box>
				))}
			</motion.div>

			{currentIndex > 0 && (
				<motion.div
					onClick={scrollPrev}
					className='right-arrow'
					initial={{ opacity: 1 }}
					whileHover={{ scale: 1.2 }}
				>
					<img src={LeftArrowIcon} alt='left-arrow' />
				</motion.div>
			)}

			{currentIndex < data.length - 1 && (
				<motion.div
					onClick={scrollNext}
					className='left-arrow'
					initial={{ opacity: 1 }}
					whileHover={{ scale: 1.3 }}
				>
					<img src={RightArrowIcon} alt='right-arrow' />
				</motion.div>
			)}
		</div>
	)
}

export default HorizontalScrollbar
