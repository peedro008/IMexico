import { Box, Center, Container, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { PropCardController } from '../../controllers/PropCard'
import { MainSearchbarController } from '../../controllers/Search'
import PropertyInterface from '../../interfaces/Property'
import { CompareModal } from '../Modals/CompareModal'
import { useDisclosure } from '@chakra-ui/react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { NoResults as NoResultsComponent } from '../Search/NoResults'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Desarrollo1 from "../../images/Desarrollo1.png"
import { DevelopmentCardComponent } from '../DevelopmentCard/DevelopmentCard.component'



interface DevelopmentSearchProps {
    propertyList: PropertyInterface[],
    loading: boolean,
    searchProperties: () => void
}

export const DevelopmentComponent = ({propertyList, loading, searchProperties}: DevelopmentSearchProps) => {
    console.log(propertyList)
    let mobile = window.innerWidth
    // const [property1, setProperty1] = useState<PropertyInterface>();
    // const [property2, setProperty2] = useState<PropertyInterface>();
    // const [property3, setProperty3] = useState<PropertyInterface>();
    // const [property4, setProperty4] = useState<PropertyInterface>();
    // const { isOpen, onOpen, onClose } = useDisclosure()  
  
    // const clearAll = () => {
    //     setProperty1(undefined);
    //     setProperty2(undefined);
    //     setProperty3(undefined);
    //     setProperty4(undefined);
    // }

    // const removeProperty = (id: number) => {
    //     if (property1?.id === id) {
    //         setProperty1(undefined);
    //     } else if (property2?.id === id) {
    //         setProperty2(undefined);
    //     } else if (property3?.id === id) {
    //         setProperty3(undefined);
    //     } else if (property4?.id === id) {
    //         setProperty4(undefined);
    //     }
    // }
    // const isCompareDisabled = useMemo(() => {
    //     return !!(property1 && property2 && property3 && property4)
    // }, [property1, property2, property3, property4]);
    // const handleCompare = (checked: boolean, property: PropertyInterface) => {
    //     if (checked) { // if checkbox is checked
    //         if (!property1) {
    //             setProperty1(property);
    //         } else if (!property2) {
    //             setProperty2(property);
    //         } else if (!property3) {
    //             setProperty3(property);
    //         } else if (!property4) {
    //             setProperty4(property);
    //         }
    //     } else {
    //         if (property1 === property) {
    //             setProperty1(undefined);
    //         } else if (property2 === property) {
    //             setProperty2(undefined);
    //         } else if (property3 === property) {
    //             setProperty3(undefined);
    //         } else if (property4 === property) {
    //             setProperty4(undefined);
    //         }
    //     }
    // }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    

 
    return (
        <>
           
            <Box minWidth={mobile < 750 ? "100%" : "70%"}> 
            <Box padding="0" minWidth="100%" height="506px" display="flex" justifyContent="center" alignItems="center" flexDirection="column"backgroundSize={mobile > 750 ?"cover": "auto"}  backgroundPosition="center"backgroundImage={Desarrollo1}  textAlign="center" >
                  <Text paddingTop="11%" fontSize={mobile > 750 ?"45.32px": "35px"} color="white" fontWeight={700}>Propiedades en Preventa</Text>
                  <Text  lineHeight={"35.22px"} width="70%" marginX="15%"fontSize={mobile > 750 ?"35.22px":"23.48px"} color="white" fontWeight={400}>Disfruta de propiedades en preventa, Apuesta por el futuro y el crecimiento en la Rivera Maya y la Península de Yucatán.</Text>
              </Box>
          
              <Text paddingLeft="60px" fontSize="12px" color="#5B5B5B">Resultados de tu búsqueda</Text>
              <Container marginY="40px" minWidth="90%" padding="0" paddingX="8%" justifyContent="center" display="flex" flexWrap="wrap" alignItems={"center"}>
              {loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList && propertyList?.map((property: any, index: number) => {
                 
                 return (
                     <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                         <Container  maxWidth="90%" width="fit-content" height="fit-content"  padding="10px"><DevelopmentCardComponent property={property}  key={index} />
                         </Container>
                     </ScrollAnimation>)
             })}
              {!loading && propertyList?.length < 1 ? <NoResultsComponent/> : null}
              </Container>
            </Box>
            
        </>
    )
}







 {/* <MainSearchbarController searchProperties={searchProperties} />  */}


{/* <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[property1, property2, property3, property4]} propertyList={[]} clearAll={clearAll}/> */}


           {/* {loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList && propertyList?.map((property: any, index: number) => {
                 
                  return (
                      <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                          <Container width="fit-content" height="fit-content"  padding="10px"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search={false} />
                          </Container>
                      </ScrollAnimation>)
              })} */}