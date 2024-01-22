import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { ExerciseOptions, FetchData, YoutubeOptions } from '../utils/FetchData'

const ExerciseDetails = () => {
	const [exerciseDetail, setExerciseDetail] = useState({})
	const [exerciseVideos, setExerciseVideos] = useState([])
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
	const [equipmentExercises, setEquipmentExercises] = useState([])

	const { id } = useParams()

	useEffect(() => {
		const fetchDataExercise = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com'

			const exerciseDetailData = await FetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				ExerciseOptions
			)
			setExerciseDetail(exerciseDetailData)

			const exerciseVideoData = await FetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				YoutubeOptions
			)
			setExerciseVideos(exerciseVideoData.contents)

			const targetMuscleExercisesData = await FetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
				ExerciseOptions
			)
			setTargetMuscleExercises(targetMuscleExercisesData)

			const equipmentExercisesData = await FetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				ExerciseOptions
			)
			setEquipmentExercises(equipmentExercisesData)
		}
		fetchDataExercise()
	}, [id])

	if (!exerciseDetail) return <div>No Data</div>
	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExercises={targetMuscleExercises}
				equipmentExercises={equipmentExercises}
			/>
		</Box>
	)
}

export default ExerciseDetails
