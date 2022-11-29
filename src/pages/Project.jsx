import { Box, SimpleGrid,Image, Button } from '@chakra-ui/react'
import React from 'react'

function Project() {
  return (
    <SimpleGrid w="fit" h={{md:"600px"}} columns={[2, null, 3]} spacing='40px' border="1px solid red" pt="40px">
      <Box border="5px solid red" h="400px">
        <Image src="https://lh3.googleusercontent.com/a9CoZ5Negqsd5UP6Zsm8_BI-PUumcDrKZD78sonA-vJecbsKrJ4WJMEB3PYu0v1qdJ-uBZsYiyTlXemapnq7VxdxLJfdtgVgupoZc4v1E9qhJbaEWmFGTY5_o3NijMkg0cj-86qgufrHLZO1jxW1QT7Xbchyjlv1aWurW0uBOJ9r7nM-mmf-sA-e8EcszEIrafBiCFd-WEpiIdAmP6gH0l5h93zVdnMHNzuRw0EpQ-h5giRaWNwWVeKMSWeoqYKqF5-I80_tLAILJ2APrikpPWw__vnrHN1HwyfCIPqKOERuLlCMObNMMdtkiiUZj8MMh7_wppfYBuNRwO28WG3nwFU7JirALUwSB-FBKYudF8t6UTwXKH47lr26W0YI7x4BeMaZAF9uF1L-EmVyl-LZJAkoW0hrzmFb587EDWeaFcJujNcl7i3bkFAz0eBPxXxQFvvxf1jk1pPTQ1UXg8VAcwxSXTr-zMbLk578tgQ16z2P8XMIbCsxzG5Zm5kg65v2GWkKBg7BQ2-aIeKN041o4sMIMTpnbswTtbs1i0zLsLQ4eSUgZxaGA90ziOWnTZIUuSKLaVo8rW5zC6A3zH6UG-tJPDou-UkGSxoVHUmVZZNARC27DdDLiyQu_nFRbZoD5HZDCJ6jAEvui94N1UVKNBtuUt7-5sVCGiUduKZNRIMwUuuC2pD1WSJpdXLbaEMQLQZfG1sDKII-ByYo97T9_ZLKtg_M1g9m6P_Bv3bGDnMp7WItJcKuiAllCGuNZTt97SiLbM-HAq4DYYejpClLBwmg8lvQ42Vu3hwkdisTrq_z0DrrzmKvgH2lpOi_W1xEtz74_rtPDku1L_GGGDVsdKGqd4MusPLSH5MKMtZhiohtfeekkbK03vpSrlpPfoSdVdzPo0mc-64e0Npr7XXgu6NMrlDROIQIDeY93PNHRsZFZ0G3nw=w1435-h739-no?authuser=0" alt="sdcds" borderRadius="20px"/>
        <a href="https://golden-taffy-63dbf8.netlify.app"><Button>Netlify</Button></a>
        <a href="https://golden-taffy-63dbf8.netlify.app"><Button>Github</Button></a>

      </Box>
      <Box border="1px solid red" h="400px"></Box>
      <Box border="1px solid red" h="400px"></Box>




      
    </SimpleGrid>
  )
}

export default Project
