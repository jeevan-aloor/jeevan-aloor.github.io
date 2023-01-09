import { Box, Wrap, WrapItem, Avatar, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function About({ about }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box
      pt="60px"
      h={{ base: "900px", md: "700px" }}
      // backgroundImage="#5A6168"
      backgroundColor="#0D0E0E"
      ref={about}
    >
      <Text fontSize="xxx-large" color="#E5F3F3">
        About Me
      </Text>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        m={{ base: "auto", sm: "auto" }}
      >
        <Box
          w={{ md: "50%", base: "100%", sm: "100%" }}
          h={{ base: "250px", sm: "350px", md: "450px" }}
          mt="30px"
        >
          <Image
            m={{ base: "auto" }}
            borderRadius="50%"
            size="2xl"
            w={{ md: "350px", sm: "300px" }}
            h={{ base: "200px", sm: "250px", md: "350px" }}
            ml={{ md: "100px" }}
            name="Jeevan Aloor"
            data-aos="fade-left"
            src="https://ca.slack-edge.com/T04F5RVNC2J-U04FUSM0552-367143508c0d-512"
          />
        </Box>
        <Box
          w={{ md: "50%", base: "100%", sm: "100%" }}
          h={{ md: "450px", base: "430px", sm: "220px" }}
          mt="30px"
          mr={{ md: "40px" }}
          border="0.1px solid #E5F3F3"
          color="#E5F3F3"
          borderRadius="10px"
        >
          <Text m={{ base: "auto", md: "10px" }} fontSize={{ md: "20px" }}>
            <Text fontSize={{ md: "30px" }}> My name is Jeevan </Text>{" "}
            <Text mb="20px">
              {" "}
              I am a Fullstack web Developer and technology enthusiast.{" "}
            </Text>{" "}
            <Text textAlign="left" pl="30px">
              I have a passion for coding and creating innovative solutions to
              complex problems. I am experienced in developing web applications.
              My goal is to continue to grow my skills and abilities in order to
              provide meaningful solutions to critical problems. I enjoy
              learning new technologies and stay up to date with the latest
              trends in software development. I am an excellent team player and
              have the ability to work independently. I have a strong work ethic
              and strive to create high-quality solutions that are reliable and
              efficient.
            </Text>
          </Text>
        </Box>
      </Box>
      <Box h="400px"></Box>
    </Box>
  );
}

export default About;
