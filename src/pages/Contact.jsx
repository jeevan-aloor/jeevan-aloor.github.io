import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Contact({ contact }) {
  return (
    <Box h="450px" backgroundColor="#8da9c4" ref={contact}>
      <Text
        fontWeight="medium"
        fontFamily="unset"
        fontStyle="inherit"
        fontSize="xxx-large"
        pt="40px"
        mb="30px"
      >
        Contact me
      </Text>
      <Text m="auto" w={{ base: "200px", sm: "300px", md: "500px" }}>
        You can contact me at the places mentioned below. I will try to get back
        to you as fast as I can.
      </Text>
      <Flex direction="row" gap="30px" mt="50px" justifyContent="center">
        <a
          href="https://github.com/jeevan-aloor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
            alt=""
            w="70px"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jeevan-aloor-228237232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png"
            alt="hcc"
            w="70px"
          />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/95/95627.png"
            alt="hcc"
            w="70px"
          />
        </a>
        <a
          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"
            alt="hcc"
            w="70px"
          />
        </a>
      </Flex>
    </Box>
  );
}

export default Contact;
