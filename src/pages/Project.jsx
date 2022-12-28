import {
  Box,
  Grid,
  GridItem,
  Image,
  Button,
  HStack,
  Text,
  Tag,
  Heading,
  Stack,
  Badge,
} from "@chakra-ui/react";
import React from "react";

function Project({ project }) {
  return (
    <Box
      ref={project}
      h={{ base: "2100px", md: "1400px" }}
      backgroundColor="#0D0E0E"
      mt="-30px"
    >
      <Heading pt="40px" mb="40px" color="#FFFFFF">
        PROJECTS
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={6} color="#FFFFFF">
        <GridItem
          w="80%"
          h={{ base: "650px", md: "400px" }}
          margin="auto"
          display="flex"
          flexDirection={{ base: "column", md: "row", sm: "column" }}
        >
          <GridItem
            w={{ base: "100%", md: "40%" }}
            h={{ base: "50%", md: "100%" }}
          >
            <Image
              src="https://portugalstartups.com/wp-content/uploads/2015/05/farfetch.gif"
              alt="gif"
              h={{ base: "90%", md: "100%" }}
              p={{ md: "40px" }}
            />
          </GridItem>
          <GridItem
            w={{ base: "100%", md: "60%" }}
            h={{ base: "80%", md: "100%" }}
          >
            <Heading>FARFETCH</Heading>
            <Text p={{ base: "10px", md: "30px" }}>
              This is one of the Clone of Farfetch website,This website is
              basically London based laxuries item shopping e-commerce website.
            </Text>
            <Text fontWeight="bold" textDecor="underline" mb="10px">
              I'm used to make this Website{" "}
            </Text>
            <Stack
              direction="row"
              justifyContent={{ base: "center", md: "center" }}
              pl={{ base: "10px" }}
              pr={{ base: "30px" }}
              overflow="auto"
            >
              <Badge>HTML</Badge>
              <Badge colorScheme="green">CSS</Badge>
              <Badge colorScheme="red">JAVA SCRIPT</Badge>
              <Badge colorScheme="purple">React</Badge>
              <Badge colorScheme="purple">Chakra UI</Badge>
            </Stack>
            <Text mt="20px" mb="20px">
              For deploy
            </Text>
            <Stack direction="row" justifyContent="center">
              <Badge colorScheme="green" mb="20px">
                NETLIFY
              </Badge>
            </Stack>
            <Box
              display="flex"
              flexDirection="row"
              w={{ md: "40%", base: "30%" }}
              m={{ md: "auto" }}
              ml={{ base: "30px" }}
            >
              <a
                href="https://github.com/jeevan-aloor/lucky-stone-5708"
                style={{ margin: "auto" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51" mr={{ base: "20px" }}>
                  GITHUB
                </Button>
              </a>
              <a
                href="https://effulgent-biscotti-06a6fc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51">LIVE DEMO</Button>
              </a>
            </Box>
          </GridItem>
        </GridItem>
        <GridItem
          w="80%"
          h={{ base: "650px", md: "400px" }}
          margin="auto"
          display="flex"
          flexDirection={{ base: "column", md: "row", sm: "column" }}
        >
          <GridItem
            w={{ base: "100%", md: "40%" }}
            h={{ base: "50%", md: "100%" }}
          >
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSZ4UFpVn2wUg88upPbco6Z5PYMp7hiXxFw&usqp=CAU"
              alt="gif"
              h={{ base: "90%", md: "100%" }}
              p={{ md: "40px" }}
            />
          </GridItem>
          <GridItem
            w={{ base: "100%", md: "60%" }}
            h={{ base: "80%", md: "100%" }}
          >
            <Heading>OPTIMIZELY</Heading>
            <Text p={{ base: "10px", md: "30px" }}>
              Optimizely is known for content, commerce and optimization with
              our Digital Experience Platform (DXP). Millions of experiences are
              served with our platform .
            </Text>
            <Text fontWeight="bold" textDecor="underline" mb="10px">
              I'm used to make this Website{" "}
            </Text>
            <Stack
              direction="row"
              justifyContent={{ base: "center", md: "center" }}
              pl={{ base: "10px" }}
              pr={{ base: "30px" }}
              overflow="auto"
            >
              <Badge>HTML</Badge>
              <Badge colorScheme="green">CSS</Badge>
              <Badge colorScheme="red">JAVA SCRIPT</Badge>
            </Stack>
            <Text mt="20px" mb="20px">
              For deploy
            </Text>
            <Stack direction="row" justifyContent="center">
              <Badge colorScheme="green" mb="20px">
                NETLIFY
              </Badge>
            </Stack>
            <Box
              display="flex"
              flexDirection="row"
              w={{ md: "40%", base: "30%" }}
              m={{ md: "auto" }}
              ml={{ base: "30px" }}
            >
              <a
                href="https://github.com/jeevan-aloor/breezy-month-9750"
                style={{ margin: "auto" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51" mr={{ base: "20px" }}>
                  GITHUB
                </Button>
              </a>
              <a
                href="https://bespoke-queijadas-a45cea.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51">LIVE DEMO</Button>
              </a>
            </Box>
          </GridItem>
        </GridItem>
        <GridItem
          w="80%"
          h={{ base: "650px", md: "400px" }}
          margin="auto"
          display="flex"
          flexDirection={{ base: "column", md: "row", sm: "column" }}
        >
          <GridItem
            w={{ base: "100%", md: "40%" }}
            h={{ base: "50%", md: "100%" }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="gif"
              h={{ base: "90%", md: "100%" }}
              p={{ md: "40px" }}
            />
          </GridItem>
          <GridItem
            w={{ base: "100%", md: "60%" }}
            h={{ base: "80%", md: "100%" }}
          >
            <Heading>TRIPOTO</Heading>
            <Text p={{ base: "10px", md: "30px" }}>
              Tripoto is social travel platform to share and discover travel
              experiences, stories, community, tourism guides, hotels, holidays,
              getaways, attractions.
            </Text>
            <Text fontWeight="bold" textDecor="underline" mb="10px">
              I'm used to make this Website{" "}
            </Text>
            <Stack
              direction="row"
              justifyContent={{ base: "center", md: "center" }}
              pl={{ base: "10px" }}
              pr={{ base: "30px" }}
              overflow="auto"
            >
              <Badge>HTML</Badge>
              <Badge colorScheme="green">CSS</Badge>
              <Badge colorScheme="red">JAVA SCRIPT</Badge>
            </Stack>
            <Text mt="20px" mb="20px">
              For deploy
            </Text>
            <Stack direction="row" justifyContent="center">
              <Badge colorScheme="green" mb="20px">
                NETLIFY
              </Badge>
            </Stack>
            <Box
              display="flex"
              flexDirection="row"
              w={{ md: "40%", base: "30%" }}
              m={{ md: "auto" }}
              ml={{ base: "30px" }}
            >
              <a
                href="https://github.com/sahilkh07/boundless-sleep-6032"
                style={{ margin: "auto" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51" mr={{ base: "20px" }}>
                  GITHUB
                </Button>
              </a>
              <a
                href="https://jovial-babka-946b54.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button background="#8C6A51">LIVE DEMO</Button>
              </a>
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Project;
