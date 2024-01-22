import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loader() {
	return (
		<Stack
			mt='50px'
			direction='row'
			justifyContent='center'
			alignItems='center'
			width='100%'
		>
			<InfinitySpin color='#FF2625' />
		</Stack>
	)
}
