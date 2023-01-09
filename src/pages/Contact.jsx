import { Box, Text, Image, Flex, Input, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Contact({ contact }) {
  return (
    <Box h={{md:"750px",base:"800px"}} backgroundColor="#8da9c4" ref={contact}>
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
      <Box mt="40px">
      <form action="https://getform.io/f/554bdd97-b43d-43d8-8971-385c90130438" method="POST" style={{height:"300px",width:"300px", margin:"auto"}} >
        <Heading mb="20px">Send messages</Heading>
    <Input type="text" name="name" style={{border:"1px solid red",width:"100%"}} placeholder="enter name"  mb="20px"/><br/>
    <Input type="email" name="email" placeholder="enter email" style={{border:"1px solid red",width:"100%"}} mb="20px" /><br/>
    <Input type="text" name="message" placeholder="enter message" style={{border:"1px solid red",width:"100%"}} mb="20px" h="150px" /><br/>
    {/* <!-- add hidden Honeypot input to prevent spams --> */}
    <input type="hidden" name="_gotcha"  />
    {/* <!-- checkbox handle --> */}
   
    {/* <!-- radio button handle --> */}
   
    {/* <!-- select field handle --> */}
   
    <Button type="submit" style={{width:"100%"}} color="white" background="black"  _hover={{color:"none"}}>Send</Button>
</form>
</Box>
    </Box>
  );
}

export default Contact;
