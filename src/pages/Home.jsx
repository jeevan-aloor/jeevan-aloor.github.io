import React, { useEffect } from "react";
import { Box, Grid, GridItem, Image, Text, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import "./home.css";
import Statics from "./statics";
import background from "../background.jpeg";
import resumejeevan from "../Jeevan-Aloor-Resume.pdf"
import { ArrowDownIcon } from '@chakra-ui/icons'

function Home({ home, skill, project, about, contact }) {
  const [isNotSmallerscreen] = useMediaQuery("(min-width:600px)");
  // const {home}=useContext(contextApi)
  function handleDownloadAndRedirect(event) {
    event.preventDefault();
    // Download file
    const fileUrl = resumejeevan;
    const fileName = "fp_05-Jeevan-Aloor-Resume";
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.click();

    // Redirect to another link
    const redirectUrl = 'https://drive.google.com/file/d/17B1udpoF-4WBn--1Hw_WTAXxJzGXfega/view?usp=sharing';
    window.open(redirectUrl, "_blank");
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box backgroundColor="#010101">
      {/* <Grid templateRows="repeat(5, 1fr)" gap={6} w="600px" m="auto" overflow="none">
        <GridItem w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-up" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-right" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-left" w="100%" h="1000" bg="blue.500" />
        <GridItem data-aos="fade-flip" w="100%" h="1000" bg="blue.500" />
      </Grid> */}
      <Box
        className="bckimage"
        width={{ base: "100%", sm: "100%" }}
        height="600px"
        pt="100px"
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        p="0"
        m="auto"
        boxSizing="borderbox"
        ref={home}
        backgroundImage={{ md: background }}
        backgroundColor={{ base: "#0A0A0A" }}
        backgroundSize={{ md: "100%", base: "100%" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ md: "100%", sm: "50%", base: "50%" }}
        >
          <Text
            mt="200px"
            textAlign="left"
            ml={{ base: "50px", sm: "70px", md: "200px" }}
            fontWeight="semibold"
            color="#75E12C"
            fontSize={{ md: "50px", sm: "10px" }}
            mb="10px"
          >
            Hello I'm a
          </Text>
          {isNotSmallerscreen ? (
            <>
              <Text
                bprder="1px solid red"
                fontSize={{ md: "55px", sm: "20px" }}
                color="#FEEBC8"
                fontWeight="bold"
                textAlign="left"
                ml="100px"
              >
                {" "}
                <a
                  href="https://git.io/typing-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://readme-typing-svg.demolab.com?font=Bodoni&weight=1000&size=40&duration=3000&pause=800&color=84d2f6&center=false&height=100&width=585&lines=Mern Stack Developer 😇;Countinuously Learning 🤩 ;Problem Solver 🧠;UI-UX Designer 🙌;"
                    alt="Typing SVG"
                  />
                </a>
              </Text>

              {/* <a
                href="resumejeevan https://drive.google.com/file/d/1-prGim-SSVI_3bg5uZnXP7-8SbIDLKbX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              > */}
              <Button
                style={{
                  background: "#649DD5",
                  padding: "10px",
                  borderRadius: "10px",
                }}
                onClick={handleDownloadAndRedirect}
              >
                See my Resume   <ArrowDownIcon />
              </Button>
              {/* </a> */}


            </>
          ) : (
            <Text ml="40px" fontSize="25px" color="white">
              {" "}
              Web Developer
            </Text>
          )}
        </Box>

        <Box>
          {/* <Image
            src="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15040.jpg?w=740&t=st=1677522337~exp=1677522937~hmac=1ac198a2458ff9e826f36b784eac8859f25631144d313cd904485fa3bb531964"
            alt="coding"
            h="60%"
            w="70%"
            m="auto"
            
            
            mt="100px"
            // border={{base:"none",md:"30px solid yellow"}}
            
          /> */}
        </Box>
      </Box>
      <Box>
        <About about={about} />
      </Box>
      <Box>
        <Statics />
      </Box>
      <Box>
        <Skills skill={skill} />
      </Box>
      <Box>
        <Project project={project} />
      </Box>
      <Box>
        <Contact contact={contact} />
      </Box>
    </Box>
  );
}

export default Home;
