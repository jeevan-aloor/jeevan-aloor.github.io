import React, { useEffect } from "react";
import { Box, Heading, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { motion, Variants, useScroll } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";

const cardVariants = {
  offscreen: {
    x: 20,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "fade",
      bounce: 0.8,
      duration: 1,
    },
  },
};
function Skills({ skill }) {
  // const { scrollYProgress } = useScroll();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box
      h={{ md: "1000px", base: "3000px" }}
      ref={skill}
      backgroundColor="#010101"
      color="#FFFFFF"
    >
      <Heading mt="40px" mb="30px">
        Skills
      </Heading>
      <Text fontSize="25px" mb="30px">
        FRONTEND
      </Text>
      <Grid
        templateColumns={{ md: "repeat(4, 1fr)" }}
        gap={6}
        w="80%"
        m={{ md: "auto", base: "auto" }}
      >
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          // border="1px solid red"

          boxShadow="rgba(255,0,0) 0px 10px  20px"
          borderRadius="0px 0px 20px 20px"
          initial="offscreen"
          whileInView="onscreen"
          data-aos="fade-left"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            HTML
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-left"
          boxShadow="rgba(0,0,255) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            CSS
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-right"
          boxShadow="rgba(255,255,0) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            JAVASCRIPT
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-right"
          boxShadow="rgba(255,0,255) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            REACT
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-right"
          boxShadow="rgba(0,0,128) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            REDUX
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-right"
          boxShadow="rgba(255,255,255, 0.6) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            CHAKRA UI
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-left"
          boxShadow="rgba(194, 0, 229) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/typescript.9b1779a2fd3504559e59.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            TYPE SCRIPT
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          borderRadius="0px 0px 20px 20px"
          data-aos="fade-left"
          boxShadow="rgba(255, 166, 0) 0px 10px  20px"
        >
          <Image
            src="data:image/png;base64,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"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
            h="120px"
          ></Image>
          <Text mt="20px" color="#FFFFFF" fontSize="20px">
            NODE
          </Text>
        </GridItem>
      </Grid>
      <Text mt="50px" fontSize="25px" mb="30px">
        OTHERS
      </Text>
      <Grid templateColumns={{ md: "repeat(4, 1fr)" }} gap={6} w="80%" m="auto">
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          boxShadow="rgba(255,255,255, 2) 0px 10px  20px"
        >
          <Image
            src="https://manojattri.vercel.app/static/media/github.3b9e32903aa89111875d.png"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            GIT HUB
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          boxShadow="rgba(255, 174, 71) 0px 10px  20px"
        >
          <Image
            src="data:image/png;base64,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"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            POSTMAN
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          boxShadow="rgba(0, 0, 255) 0px 10px  20px"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6A2WlDMtFUU6qXISOzrVQOSP1Gu1NY1G-qg&usqp=CAU"
            alt="html"
            w="250px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            VISUAL STUDIO
          </Text>
        </GridItem>
        <GridItem
          w={{ md: "100%", base: "80%" }}
          h="200"
          boxShadow="rgba(240, 240, 240) 0px 10px  20px"
        >
          <Image
            src="data:image/png;base64,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"
            alt="html"
            w="120px"
            margin="auto"
            mt="20px"
          ></Image>
          <Text mt="15px" color="#FFFFFF" fontSize="20px">
            NETLIFY
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Skills;
