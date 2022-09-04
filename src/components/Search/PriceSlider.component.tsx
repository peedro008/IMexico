import React, {useEffect, useState} from 'react'
import {
    Container,
    Text
  } from '@chakra-ui/react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from '@chakra-ui/react'

export const PriceSlider = ({handleFilter}: any) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
      handleFilter("price_from", value);
    }, [value, handleFilter]);

    return (
        <Container width="100%" padding="0" paddingBottom="5px"  marginY="10px" zIndex={0}>
        <Text fontSize="8.9px"marginTop={"8px"} color="#5B5B5B">Rango de precio</Text>
        <Slider aria-label='slider-ex-1'   defaultValue={0} max={1500000} onChangeEnd={(val) => setValue(val)}>
          <SliderTrack css={{zIndex:1}}>
            <SliderFilledTrack  bg='#0074E8'/>
          </SliderTrack>
          <SliderThumb borderColor='#0074E8' />
        </Slider>
        <Text fontSize="8.9px" fontWeight="700" color="#0074E8">${value} a $1.500.000</Text>
        </Container>
    )
}
