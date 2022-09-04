import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    IconButton,
    Image,
    Box,
    Text,
    Divider,
    Button
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import logocolorD from '../../images/logocolorD.png'
import LogoColorD from '../../images/LogoColorD.svg'
import SPINERMOBILE from "../../images/SPINERMOBILE.gif"
import { Link, NavLink, useHistory } from 'react-router-dom'

import MENU1 from '../../images/menu/MENU1.svg'
import MENU2 from '../../images/menu/MENU2.svg'
import MENU3 from '../../images/menu/MENU3.svg'
import MENU4 from '../../images/menu/MENU4.svg'
import MENU5 from '../../images/menu/MENU5.svg'
import MENU6 from '../../images/menu/MENU6.svg'
import MENU7 from '../../images/menu/MENU7.svg'
import MENU8 from '../../images/menu/MENU8.svg'
import MENU9 from '../../images/menu/MENU9.svg'
import MENU10 from '../../images/menu/MENU10.svg'
import MENU1S from '../../images/menu/MENU1S.svg'
import MENU2S from '../../images/menu/MENU2S.svg'
import MENU3S from '../../images/menu/MENU3S.svg'
import MENU4S from '../../images/menu/MENU4S.svg'
import MENU5S from '../../images/menu/MENU5S.svg'
import MENU6S from '../../images/menu/MENU6S.svg'
import MENU7S from '../../images/menu/MENU7S.svg'
import MENU8S from '../../images/menu/MENU8S.svg'
import MENU9S from '../../images/menu/MENU9S.svg'
import MENU10S from '../../images/menu/MENU10S.svg'

import MENUM1 from '../../images/menu/MENUM1.svg'
import MENUM2 from '../../images/menu/MENUM2.svg'
import MENUM3 from '../../images/menu/MENUM3.svg'
import MENUM4 from '../../images/menu/MENUM4.svg'
import MENUM5 from '../../images/menu/MENUM5.svg'
import MENUM6 from '../../images/menu/MENUM6.svg' 
import MENUM7 from '../../images/menu/MENUM7.svg'
import MENUM8 from '../../images/menu/MENUM8.svg'

import cerrar from '../../images/menu/cerrar.svg'

import inic from '../../images/menu/inic.svg'
import regist from '../../images/menu/regist.svg'

import { BsSearch }  from 'react-icons/bs';

