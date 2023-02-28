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
  Text, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import Home from "./Home";
import Skills from "./Skills";
import { motion } from "framer-motion";
import Aos from "aos";
import resumejeevan from "../Jeevan-Aloor-Resume.pdf"

function Navbar() {
  const [check, setCheck] = useState(false);
  const [isLesserThan800] = useMediaQuery("(max-width: 900px)");
  const [navbar, setNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let home = useRef(null);
  let about = useRef(null);
  let project = useRef(null);
  let contact = useRef(null);
  let skill = useRef(null);

  function handleDownloadAndRedirect(event) {
    event.preventDefault();
    // Download file
    const fileUrl = resumejeevan;
    const fileName = "fp_05-Jeevan-Aloor-Resume";
    const downloadLink = document.createElement('a');
    // const downloadLink=document.getElementById("downloadRedirect")
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.click();

    // Redirect to another link
    const redirectUrl = 'https://drive.google.com/file/d/17B1udpoF-4WBn--1Hw_WTAXxJzGXfega/view?usp=sharing';
    window.open(redirectUrl, "_blank");
  }

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

  return (
    <Box>
      <Box
        display="flex"
        h="70px"
        p="0"
        m="auto"
        boxSizing="borderbox"
        position="fixed"
        zIndex="100"
        justifyContent="space-between"
        backgroundColor={navbar ? "rgba(77, 181, 255, 1)" : "transperent"}
        color="white"
        w={{ base: "100%", sm: "100%", md: "100%" }}
        mb="40px"
      // pl="20px"
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
            fontWeight="semibold"
          >
            ★彡ᴊᴇᴇᴠᴀɴ ᴀʟᴏᴏʀ彡★
            {/* 𝕁𝔼𝔼𝕍𝔸ℕ 𝔸𝕃𝕆𝕆 ℝ */}
          </Text>
        </motion.Box>
        {isLesserThan800 ? (
          <>
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen} background="black" mt="20px"  >
          <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
            <NavLink to="/" onClick={() => scrollToScection(home)}>
                  Home
                </NavLink>
                <NavLink onClick={() => scrollToScection(about)} to="/About">
                  About
                </NavLink>
                <NavLink
                  onClick={() => scrollToScection(project)}
                  to="/Project"
                >
                  Project
                </NavLink>
                <NavLink onClick={() => scrollToScection(skill)} to="/Skills">
                  Skills
                </NavLink>
                <NavLink
                  onClick={() => scrollToScection(contact)}
                  to="/Contact"
                >
                  Contact
                </NavLink>
              
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
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
                  <NavLink to="/" onClick={() => scrollToScection(home)}>
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem backgroundColor="black">
                  <NavLink onClick={() => scrollToScection(about)} to="/About">
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem backgroundColor="black">
                  <NavLink
                    onClick={() => scrollToScection(project)}
                    to="/Project"
                  >
                    Project
                  </NavLink>
                </MenuItem>
                <MenuItem backgroundColor="black">
                  <NavLink onClick={() => scrollToScection(skill)} to="/Skills">
                    Skills
                  </NavLink>
                </MenuItem>
                <MenuItem backgroundColor="black">
                  <NavLink
                    onClick={() => scrollToScection(contact)}
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <Flex
            justifyContent="space-around"
            w={{ md: "700px" }}
            mt="20px"
            fontFamily="sans-serif"
            fontWeight="semibold"
          >
            <NavLink onClick={() => scrollToScection(home)} to="/">
              <Text _hover={{ color: "red" }}>Home</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(about)} to="/About">
              <Text _hover={{ color: "red" }}>About</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(skill)} to="/Skills">
              <Text _hover={{ color: "red" }}>Skills</Text>
            </NavLink>
            <NavLink onClick={() => scrollToScection(project)} to="/Project">
              <Text _hover={{ color: "red" }}>Project</Text>
            </NavLink>

            <NavLink onClick={() => scrollToScection(contact)} to="/Contact">
              <Text _hover={{ color: "red" }}>Contact</Text>
            </NavLink>

            <a id="downloadRedirect"
              onClick={handleDownloadAndRedirect}
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
