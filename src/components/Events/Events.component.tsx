import { Box, Button, Container, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import eventImage4 from '../../images/event/eventMobile4.png'
import { EventsRegisterModal } from '../Modals/EventsRegisterModal'

interface EventsProps {
	eventsList: any[]
}
export const EventsComponent = (eventsList: EventsProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Container
			minWidth={'100%'}
			padding={0}
			display='flex'
			flexDirection='column'
			alignItems='center'
			paddingY={'15px'}>
			<Text color='#FF9900' fontSize={'20px'} fontWeight={700}>
				Eventos
			</Text>
			<Image marginTop='15px' height='365px' src={eventImage4} objectFit={'cover'} objectPosition={'30%'} />
			{/* <Button
				onClick={onOpen}
				marginTop='35px'
				display='flex'
				height='28px'
				width='240px'
				fontSize='13px'
				fontWeight='500'
				textAlign='center'
				border='2px solid #1D467C'
				color='white'
				background='linear-gradient(180deg, #007BB8 0%, #1D467C 100%)'
				borderRadius='33.82px'
				filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'
				marginBottom='35px'>
				Registrarte aquí
			</Button> */}
			<Box
				display='flex'
				alignItems={'center'}
				flexDirection={'column'}
				paddingY='20px'
				backgroundColor='#FFFFFF'
				width='100%'
				height='max-content'
				fontWeight={700}
				textAlign={'center'}>
				<Text fontSize='20px' color='#5b5b5b'>
					Ediciones pasadas
				</Text>
				<Image
					marginTop='15px'
					src={`${eventsList.eventsList[0]?.banner}`}
					objectFit={'cover'}
					objectPosition={'48%'}
					height='365px'
				/>
				<Link to='/photos'>
					<Button
						marginY='35px'
						display='flex'
						height='28px'
						width='240px'
						fontSize='13px'
						fontWeight='500'
						textAlign='center'
						color='white'
						backgroundColor='#FF9900'
						borderRadius='33.82px'
						filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'>
						Revive este evento
					</Button>
				</Link>

				
			</Box>
			<EventsRegisterModal isOpen={isOpen} onClose={onClose} />
		</Container>
	)
}
