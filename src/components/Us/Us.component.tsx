import { Box, Container, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NOSOTROS from "../../images/NOSOTROS.png";
import NOSOTROS1 from "../../images/NOSOTROS1.png";
import RedPalmeras from "../../images/RedPalmeras.png";
import TEAM from "../../images/team/index.js";
import { TL } from "./TLlist";
import "./Us.css";
import Slider from "react-slick";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

interface UsProps {
  agentReducer: any[];
  agents: any;
}

export const Us = ({ agentReducer, agents }: UsProps) => {
  let photos = [NOSOTROS, NOSOTROS1];

  const [value, setValue] = useState(0);
  const [showTL, setShowTL] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const onChange = (value: any) => {
    setValue(value);
  };

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setShowTL(true);
      }, 1000);
    }, []);
    return null;
  }

  return (
    <>
      <ScrollToTopOnMount />
      <Box display={"flex"} flexDirection={"column"} alignItems="center">
        <Container
          minWidth="100%"
          minHeight="500px"
          padding={0}
          height="auto"
          overflow="hidden"
        >
          <Slider {...settings1}>
            {photos?.map((photo: any, index: number) => {
              return (
                <Image
                  width={"100%"}
                  objectFit="cover"
                  key={index}
                  src={photo}
                />
              );
            })}
          </Slider>

          {/* <Carousel 
                    value={value}
                    onChange={onChange}
                    plugins={['infinite', { resolve: autoplayPlugin,options: {interval: 4000,}, }, ]}>
                    {photos?.map((photo: any, index: number) => {
                        return <Image width={"100%"}  key={index}  src={photo}/>
                    })}
                </Carousel> */}
        </Container>
        {showTL ? (
          <>
            <Box
              justifyContent={"space-between"}
              paddingBottom="20px"
              marginY="25px"
              height={"max-content"}
              width="90%"
              backgroundColor={"white"}
              display={"flex"}
              flexDirection={"column"}
              alignItems="center"
              borderRadius={"8px"}
            >
              <Text
                paddingTop="20px"
                textAlign="center"
                paddingX="60px"
                fontSize={"19px"}
                fontWeight={700}
                color={"#104B86"}
              >
                Conocé a nuestros Team Leader
              </Text>

              {TL?.map((agent: any, index: number) => {
                return (
                  <NavLink
                    to={{
                      pathname: "/teamleader",
                      state: { agent },
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      alignItems="center"
                      marginY="60px"
                    >
                      <Flip>
                        <Box
                          borderWidth={"2px"}
                          borderColor="#F39400"
                          borderRadius={"50%"}
                          height="220px"
                          width="220px"
                          padding={"8px"}
                          boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);"
                          minHeight="220px"
                          overflow={"hidden"}
                          minWidth="220px"
                        >
                          <Box
                            background={
                              "linear-gradient(180deg, #FFC803 0%, #F39400 100%);"
                            }
                            filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))"
                            borderRadius="50%"
                            display="flex"
                            justifyContent="center"
                            borderStyle={"inherit"}
                            overflow={"hidden"}
                            maxWidth="220px"
                            maxHeight="200px"
                          >
                            <Image
                              src={agent.img}
                              borderRadius={"50%"}
                              borderWidth="2px"
                              objectFit={"cover"}
                              height={"250px"}
                              minWidth={"250px"}
                              borderColor={"black"}
                            />
                          </Box>
                        </Box>
                      </Flip>
                      <Fade>
                        <Text
                          fontWeight={700}
                          fontSize="20.6px"
                          marginTop="15px"
                        >
                          {agent.name}
                        </Text>
                      </Fade>
                    </Box>
                  </NavLink>
                );
              })}
            </Box>

            <Box
              height={"364px"}
              width={"100%"}
              backgroundImage={RedPalmeras}
              backgroundSize="cover"
            >
              <Text
                fontSize="19px"
                fontWeight={700}
                textAlign="center"
                color="white"
                paddingY="35px"
              >
                Nuestro equipo
              </Text>
              <Container
                minWidth="100%"
                padding={0}
                height="auto"
                overflow="hidden"
              >
                <Slider {...settings}>
                  {TEAM?.map((photo: any, index: number) => {
                    return (
                      <Image
                        height="244px"
                        paddingX="10px"
                        key={index}
                        src={photo}
                      />
                    );
                  })}
                </Slider>
              </Container>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};


