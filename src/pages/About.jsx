import { Box, Wrap,WrapItem,Avatar,Text,Image } from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import "aos/dist/aos.css";
import Aos from 'aos'

function About() {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 
  return (
    
    <Box    pt="100px" h="700px"   backgroundImage="linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)">
      <Text fontSize="xxx-large">About Me</Text>
      <Box  display="flex" >
      
      <Box w="50%"  h="450px" mt="30px"  >
        
    <Image    borderRadius="50%"  size='2xl' w="350px" h="350px" ml="100px" name='Jeevan Aloor'  src='https://ca.slack-edge.com/T049YSPNG02-U04AXCDADQU-1585b6d28c11-512' />{' '}
  
      </Box>
      <Box  w="50%" h="450px" mt="30px" >
        <Text>My name is Jeevan Aloor  <br/>Aspiring Web Developer <br/> I love to build projects or responsve fully functionality  website  </Text>
      
      </Box>
        
      
    </Box>
    <Box h="400px"></Box>
    </Box>
  
  )
}

export default About
