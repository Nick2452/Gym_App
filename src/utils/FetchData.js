// import axios from 'axios'
export const ExerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
}

export const YoutubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	},
}

export const FetchData = async (url, options) => {
	const res = await fetch(url, options)
	const data = await res.json()

	return data
}
