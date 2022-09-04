import React from 'react'
import { ResetPassComponent } from '../../components/Login'
import * as resetAction from '../../store/actions/requestReset.actions'
import { useDispatch, useSelector } from 'react-redux'

export const ResetPass = (props: any) => {
	const dispatch = useDispatch()
	const requestResetReducer = useSelector(
		(state: any) => state.requestResetReducer,
	)
	const resetPass = (user: string, email: string) => {
		if (user !== '' && email !== '') {
			dispatch(resetAction.requestReset({ user, email }))
		}
	}

	return (
		<ResetPassComponent
			resetPass={resetPass}
			requestResetReducer={requestResetReducer}
		/>
	)
}
