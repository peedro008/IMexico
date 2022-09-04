import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
	Spinner,
	Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const NewPassModal = (props: any) => {
	let message = ''
	if (props?.resetReducer.fetched) {
		message = props?.resetReducer?.data?.message
	}
	console.log(message)
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader></ModalHeader>
				<ModalCloseButton />

				{!props?.resetReducer.fetching ? (
					<>
						<ModalBody>
							<Text
								fontSize='15px'
								fontWeight='700'
								textAlign='center'
								color='#5B5B5B'
							>
								{message ? message : 'Cambiaste tu contraseña correctamente'}
							</Text>
						</ModalBody>
						<ModalFooter
							display='flex'
							justifyContent='center'
							alignItems='center'
						>
							<Link to='/login'>
								<Button
									display='flex'
									height='28px'
									width='132px'
									margin='10px auto'
									fontSize='12px'
									fontWeight='500'
									textAlign='center'
									color='white'
									filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'
									background='linear-gradient(180deg, #007BB8 0%, #1D467C 100%)'
									borderRadius='33px'
								>
									Continuar
								</Button>
							</Link>
						</ModalFooter>
					</>
				) : (
					<Box
						width='100%'
						minHeight='110px'
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Spinner size='lg' style={{ padding: '15px' }} />
					</Box>
				)}
			</ModalContent>
		</Modal>
	)
}
