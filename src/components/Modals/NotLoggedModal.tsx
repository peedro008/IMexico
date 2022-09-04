import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Image,
	VStack,
	Center,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import LoginIcon from "../../images/logocolorD.png";
import React from "react";
import { useHistory } from "react-router-dom";

const NotLoggedModal = (props: any) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const history = useHistory()

	return (
		<>
		<Modal
			isOpen={props.isOpen}
			onClose={props.onClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent w="500px" maxW="90vw" borderRadius="20px">
				<ModalHeader>
					{/* <Image src={LoginIcon} mx="auto" /> */}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing={5}>
						<Text fontWeight="500" fontSize="17px" lineHeight="23px" textAlign="center" color="#585858">
                            Recordá que para dar Me Gusta o comentar esta nota debes estar logueado
                        </Text>
                        <Button onClick={() => history.push('/login')}>Iniciar sesión</Button>
						{/* <>
                        <Text fontWeight="500" fontSize="9px" lineHeight="9.5px" textAlign="center" color="#8E8E8E">
                            Al continuar, aceptas las{" "}
							<a href="https://yomeplanto.com.ar/tyc" target="_blank" rel="noreferrer">
								<span style={{color: "black"}}>
								Condiciones de servicio
								</span>
							</a>
							{" "}y la{" "}
							<a href="https://yomeplanto.com.ar/tyc" target="_blank" rel="noreferrer">
								<span style={{color: "black"}}>política de privacidad</span>
							</a> de Yo Me Planto
                        </Text>
						</> */}
					</VStack>
				</ModalBody>

				<ModalFooter bgColor="#EBE8E8" borderRadius="0 0 20px 20px" onClick={() => history.push('/register')}>
					<Center w="100%">
						<Text fontWeight="500" fontSize="12px" textAlign="center">¿No eres miembro? <strong>Registrate</strong></Text>
					</Center>
				</ModalFooter>
			</ModalContent>
		</Modal>
		</>
	);
};

export default NotLoggedModal;
