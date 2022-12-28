import React, { useEffect } from "react";
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
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import Home from "./Home";
import Skills from "./Skills";
import { motion } from "framer-motion";
import Aos from "aos";

function Navbar() {
  const [check, setCheck] = useState(false);
  const [isLesserThan800] = useMediaQuery("(max-width: 900px)");
  const [navbar, setNavbar] = useState(false);
  let home = useRef(null);
  let about = useRef(null);
  let project = useRef(null);
  let contact = useRef(null);
  let skill = useRef(null);

  const handleChange = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleChange);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const scrollToScection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
      duration: 5000,
    });
  };
  console.log("contact", contact.current);
  return (
    <Box>
      <Box
        display="flex"
        h="70px"
        p="0"
        m="auto"
        boxSizing="borderbox"
        position="fixed"
        justifyContent="space-between"
        backgroundColor={navbar ? "rgba(77, 181, 255, 1)" : "transperent"}
        color="white"
        w={{ base: "100%", sm: "100%", md: "100%" }}
        mb="40px"
      >
        <motion.Box
          ml={{ md: "50px", sm: "20px" }}
          w="200px"
          animate={{ x: 30 }}
          transition={{ duration: 2 }}
        >
          <Text
            fontSize={{ base: "20px", sm: "20px", md: "30px" }}
            mt="15px"
            textShadow="1px"
            fontStyle="oblique"
            color={navbar ? "black" : "whitesmoke"}
          >
            JEEVAN ALOOR
          </Text>
        </motion.Box>
        {isLesserThan800 ? (
          <Menu border="none">
            <MenuButton
              border="none"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              w="80px"
              h="50px"
              mt="10px"
            />

            <MenuList>
              <MenuItem backgroundColor="black">
                <NavLink to="/" onClick={() => scrollToScection(home)}>Home</NavLink>
              </MenuItem>
              <MenuItem backgroundColor="black" >
                <NavLink onClick={() => scrollToScection(about)} to="/About" >About</NavLink>
              </MenuItem>
              <MenuItem backgroundColor="black">
                <NavLink onClick={() => scrollToScection(project)}  to="/Project">Project</NavLink>
              </MenuItem>
              <MenuItem backgroundColor="black">
                <NavLink onClick={() => scrollToScection(skill)} to="/Skills">Skills</NavLink>
              </MenuItem>
              <MenuItem backgroundColor="black">
                <NavLink onClick={() => scrollToScection(contact)} to="/Contact" >
                  Contact
                </NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex
            justifyContent="space-around"
            w={{ md: "700px" }}
            mt="20px"
            fontFamily="sans-serif"
            fontWeight="semibold"
          >
            <NavLink onClick={() => scrollToScection(home)} to="/">
              <Text _hover={{color:"red"}}>Home</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(about)} to="/About">
              <Text _hover={{color:"red"}}>About</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(skill)} to="/Skills">
              <Text _hover={{color:"red"}}>Skills</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(project)} to="/Project">
              <Text _hover={{color:"red"}}>Project</Text>
            </NavLink>
            
            <NavLink onClick={() => scrollToScection(contact)} to="/Contact" >
              <Text _hover={{color:"red"}}>Contact</Text>
            </NavLink>

            <a
              href="https://drive.google.com/file/d/1G691z86S9DXSQrLVZhtzZXP7FBmRrThm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Flex>
        )}
      </Box>

      <Home
        home={home}
        skill={skill}
        project={project}
        about={about}
        contact={contact}
      />
    </Box>
  );
}

export default Navbar;
