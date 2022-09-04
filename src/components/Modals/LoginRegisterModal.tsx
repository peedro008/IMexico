/* import {
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
	FormControl,
	Input,
	VStack,
	HStack,
	InputGroup,
	InputRightElement,
	Spinner,
} from "@chakra-ui/react";
import LoginIcon from "./img/loginicon.png";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as loginActions from "../../store/actions/login.actions";
import * as registerActions from "../../store/actions/register.actions"; */

const LoginRegisterModal = (props: any) => {
	/* const [email, setEmail] = useState("");
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [isRegister, setIsRegister] = useState(props.isRegister);
	const [showPassword, setShowPassword] = useState(false);

	const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		setIsRegister(props.isRegister);
	}, [props.isRegister, props.isOpen]);

	const dispatch = useDispatch();
	const loginReducer = useSelector((state: any) => state.loginReducer);
	const registerReducer = useSelector((state: any) => state.registerReducer);

	const handleInputs = (event: any) => {
		const { value, name } = event.target;
		if (name === "name") setUser(value);
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
	};

	const handleKeyPress = (e: any) => {
		if (e.key === "Enter") {
			if (isRegister) {
				register();
			} else login();
		}
	};

	const login = () => {
		dispatch(loginActions.login(email, password)); 
	};

	const register = () => {
		let registerData = {
			user,
			email,
			password,
		};
		try {
			dispatch(registerActions.setWithAuth(registerData));
		} catch (error) {
			console.log("Error en el registro de usuario", error);
		}
	};

	return (
		<Modal
			initialFocusRef={isRegister ? nameRef : emailRef}
			isOpen={props.isOpen}
			onClose={props.onClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent w="500px" maxW="90vw" borderRadius="20px">
				<ModalHeader>
					<Image src={LoginIcon} mx="auto" />
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing={5}>
						{isRegister && (
							<FormControl id="name" isRequired>
								<Input
									type="text"
									name="name"
									borderColor="#79940D"
									ref={nameRef}
									value={user}
									placeholder="Nombre"
									onChange={(e) => handleInputs(e)}
								/>
							</FormControl>
						)}
						<FormControl id="email" isRequired>
							<Input
								type="text"
								name="email"
								borderColor="#79940D"
								ref={emailRef}
								value={email}
								placeholder="Correo Electrónico"
								onChange={(e) => handleInputs(e)}
							/>
						</FormControl>
						<FormControl id="password" isRequired>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									value={password}
									placeholder="Contraseña"
									borderColor="#79940D"
									onChange={(e) => handleInputs(e)}
									onKeyPress={handleKeyPress}
								/>
								<InputRightElement
									cursor="pointer"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<ViewOffIcon color="#6C6C6C" />
									) : (
										<ViewIcon color="#6C6C6C" />
									)}
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</VStack>
					<VStack spacing={1} mt={5}>
						{registerReducer?.fetching || loginReducer?.fetching ? (
							<Spinner color="green" />
						) : (
							<Button
								mx="auto"
								px={5}
								py={3}
								onClick={isRegister ? register : login}
							>
								{isRegister ? "CREAR CUENTA" : "INGRESAR"}
							</Button>
						)}
							{registerReducer.data.status !== 200 ? (
								<Text textAlign="center" color="red">
									{registerReducer.data.message}
								</Text>
							) : null}
							{loginReducer.status !== 200 ? (
								<Text textAlign="center" color="red">
									{loginReducer.message}
								</Text>
							) : null}
							<Text color="gray" fontSize="12px" w="80%" textAlign="center" lineHeight={1} pb={1}>
								Al continuar, aceptas las Condiciones de servicio y la política de
								privacidad de Yo me planto.
							</Text>
						</VStack>
				</ModalBody>
				<ModalFooter bgColor="#EBE8E8" borderRadius="0 0 20px 20px" display="flex" flexDirection="column" justifyContent="center">
					<VStack>
						{!isRegister && <HStack w="85%" justifyContent="center" alignItems="center">
							<Text fontSize="12px" display="flex" textAlign="center">
								¿Olvidaste tu contraseña?
							</Text>
							<a href="https://yomeplanto.com.ar/resetpassword">
								<Button
								fontSize="12px"
									fontWeight="bold"
									variant="outline"
									bgColor="transparent"
									border="0"
								>
									RESTABLECER
								</Button>
							</a>
						</HStack>}
						<HStack w="90%" justifyContent="center" alignItems="center">
							<Text fontSize="12px">
								{isRegister ? "¿Ya eres miembro?" : "¿No eres miembro?"}
							</Text>
							<Button
							fontSize="12px"
								fontWeight="bold"
								variant="outline"
								bgColor="transparent"
								border="0"
								onClick={() => setIsRegister(!isRegister)}
							>
								{isRegister ? "INICIA SESIÓN" : "REGISTRATE"}
							</Button>
						</HStack>
					</VStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	); */
};

export default LoginRegisterModal;
