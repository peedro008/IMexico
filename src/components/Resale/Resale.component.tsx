import { Box, Center, Container, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import { PropCardController } from '../../controllers/PropCard'
import { MainSearchbarController } from '../../controllers/Search'
import PropertyInterface from '../../interfaces/Property'
import { CompareModal } from '../Modals/CompareModal'
import { useDisclosure } from '@chakra-ui/react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { NoResults as NoResultsComponent } from '../Search/NoResults'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Desarrollo1 from "../../images/Desarrollo1.png"
import Desarrollo2 from "../../images/Desarrollo2.png"
import desarrollo3 from "../../images/desarrollo3.png"


interface DevelopmentSearchProps {
    propertyList: PropertyInterface[],
    loading: boolean,
    searchProperties: () => void
}

export const ResaleComponent = ({propertyList, loading, searchProperties}: DevelopmentSearchProps) => {
    let mobile = window.innerWidth
    const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
       
        
    };
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

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <MainSearchbarController searchProperties={searchProperties} /> 
            <Box minWidth={mobile < 750 ? "100%" : "70%"}> 
                <Box padding="0" minWidth="100%" height="506px" display="flex" justifyContent="center" alignItems="center" flexDirection="column"backgroundSize={mobile > 750 ?"100%": "auto"} backgroundPosition="center"backgroundImage={desarrollo3}  textAlign="center" >
                    <Text paddingTop="11%" fontSize={mobile > 750 ?"45.32px": "35px"} color="white" fontWeight={700}>Propiedades en Reventa</Text>
                    <Text  lineHeight={"35.22px"} width="70%" marginX="15%"fontSize={mobile > 750 ?"35.22px":"23.48px"} color="white" fontWeight={400}>Las mejores propiedades están a tu disposición.</Text>
              </Box>
          
              <Text paddingLeft="60px" fontSize="12px" color="#5B5B5B">Resultados de tu búsqueda</Text>
              <Container minWidth="100%" paddingX="10%" justifyContent="center" display="flex" flexWrap="wrap">
            {loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList && propertyList?.map((property: any, index: number) => {
                  return (
                      <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                          <Container width="fit-content" height="fit-content" padding="0"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search />
                          </Container>
                      </ScrollAnimation>)
              })}
              {!loading && propertyList?.length < 1 ? <NoResultsComponent/> : null}
              </Container>
            </Box>
            <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}  />
        </>
    )
}
