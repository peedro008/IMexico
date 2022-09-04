import { Button, Container, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import resetpassback from '../../images/resetpassback.png'
import registerlogo from '../../images/registerLogo.svg'
import { useDisclosure } from '@chakra-ui/react'
import { ResetModal } from '../Modals/ResetModal'
import * as resetAction from '../../store/actions/requestReset.actions'
import { useDispatch } from 'react-redux'

interface resetPassProps {
	requestResetReducer: any
}
export const ResetPass = (requestResetReducer: resetPassProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [user, setUser] = useState('')
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(resetAction.requestReset({ user, email }))
		onOpen()
	}

	return (
		<>
			<Container
				backgroundImage={resetpassback}
				paddingBottom='20px'
				backgroundSize={'cover'}
				minHeight='90vh'
			>
				<Image src={registerlogo} margin='0 auto' paddingY='50px' />
				<Text
					fontSize='19px'
					fontWeight='700'
					color='#1D467C'
					textAlign='center'
					margin='0 auto'
				>
					Recuperar contraseña
				</Text>
				<Container paddingY='20px'>
					<Text fontSize='13px' fontWeight='600' color='#1D467C'>
						Nombre de usuario
					</Text>
					<Input
						backgroundColor='white'
						value={user}
						onChange={(e: any) => setUser(e.target.value)}
					/>
					<Text fontSize='13px' fontWeight='600' color='#1D467C'>
						E-mail
					</Text>
					<Input
						backgroundColor='white'
						type='email'
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
					/>
					<Link to='/register'>
						<Text
							paddingTop='20px'
							fontSize='13px'
							color='#1D467C'
							textAlign='center'
							margin='0 auto'
						>
							¿No tienes cuenta? <strong>Registrate</strong>
						</Text>
					</Link>
					<Link to='/login'>
						<Text
							paddingTop='20px'
							fontSize='13px'
							color='#1D467C'
							textAlign='center'
							margin='0 auto'
						>
							¿Ya tienes cuenta? <strong>Iniciar sesión</strong>
						</Text>
					</Link>
				</Container>
				<Button
					height={'33px'}
					display='flex'
					width='150px'
					margin='0 auto 30px'
					fontSize='12px'
					color='white'
					background='linear-gradient(180deg, #007BB8 0%, #1D467C 100%)'
					borderRadius='46.0635px'
					filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'
					onClick={handleClick}
				>
					Recuperar contraseña
				</Button>
			</Container>
			<ResetModal
				isOpen={isOpen}
				onClose={onClose}
				requestResetReducer={requestResetReducer}
			/>
		</>
	)
}
