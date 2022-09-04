import {
  Box,
  Center,
  Container,
  Divider,
  Image,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useMemo, useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import PropertyInterface from "../../interfaces/Property";
import { NavLink, useLocation } from "react-router-dom";
import fondoTL from "../../images/fondoTL.png";
import TriangleGoldDown from "../../images/TriangleGoldDown.png";
import PalmeraTL from "../../images/PalmeraTL.png";
import arenaDetails from "../../images/arenaDetails.png";
import ScrollAnimation from "react-animate-on-scroll";
import { PropCardController } from "../../controllers/PropCard";
import { CompareModal } from "../Modals/CompareModal";
import Flip from "react-reveal/Flip";

interface TeamLeadersProps {
  loading: boolean;
  propertyList: PropertyInterface[];
  subagentList: any;
}

export const TeamLeaderComponent = ({
  loading,
  propertyList,
  subagentList,
}: TeamLeadersProps) => {
  const [property1, setProperty1] = useState<PropertyInterface>();
  const [property2, setProperty2] = useState<PropertyInterface>();
  const [property3, setProperty3] = useState<PropertyInterface>();
  const [property4, setProperty4] = useState<PropertyInterface>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info, setInfo] = useState(false);
  const clearAll = () => {
    setProperty1(undefined);
    setProperty2(undefined);
    setProperty3(undefined);
    setProperty4(undefined);
  };
  const STO = () => {
    setTimeout(() => {
        setInfo(true)
    }, 2000);
     
}
STO()
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
  };
  const isCompareDisabled = useMemo(() => {
    return !!(property1 && property2 && property3 && property4);
  }, [property1, property2, property3, property4]);

  const handleCompare = (checked: boolean, property: PropertyInterface) => {
    if (checked) {
      // if checkbox is checked
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
  };
  let location = useLocation();
  let leader = (location.state as any).agent;



  return (
    <>
     
      <Container
        minWidth={"100%"}
        padding={0}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
      >
        <Box
          backgroundImage={fondoTL}
          backgroundSize={"cover"}
          width="100%"
          height="732px"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        
        >
          <Box  display="flex" flexDirection={"row"} alignItems={"center"}>
            
            <Box position="absolute" left="10px" top="110px">
              <NavLink to="/us">
                <MdOutlineArrowBackIosNew color="white" size={"20px"} />
              </NavLink>
            </Box>
          </Box>
          {!info && (
            <Flip >
              <Box
                marginTop="160px"
                borderWidth={"2px"}
                borderColor="#F39400"
                borderRadius={"50%"}
                height="302px"
                width="302px"
                padding={"8px"}
                boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);"
              >
                <Box
                  
                  background={
                    "linear-gradient(180deg, #FFC803 0%, #F39400 100%);"
                  }
                  filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))"
                  borderRadius="50%"
                  borderStyle={"inherit"}
                >
                  <Image
                    src={`${leader.img}`}
                    borderRadius={"50%"}
                    borderWidth="2px"
                    borderColor={"black"}
                  />
                </Box>
              </Box>
            </Flip>
          )}

          {info && (
            <>
              <Flip>
                <Box
                  marginTop="60px"
                  
                 
                  borderWidth={"2px"}
                  borderColor="#F39400"
                  borderRadius={"50%"}
                  height="250px"
                  width="250px"
                  padding={"8px"}
                  boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);"
                >
                  <Box
                   
                    background={
                      "linear-gradient(180deg, #FFC803 0%, #F39400 100%);"
                    }
                    filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))"
                    borderRadius="50%"
                    borderStyle={"inherit"}
                  >
                    <Image
                      src={`${leader.img}`}
                      borderRadius={"50%"}
                      borderWidth="2px"
                      borderColor={"black"}
                    />
                  </Box>
                </Box>
              </Flip>
              <Box
                width="100%"
                display={"flex"}
                flexDirection="column"
                marginY="20px"
              >
                <Image src={TriangleGoldDown} alignSelf="center" />
              </Box>
              <Box
                backgroundColor={"#FFFFFF"}
                height={"max-content"}
                maxWidth={"350px"}
                width="80%"
                display="flex"
                flexDirection={"column"}
                alignItems={"center"}
                paddingTop="20px"
              >
                <Text
                  fontSize={"20px"}
                  color="#000000"
                  fontWeight={700}
                  lineHeight={"23.48px"}
                >
                  {leader.name.split(" ")[0]}
                </Text>
                <Text
                  fontSize={"25px"}
                  color="#000000"
                  fontWeight={700}
                  lineHeight={"23.48px"}
                >
                  {leader.name.split(" ")[1]}
                </Text>

                <Divider
                  width="90%"
                  color="black"
                  borderColor={"black"}
                  marginTop="15px"
                  marginBottom="5px"
                />
                <Text fontSize={"15px"} color="#1D467C" fontWeight={400}>
                 Team Leader
                </Text>
                <Divider
                  width="90%"
                  color="black"
                  borderColor={"black"}
                  marginBottom="25px"
                  marginTop="5px"
                />
                <Box display={"flex"} flexDirection={"row"}>
                  <BsWhatsapp color="#1D467C" />
                  <Text
                    marginLeft="10px"
                    fontSize={"13.98"}
                    color="#5B5B5B"
                    fontWeight={700}
                  >
                    +52 1 984 218 1599
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"start"}
                >
                  <MdOutlineEmail color="#1D467C" size="20px" />
                  <Text
                    marginLeft="10px"
                    fontSize={"13.98"}
                    color="#5B5B5B"
                    fontWeight={700}
                  >
                    crypto@imexicorealestate.com 
                  </Text>
                </Box>
                <Image src={PalmeraTL} width="100%" marginTop="30px" />
              </Box>
            </>
          )}

          {/*  */}
        </Box>
        <Box
          backgroundColor={"#091F40"}
          width="100%"
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          height={"max-content"}
          paddingBottom="30px"
          marginTop="-1px"
        >
          <Text
            fontSize={"19px"}
            fontWeight={700}
            color="white"
            marginTop="29px"
          >
            Mis agentes
          </Text>
          {leader?.agents.map(e => {
            return (
              <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                <Box
                  backgroundColor={"white"}
                  minWidth="289px"
                  height={"47px"}
                  display={"flex"}
                  flexDirection={"column"}
                  borderRadius={"7px"}
                  marginY="10px"
                  alignItems={"center"}
                >
                  <Text fontSize={"15px"} fontWeight={700} color="black">
                    {e}
                  </Text>
                  <Text fontSize={"13px"} fontWeight={400} color="#666666">
                    Agente Inmobiliario
                  </Text>
                </Box>
              </ScrollAnimation>
            );
          })}
        </Box>
        <Container
          height={"350px"}
          minWidth="100%"
          display="flex"
          paddingY="20px"
          padding="0"
          backgroundImage={arenaDetails}
          marginLeft="-3px"
          backgroundSize="cover"
          flexDirection="column"
          marginBottom={"-4px"}
        >
          <Text
            marginY={"20px"}
            textAlign="center"
            fontSize="17px"
            fontWeight="800"
            color="#1D467C"
          >
            Tambien interesarte
          </Text>

          <Container
            minWidth="100%"
            display="flex"
            overflowX="scroll"
            padding="0"
            flexDirection="column"
          >
            <Container
              minWidth="100vw"
              padding={0}
              display="flex"
              flexDirection="row"
            >
              {loading ? (
                <Center h="300px" w="100%">
                  <Spinner />
                </Center>
              ) : (
                propertyList.length > 0 &&
                propertyList?.map((property: any, index: number) => {
                  return (
                    <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                      <Container
                        width="fit-content"
                        height="fit-content"
                        padding="0"
                      >
                        <PropCardController
                          property={property}
                          selectedProperties={[
                            property1,
                            property2,
                            property3,
                            property4,
                          ]}
                          key={index}
                          isCompareDisabled={isCompareDisabled}
                          handleCompare={handleCompare}
                          isCompare={onOpen}
                          search
                        />
                      </Container>
                    </ScrollAnimation>
                  );
                })
              )}
            </Container>
          </Container>
        </Container>

        <CompareModal
          removeProperty={removeProperty}
          isOpen={isOpen}
          onClose={onClose}
          developmentList={[]} propertyList={[property1, property2, property3, property4]}
          clearAll={clearAll}
          
        />
      </Container>
    </>
  );
};