export const Header = () => {
    const history = useHistory()

    const closeSession = () => {
      localStorage.clear()
      history.push('/')
    }

    let mobile = window.innerWidth
    return (
        <>
        <HStack  zIndex={9} overflowY={"visible"} width="100%" backgroundColor="white" padding="15px" minHeight={ mobile < 750 ?"84px":"126px"} filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} maxHeight={ mobile < 750 ? "54px" : "96px"}  position={"relative"}>
          { mobile < 750 ?   
          <Box width="100%" zIndex={9} overflowY={"visible"} display="flex" flexDirection={"row"} justifyContent="space-between" alignItems="center"  >
            <Menu >
              <Box display="flex" flexDirection={"row"} alignItems="center">
                <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon boxSize="30px" color="#1D467C"/>}
                backgroundColor="white"
                />
                <Box onClick={() => history.push("/search")}marginLeft="15px"  display="flex" flexDirection={"row"} width="90px" justifyContent="space-between">
                  <BsSearch color="#1D467C" size="20px"/>
                  <Text fontSize="14.18" fontWeight="600" color="#1D467C">BUSCAR</Text>
                </Box>
              </Box>
              <MenuList overflowY={"visible"}  padding="0" maxWidth={"299px"}>
                <Box width="100%" display="flex" flexDirection={"column"} alignItems="center" paddingY="20px">
                  <Image src={LogoColorD} minHeight="88.3px" justifySelf={"center"} display="flex" />
                  <Divider width="80%" color={"#104B86"} border="1px" borderColor={"#104B86"} marginTop="21px"/>
                </Box>
                
                <MenuItem padding="0" onClick={()=>history.push('/')} >
                  <Image src={MENUM1} /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={()=>history.push('/us')}>
                  <Image src={MENUM3}  /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={()=>history.push('/developments')}>
                  <Image src={MENUM2}  /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={() => history.push('/resale?property_types=%5B2%5D')} >
                  <Image src={MENUM4}  /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={() => history.push('/events')} >
                  <Image src={MENUM5}  /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={()=>history.push('/services')}>
                <Image src={MENUM6}  /> 
                </MenuItem>
                <Divider width="90%"/>
                <MenuItem padding="0" onClick={() => history.push('/blog')}>
                  <Image src={MENUM7} /> 
                </MenuItem>
                <Divider width="90%"/>
                <a style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }} href="/#call-phone">
                  <MenuItem padding="0" >
                    <Image src={MENUM8} /> 
                  </MenuItem>
                </a>
                {
                  localStorage.getItem('session_token') ? 
                  <MenuItem onClick={closeSession}backgroundColor='#FF9900' color="white" fontWeight="bold" padding="10px" marginTop="13px" marginBottom="0">
                    <Image src={cerrar}  marginRight={"15px"}/> Cerrar sesión
                  </MenuItem> :
                  <>
                    <MenuItem background='#0074E8' color="white" fontWeight="bold" padding="10px" marginTop="23px" marginBottom="0" onClick={() => history.push('/login')}>
                      <Image src={inic}  marginRight={"15px"}/> Iniciar Sesión
                    </MenuItem> 
                    <MenuItem background='#E81D2C' color="white" fontWeight="bold" padding="10px" marginTop="0" marginBottom="0" onClick={() => history.push('/register')}>
                      <Image src={regist}  marginRight={"15px"}/> Registrarme
                    </MenuItem>
                  </> 
                }
                
              </MenuList>
            </Menu>
            <Box onClick={()=>history.push('/')}><Image src={LogoColorD} minHeight="45.3px"/></Box>
          </Box>
        :
        <Box  display="flex" flexDirection="row" justifyContent="space-between" alignItems="end"  width="100%" marginRight={"40px"}>
          <Link to="/"><Image  paddingX="20px"marginBottom={"5px"} width={"125.59px"} objectFit={"cover"} src={SPINERMOBILE} alt="IMexico"/></Link>
          <Box display="flex" flexDirection="row" width={localStorage.getItem('session_token') ? "65%" : "90%" } justifyContent={'space-between'} paddingBottom="10px" alignItems="flex-end" minWidth={"90%"} >
            <NavLink style={{
             display: 'flex',
             flexDirection: 'column',
             backgroundImage:`url(${MENU1})`,
             backgroundSize:"cover",
             height:"50px",
             width:"100px",
             alignItems: "center",
             justifyContent: 'center',
             marginLeft: '20px',
             fontSize:"12.29"
            }}
            activeStyle={{
              backgroundImage:`url(${MENU1S})`,
            }}
            to="/us"></NavLink>
            <NavLink 
            activeStyle={{
              backgroundImage:`url(${MENU2S})`,
            }}
            style={{
              backgroundImage:`url(${MENU2})`,
              backgroundSize:"cover",
              height:"50px",
              width:"100px",
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '25px',
              marginRight:"5px",
              marginBottom:"3px",
              fontSize:"12.29"
            }}to="/developments"></NavLink>
            <NavLink 
            activeStyle={{
              backgroundImage:`url(${MENU3S})`,
            }}
            style={{
              backgroundImage:`url(${MENU3})`,
              backgroundSize:"cover",
              height:"50px",
              width:"100px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize:"12.29"
            }}to="/resale?property_types=%5B2%5D"></NavLink>
            <NavLink
            activeStyle={{
              backgroundImage:`url(${MENU4S})`,
            }}
            style={{
               backgroundImage:`url(${MENU4})`,
               backgroundSize:"cover",
               height:"50px",
               width:"100px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize:"12.29"
            }}to="/events"></NavLink>
            <NavLink
              
            activeStyle={{
                   backgroundImage:`url(${MENU5S})`,
                 }}
            style={{
              backgroundImage:`url(${MENU5})`,
              backgroundSize:"cover",
              height:"50px",
              width:"100px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize:"12.29"
            }}to="/services"></NavLink>
            <NavLink 
            activeStyle={{
              backgroundImage:`url(${MENU6S})`,
            }}
            style={{
              backgroundImage:`url(${MENU6})`,
              backgroundSize:"cover",
              height:"50px",
              width:"100px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize:"12.29"
            }}to="/blog"></NavLink> 
            <a style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize:"12.29"
            }} href="/#call-phone"><Image src={MENU7} marginX={"5px"}/></a>
            <Divider orientation='vertical' backgroundColor="#A4A4A4" width={"1px"} height={"70px"} alignSelf="center" />
            {
                localStorage.getItem('session_token') ? 
              <Box  style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: 'center',
                marginLeft: '20px',
                fontSize:"12.29"
              }}>
                <Image src={MENU10} onClick={closeSession}></Image>
                
                </Box>
                :
                <>
                <Link style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '20px',
                alignItems: "center",
                fontSize:"12.29"
                }}to="/login"><Image src={MENU9}  marginX={"5px"}/></Link>
                <Link style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: "center",
                marginLeft: '20px',
                fontSize:"12.29"
                }}to="/register"><Image src={MENU8}  marginX={"5px"}/> </Link>
                </>    
            }
              
          </Box>
        </Box> 
        
        }
        </HStack>
        </>
    )
}
