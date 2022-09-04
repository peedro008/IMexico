import { Box, Button, Container, Divider, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "react-credit-card-flipping";
import DX4 from "../../images/DX4.png"
export const ReserveDesktopComponent = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [DNI, setDNI] = useState("")
    const [cardNum, setCardNum] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [CVV, setCVV] = useState("")
    let [cardThumbnail, setCardThumbnail] = useState('')
    let [cardFocusCVV, setCardFocusCVV] = useState(false)
    return(
    
        <Container backgroundColor={"#BD8F15"} padding={0} minWidth={"100%"} height={"max-content"}  paddingTop="10px" display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box height={"89px"} backgroundColor={"#091F40"} minWidth={"100%"} borderRadius="0 0 7px 7px" display={"flex"} flexDirection={"column"} alignItems={"center"} >
                <Text fontSize={"25px"} fontWeight={700} color="#FFFFFF" marginTop="8px">Link de pago</Text>
                <Text fontSize={"17px"} fontWeight={500} textAlign={"center"} paddingX="40px" marginTop="5px" color="#FFFFFF">Gestioná de forma rápida y eficiente el pago de tu propiedad. ¡Completa los datos y listo!</Text>
            </Box>
            <Box backgroundColor={"white"} marginTop="15px" width="580px" height={"135px"} display="flex" flexDirection={"row"}>
                <Image src={DX4} minHeight="100%"/>
                <Box display="flex" flexDirection={"column"} marginLeft={"5%"} paddingTop="15px">
                    <Text fontSize={"20.26px"} fontWeight={700} color="#1D467C">Estás Pagando</Text>
                    <Text fontSize={"22.56px"} fontWeight={400} marginTop="5px" >Rosa Azul 006</Text>
                    <Text fontSize={"25.78px"} fontWeight={700}>$ 252.107 USD</Text>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width="900px"  paddingTop="15px" backgroundColor={"#FFFFFF"} borderRadius="10px" alignItems={"center"} marginY="10px">
            <Text paddingLeft={"20px"} textAlign={"left"} width="100%" fontSize={"15px"} fontWeight={500} >Ingresá los datos de tu tarjeta de débito o crédito</Text>
                <Divider marginY="10px" color="black" borderColor="black"/>
                <Box display="flex" flexDirection={"row"} justifyContent={"space-between"} width="80%">
                    <Box display={"flex"} flexDirection={"column"} >
                        <Text fontSize="13px" fontWeight={500} color="#666666">E-mail</Text>
                        <Input width={"360px"} borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"}  onChange={(e: any) => setEmail(e.target.value)}/>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Nombre y Apellido</Text>
                        <Input width={"360px"} borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e: any) => setName(e.target.value)}/>
                        <Text fontSize="13px" fontWeight={500} color="#666666">DNI (Titular de la tarjeta)</Text>
                        <Input width={"360px"} borderWidth="1px" borderColor="#666666" height={"29px"} onChange={(e: any) => setDNI(e.target.value)}/>
                        <Box width="100%" marginTop="-35px">
                        <Card
                            
                            number={cardNum}
                            name={name}
                            expiry={
                                month + "/" + year
                            }
                            cvv={CVV}
                            flipCard={cardFocusCVV}
                            brand={cardThumbnail}
                        />
                         </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Número de la tarjeta</Text>
                        <Input width={"360px"} borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e: any) => setCardNum(e.target.value)}/>
                        <Box display="flex" flexDirection={"row"} justifyContent={"space-between"}>
                            <Box marginRight={"15px"}>
                                <Text fontSize="13px" fontWeight={500} color="#666666">Mes</Text>
                                <Input borderWidth="1px" borderColor="#666666" height={"29px"} width="160px" marginBottom={"5px"} onChange={(e: any) => setMonth(e.target.value)}/>
                            </Box>
                            <Box>
                                <Text fontSize="13px" fontWeight={500} color="#666666">Año</Text>
                                <Input borderWidth="1px" borderColor="#666666" height={"29px"} width="160px"  marginBottom={"5px"} onChange={(e: any) => setYear(e.target.value)}/>
                            </Box>
                        </Box>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Código de seguridad</Text>
                        <Input width={"360px"} borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e) => setCVV(e.target.value)} onFocus={() => setCardFocusCVV(true)}onBlur={() => setCardFocusCVV(false)}/>
                        <Button alignSelf={"center"} marginTop="20px" backgroundColor={"#1d467c"} width="201px" borderRadius={"33.82px"} height="28px" fontSize={"13px"} color="white" fontWeight={400} textAlign={"center"}>Pagar</Button>
                    </Box>
                </Box>


            </Box>
           
           
           
           
           
           
           
           
           
           
           
            {/* <Box display={"flex"} flexDirection={"column"} width="93%" paddingX="15px"  paddingY="15px" backgroundColor={"#FFFFFF"} borderRadius="10px" alignItems={"center"} marginY="10px">
                <Text paddingRight={"30px"} fontSize={"15px"} fontWeight={500} >Ingresá los datos de tu tarjeta de débito o crédito</Text>
                <Divider marginY="10px" color="black" borderColor="black"/>
                    <Box display={"flex"} flexDirection={"column"} marginBottom="15px" >
                        <Text fontSize="13px" fontWeight={500} color="#666666">E-mail</Text>
                        <Input borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"}  onChange={(e: any) => setEmail(e.target.value)}/>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Nombre y Apellido</Text>
                        <Input borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e: any) => setName(e.target.value)}/>
                        <Text fontSize="13px" fontWeight={500} color="#666666">DNI (Titular de la tarjeta)</Text>
                        <Input borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e: any) => setDNI(e.target.value)}/>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Número de la tarjeta</Text>
                        <Input borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e: any) => setCardNum(e.target.value)}/>
                        <Box display="flex" flexDirection={"row"} justifyContent={"space-between"}>
                            <Box marginRight={"15px"}>
                                <Text fontSize="13px" fontWeight={500} color="#666666">Mes</Text>
                                <Input borderWidth="1px" borderColor="#666666" height={"29px"} width="141px" marginBottom={"5px"} onChange={(e: any) => setMonth(e.target.value)}/>
                            </Box>
                            <Box>
                                <Text fontSize="13px" fontWeight={500} color="#666666">Año</Text>
                                <Input borderWidth="1px" borderColor="#666666" height={"29px"} width="141px"  marginBottom={"5px"} onChange={(e: any) => setYear(e.target.value)}/>
                            </Box>
                        </Box>
                        <Text fontSize="13px" fontWeight={500} color="#666666">Código de seguridad</Text>
                        <Input borderWidth="1px" borderColor="#666666" height={"29px"} marginBottom={"5px"} onChange={(e) => setCVV(e.target.value)} onFocus={() => setCardFocusCVV(true)}onBlur={() => setCardFocusCVV(false)}/>
                    </Box>
                    
                    <Card
                    
                        number={cardNum}
                        name={name}
                        expiry={
                            month + "/" + year
                        }
                        cvv={CVV}
                        flipCard={cardFocusCVV}
                        brand={cardThumbnail}
                    />

                    <Button marginTop="20px" backgroundColor={"#1d467c"} width="241px" borderRadius={"33.82px"} height="28px" fontSize={"13px"} color="white" fontWeight={400} textAlign={"center"}>Pagar</Button>
                           </Box> */}

        </Container>
    
    
    
    
    
    
    )
}