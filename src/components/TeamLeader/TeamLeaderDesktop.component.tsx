import { Box, Center, Container, Divider, Image,  Spinner,  Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import sand from '../../images/sand.png'
import PropertyInterface from '../../interfaces/Property'
import {NavLink, useLocation} from 'react-router-dom'
import TriangleGold from "../../images/TriangleGold.png"
import fondoTLdesk from "../../images/fondoTLdesk.png"
import PalmeraCard from "../../images/PalmeraCard.png"
import LEADER2 from "../../images/LEADER2.png"
import LEADER3 from "../../images/LEADER3.png"
import LEADER4 from "../../images/LEADER4.png"
import cuadrado2Vert from "../../images/cuadrado2Vert.png"
import cuadrados2VDesk from "../../images/cuadrados2VDesk.png"
import ScrollAnimation from "react-animate-on-scroll";
import { PropCardController } from "../../controllers/PropCard";
import { CompareModal } from "../Modals/CompareModal";


interface TeamLeadersProps {
  
    loading: boolean,
    propertyList : PropertyInterface[],
    subagentList: any,
  }



export const TeamLeaderDesktopComponent = ({loading,propertyList,subagentList}:TeamLeadersProps) => {
    const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [info, setInfo] = useState(false)
    
    const clearAll = () => {
      setProperty1(undefined);
      setProperty2(undefined);
      setProperty3(undefined);
      setProperty4(undefined);
  }

  const removeProperty = (id: number) => {
      if (property1?.id === id) {
          setProperty1(undefined);
      } else if (property2?.id === id) {
          setProperty2(undefined);
      } else if (property3?.id === id) {
          setProperty3(undefined);
      } else if (property4?.id === id) {
          setProperty4(undefined);
      }
  }
  
    const isCompareDisabled = useMemo(() => {
        return !!(property1 && property2 && property3 && property4)
    }, [property1, property2, property3, property4]);

    const handleCompare = (checked: boolean, property: PropertyInterface) => {
        if (checked) { // if checkbox is checked
            if (!property1) {
                setProperty1(property);
            } else if (!property2) {
                setProperty2(property);
            } else if (!property3) {
                setProperty3(property);
            } else if (!property4) {
                setProperty4(property);
            }
        } else {
            if (property1 === property) {
                setProperty1(undefined);
            } else if (property2 === property) {
                setProperty2(undefined);
            } else if (property3 === property) {
                setProperty3(undefined);
            } else if (property4 === property) {
                setProperty4(undefined);
            }
        }
    }
    let location = useLocation();
    let leader = (location.state as any).agent;



    const STO = () => {
        setTimeout(() => {
            setInfo(true)
        }, 2000);
         
    }
   STO()

useEffect(() => {
    window.scrollTo(0, 0)
}, [])



    return (
        <Container minWidth={"100%"} padding={0} display="flex" flexDirection={"column"} alignItems="center">
            <Box backgroundSize={"cover"} backgroundImage={fondoTLdesk} width="100%"  height="623" minHeight="500px" display="flex" flexDirection={"column"} alignItems="center">
                <Box display="flex" flexDirection={"row"} alignItems={"center"}>
                    <Box position="absolute" left="3" top="160px"> 
                        <NavLink to="/us"><MdOutlineArrowBackIosNew color="white"  size={"20px"}/></NavLink>
                    </Box>
                  
                </Box>  


                {!info?


               
                    <Box  margin="111px" borderWidth={"2px"} borderColor="#F39400" borderRadius={"50%"} height="390px" width="390px" padding={"8px"} boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);">
                    <Box background={"linear-gradient(180deg, #FFC803 0%, #F39400 100%);"} filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))" borderRadius="50%"    borderStyle={"inherit"} >
                    <Image  src={`${leader.img}`} borderRadius={"50%"} borderWidth="2px" borderColor={"black"} />
                    </Box>
                    </Box>





                    :
                <Box display="flex" flexDirection={"row"} alignItems={"center"} paddingTop="191px" className="banner">
                         <Box   borderWidth={"2px"} borderColor="#F39400" borderRadius={"50%"} height="242x" width="242px" padding={"8px"} boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);">
                            <Box background={"linear-gradient(180deg, #FFC803 0%, #F39400 100%);"} filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))" borderRadius="50%"    borderStyle={"inherit"} >
                            <Image   src={`${leader.img}`} borderRadius={"50%"} borderWidth="2px" borderColor={"black"} />
                            </Box>
                        </Box>
                    <Image src={TriangleGold} height="60px" marginX="20px"/>
                    <Box filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))" backgroundColor={"#FFFFFF"} height={"max-content"} width="506px" display="flex" flexDirection={"row"} alignItems={"center"} >
                    <Image src={PalmeraCard} />
                    <Box width="80%" display="flex" flexDirection={"column"} alignItems="center">
                        <Text  fontSize={"20px"} color="#000000" fontWeight={700} lineHeight={"23.48px"}>{leader.name.split(" ")[0]}</Text>
                        <Text  fontSize={"25px"} color="#000000" fontWeight={700} lineHeight={"23.48px"}>{leader.name.split(" ")[1]}</Text>

                        <Divider width="64%" color="black" borderColor={"black"} marginTop="10px" marginBottom="5px"/>
                        <Text fontSize={"15px"} color="#1D467C" fontWeight={400} > Team Leader</Text>
                        <Divider width="64%" color="black" borderColor={"black"} marginBottom="15px" marginTop="5px"/>
                        <Box display={"flex"} flexDirection={"row"}>
                            <BsWhatsapp color="#1D467C"/>
                            <Text marginLeft="10px" fontSize={"13.98"} color="#5B5B5B" fontWeight={700}>+52 1 984 218 1599</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"start"}>
                            <MdOutlineEmail color="#1D467C" size="20px"/>
                            <Text  marginLeft="10px"  fontSize={"13.98"} color="#5B5B5B" fontWeight={700}>crypto@imexicorealestate.com </Text>
                        </Box>

                    </Box>
                    
                    </Box>
                </Box>} 

            </Box>
            <Box backgroundColor={"#091F40"} width="100%" display="flex" flexDirection={"column"} alignItems={"center"} height={"max-content"} maxHeight={"608px"} marginTop="-1px">
                <Text fontSize={"25px"} marginBottom={"10px"} fontWeight={700} color="white" marginTop="29px">Mis agentes</Text>
                
                <Box  maxWidth="100%"   display="flex" flexWrap={"wrap"} minHeight="max-content" paddingBottom={"50px"} flexDirection={"row"} width={"100%"} justifyContent={"center"}>
               
                 {leader?.agents.map(e=>{
                      return(
                        <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                        <Box minWidth="220px" marginRight={"30px"} marginTop="27px" backgroundColor={"white"} width="34vw" height={"67.17px"} display={"flex"} flexDirection={"column"} borderRadius={"7px"} alignItems={"center"}>
                             <Text fontSize={"21.44px"} fontWeight={700} color="black">{e}</Text>
                             <Text fontSize={"18.58px"} fontWeight={400} color="#666666">Agente Inmobiliario</Text>
                         </Box>
                        </ScrollAnimation> )
                 })
                 }
                              
                </Box>
            </Box>
            

            <Box minWidth={"100%"} display="flex" flexDirection={"row"} backgroundColor={"yellow"}>
               

                <Box display="flex" flexDirection={"column"}height="465px"   width="100%" alignItems="center">
                    <Container  minWidth="100%" display="flex"  backgroundImage={sand} height="465px" backgroundSize={"cover"} flexDirection="column">
                        <Text textAlign="center" marginTop="30px" fontSize="20px" fontWeight="800" color="#1D467C">También puede interesarte</Text>
                      
                   
                    <Container  minWidth="100%" height="100%"  display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">{loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList?.length>0 && propertyList?.map((property: any, index: number) => {
                        
                        return (
                            <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                                <Container  width="fit-content" height="fit-content" ><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search />
                                </Container>
                            </ScrollAnimation>)})}
                    </Container>  </Container>
                </Box>
           
            </Box>
            <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}  />



        </Container>
    )
}