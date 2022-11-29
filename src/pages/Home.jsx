import React, { useEffect } from "react";
import { Box, Grid, GridItem,Image,Text } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query'
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import './home.css'
function Home() {
  const [isNotSmallerscreen]=useMediaQuery("(min-width:600px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box backgroundColor="#e6c535" >
      {/* <Grid templateRows="repeat(5, 1fr)" gap={6} w="600px" m="auto" overflow="none">
        <GridItem w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-up" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-right" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-left" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-flip" w="100%" h="1000" bg="blue.500" />
      </Grid> */}
      <Box className="bckimage" width="100%"height="750px" pt="100px" display="flex" flexDirection={isNotSmallerscreen ? "row" : "column"} >
       <Box w="50%" >
        <Text mt="200px" textAlign="left" ml="200px" fontWeight="semibold" color="#e54b4b" fontSize={{md:"40px",sm:"10px"}}>Hello I'm a</Text>
        <Text  fontSize={{md:"55px",sm:"20px"}}  color="#FEEBC8"  fontWeight= 'bold' textAlign="left" ml="250px" > Web Developer</Text>
        
       </Box>
       <Box w="50%" >
        <Image src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="coding" h="60%" w="70%" m="auto" borderRadius="70px 20px 100px " mt="60px"  border="30px solid yellow"/>

       </Box>
      </Box>
      <Box>
      <About/>
      </Box>
      <Box>
      <Project/>
      </Box>
      <Box>
      
      <Contact/>
      </Box>
      
      

      



      
      
      

      
      
   
   </Box>
  );
}

export default Home;
