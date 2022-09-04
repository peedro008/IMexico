import React, {useState} from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { Container, Image } from '@chakra-ui/react'
import us1 from '../../images/us1.png'
import us2 from '../../images/us2.png'
import usd1 from '../../images/usd1.png'
import usd2 from '../../images/usd2.png'
export const UsSlider = () => {
    let mobile = window.innerWidth
    const [value, setValue] = useState(0);

    const onChange = (value: any) => {
        setValue(value);
        }

    return (
        <>
            <Container minWidth="100%" padding={0} overflow="hidden">
            <Container minWidth="100%" padding={0}>
                { mobile < 750 ? <Carousel value={value}
                    onChange={onChange}
                    plugins={['clickToChange' ]}>
                   <Image  paddingX={mobile < 750 ? "0" : "30px"} src={us1} alt="Misión" />
                   <Image  paddingX={mobile < 750 ? "0" : "30px"} src={us2} alt="Visión" />
                </Carousel>: <Carousel value={value}
                    onChange={onChange}
                    plugins={['clickToChange' ]}>
                   <Image width="100%"  paddingX="0" src={usd1} alt="Misión" />
                   <Image width="100%" paddingX="0" src={usd2} alt="Visión" />
                </Carousel>}
                
            </Container>
            <Dots
                value={value}
                onChange={onChange}
                number={2}
            />
            </Container></>
    )
}
