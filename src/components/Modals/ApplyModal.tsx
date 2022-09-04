import React, { useState }from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text,
    HStack,
    VStack,
    Input,
		Spinner
  } from '@chakra-ui/react'
	
	//images

	import logomodal from '../../images/logomodal.png'
import { Container } from '@chakra-ui/react';
import { ApplyResponseModal } from './ApplyResponse';
import { useHistory } from 'react-router-dom';
export const ApplyModal = (props: any) => {
		const [name, setName] = useState("")
		const [email, setEmail] = useState("")
		const [phone, setPhone] = useState("")
		const [disable, setDisable] = useState(true)
		const [file, setFile] = useState(null)
		let selectedFile: any = null
		const history = useHistory()
		let mobile = window.innerWidth
 		const handleFileChange = (e: any) => {
			try {
				selectedFile = e.target.files[0];
				setFile(selectedFile)
			} catch (e) {
				console.log(e);
			}
		}

		
		if(email !== "" && name!== "" && phone !== "" && selectedFile !== null){
			setDisable(!disable)
		}

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
					<ModalOverlay />
					<ModalContent padding="25px" maxWidth={mobile<750?"90%" : "460px"}>
						<ModalHeader display="flex" flexDir="column" justifyContent="center" alignItems="center" margin="-10px 0">
							<Image src={logomodal} margin="0 auto" width="71px" height="56.7px"  alt="IMéxico"/>
							<VStack marginY="20px">
									<Text fontSize="18px" textAlign="center" >Queremos conocerte</Text>
									<Text color="#5B5B5B" fontWeight="light" fontSize="16px" textAlign="center" >Dejanos tu cv y un asesor se pondrá en contacto a la brevedad</Text>
							</VStack>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<HStack margin="10px auto"  flexDir="column" alignItems='flex-start'>
									<Text mb='8px' fontWeight="bold" color="#1D467C" fontSize="14px" marginLeft="10px">Nombre completo (*)</Text>
									<Input type="text" value={name}  onChange={(e: any) => setName(e.target.value)} marginBottom={2.5} borderColor="#666666" placeholder='Nombre completo'/>
							</HStack>
							<HStack margin="10px auto" flexDir="column" alignItems='flex-start'>
									<Text mb='8px' fontWeight="bold" color="#1D467C" fontSize="14px" marginLeft="10px">Correo electrónico (*)</Text>
									<Input value={email} onChange={(e:any)=>setEmail(e.target.value)} marginBottom={2.5} type="email" borderColor="#666666" placeholder='Correo electrónico'/>
							</HStack>
							<HStack margin="10px auto" flexDir="column" alignItems='flex-start'>    
									<Text mb='8px' fontWeight="bold" color="#1D467C" fontSize="14px" marginLeft="10px">Teléfono (*)</Text>
									<Input value={phone } onChange={(e:any) => setPhone(e.target.value)} marginBottom={2.5}type="tel" borderColor="#666666" placeholder='Teléfono'/>
							</HStack>
							<HStack margin="10px auto" flexDir="column" alignItems='flex-start'>
									<Text mb='8px' fontWeight="bold" color="#1D467C" fontSize="14px" marginLeft="10px">Adjuntar archivo (*)</Text>
									<Input marginBottom={2.5} variant="unstyled" onChange={handleFileChange} focusBorderColor="transparent" type="file"/>
							</HStack>
						</ModalBody>
						<ModalFooter justifyContent='center' alignItems='center'>
						<Container flexDirection='column' justifyContent='center' alignItems='center'> 
							
							
							<Button fontSize="16px" disabled={email !== "" && name!== "" && phone !== "" && file !== null ?false:true} fontWeight="500" borderRadius="33px" margin="0 auto" width="100%"  filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" textAlign="center" onClick={() => props.sendApply(name, email, phone, file)} color="#ffffff">
							{props?.applyReducer.fetching ? 
							<Spinner size="md" />  
							: "Enviar"
							}
							</Button>
						
							{
								props?.applyReducer?.fetched && props?.applyReducer?.data && <Text marginTop="15px" maxWidth={"100%"} textAlign='center'>Fuiste agregado correctamente a nuestra base de datos! Los encargados de recursos humanos se pondrán en contacto contigo.</Text> 
							}
							{
								props?.applyReducer?.fetched && props?.applyReducer?.error !== null && <Text textAlign='center' color='red'>No pudimos agregarte a nuestra base de datos! Intenta de nuevo más tarde</Text>
							}
							
							
						</Container>
						</ModalFooter>
					</ModalContent>
        </Modal>
    )
}