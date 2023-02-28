import React from "react";
import { Box, Heading, Image, Button } from "@chakra-ui/react";
import calender from "../calendar.jpeg";
import GitHubCalendar from 'react-github-calendar';

function Statics() {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#8400b8',
    level3: '#b22ff4',
    level2: '#b265f6',
    level1: '#c084f5',
    level0: '#ecd9fc',
  };
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
          src="https://streak-stats.demolab.com/?user=jeevan-aloor"
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
      {/* <Image
        src={calender}
        w={{ md: "80%", base: "70%" }}
        m="auto"
        mt="50px"
        h="200px"
      /> */}
      <Box w="70%" m="auto" mt="40px">
        <Heading mb="20px" textDecoration="underline">GitHub calendar</Heading>
        
        <GitHubCalendar
          username="jeevan-aloor"
          blockSize={15}
          blockMargin={5}
          theme={colorTheme}
          fontSize={16}
        />
      </Box>
    </Box>
  );
}

export default Statics;
