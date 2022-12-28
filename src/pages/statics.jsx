import React from "react";
import { Box, Heading, Image, Button } from "@chakra-ui/react";
import calender from "../calendar.jpeg";

function Statics() {
  return (
    <Box
      h={{ md: "900px" }}
      backgroundColor="#010101"
      color="#FFFFFF"
      pt="40px"
    >
      <Heading mb="30px">My Statistics</Heading>
      <Box
        // display={{md:"flex"}}
        gap="30px"
        justifyContent="space-around"
        w="80%"
        m="auto"
      >
        <Image
          src="https://camo.githubusercontent.com/c62dad9e0a733375c8ef55940c2a6944124c33399b7843502c4a554c1d29c9ae/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d2f3f757365723d6a656576616e2d616c6f6f72"
          w="80%"
          m="auto"
          mt="50px"
          h="200px"
        />
        <Image
          src="https://github-readme-stats.vercel.app/api?username=jeevan-aloor&show_icons=true"
          w="80%"
          m="auto"
          mt="50px"
          h="200px"
        />
      </Box>
      <Image src={calender} w="80%" m="auto" mt="50px" h="200px" />
    </Box>
  );
}

export default Statics;
