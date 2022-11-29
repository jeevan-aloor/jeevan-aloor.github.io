import React , {useEffect} from "react";
import { NavLink } from "react-router-dom";
import styles from "./home.css";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
  Text,
  
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  
} from "@chakra-ui/icons";
import { useState } from "react";
import Home from "./Home";
import Skills from "./Skills";
import {motion} from 'framer-motion'
import Aos from 'aos'

function Navbar() {
  const [check, setCheck] = useState(false);
  const [isLesserThan800] = useMediaQuery("(max-width: 900px)");
  const [navbar,setNavbar]=useState(false)

 const handleChange=()=>{
  if(window.scrollY>=40){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
 }
 window.addEventListener('scroll',handleChange)
 
 useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);
  return (
    <Box  >
    <Box  
    
      display="flex"
      
      
      h="70px"
      p="0"
      m="auto"
      boxSizing="borderbox"
      position="fixed"
      
      
      justifyContent="space-between"
      backgroundColor={navbar ? "blue":"transperent"}
      color="white"
      w={{base:"0",sm:"100%" }}
      border="1px solid red"
      
      
     
      
    >
      <motion.Box ml={{ md: "50px", sm: "20px" }}   w="200px" animate={{x:100}} transition={{duration:2}} >
        <Text  fontSize="30px" mt="15px"  fontStyle="Fantasy" textShadow="2px 2px" color="#90e0ef">
          JEEVAN ALOOR
        </Text>
      </motion.Box>
      {isLesserThan800 ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            w="70px"
            h="50px"
            mt="10px"
           
          />

          <MenuList  >
            <MenuItem backgroundColor="black">
              <NavLink  to="/">Home</NavLink>
            </MenuItem>
            <MenuItem backgroundColor="black">
              <NavLink to="/About">About</NavLink>
            </MenuItem>
            <MenuItem backgroundColor="black">
              <NavLink to="/Project">Project</NavLink>
            </MenuItem>
            <MenuItem backgroundColor="black">
              <NavLink to="/Skills">Skills</NavLink>
            </MenuItem>
            <MenuItem backgroundColor="black">
              <NavLink to="/Contact">Contact</NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Flex justifyContent="space-around" w={{ md: "700px" }} mt="20px" fontFamily="sans-serif" fontWeight="semibold" >
          <NavLink  to="/" end >Home</NavLink >
          <NavLink to="/About" end>About</NavLink>
          <NavLink to="/Project" end>Project</NavLink>
          <NavLink to="/Skills" end>Skills</NavLink>
          <NavLink to="/Contact" end>Contact</NavLink>
        </Flex>
      )}
    </Box>
   
  </Box>
  );
}

export default Navbar;
