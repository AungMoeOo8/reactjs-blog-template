import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EmojiComponent = () => {
  const [timeToChange, setTimeToChange] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToChange(!timeToChange);
      setTimeToChange(!timeToChange);
    }, 5000);

    return () => clearInterval(interval);
  }, [timeToChange]);
  return <>{timeToChange ? <span>😄</span> : <span>😃</span>}</>;
};

function HomePage() {
  const [recents, setRecents] = useState([
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-1F47hBU6muwt2UPK-WWBakQ8qrVxHIbLA&usqp=CAU",
      title: "In your dream",
      created_at: "3/December/2022",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tOyawvB_d91MLToD0wUhHV9BFotYmcABcA&usqp=CAU",
      title: "Do you dream",
      created_at: "3/December/2022",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-3dPClsAaRML_7qtNqsCDNNBhh9dYbDJzA&usqp=CAU",
      title: "How you dream",
      created_at: "3/December/2022",
    },
  ]);

  return (
    <Container maxW="container.xl">
      <Helmet>
        <title>Welcome | My Blog</title>
      </Helmet>
      <Heading
        textAlign="center"
        fontSize={["6xl", "7xl"]}
        marginTop="10%"
        marginBottom="15%"
      >
        Welcome to My Blog! <EmojiComponent />
      </Heading>

      <Box marginY="10%">
        <Heading marginY="20px">Recents</Heading>
        <SimpleGrid minChildWidth="280px" spacing="40px" gap="5">
          {recents.map((item, index) => (
            <Link to="/blog/" key={index}>
              <Box
                borderRadius="1rem"
                overflow="hidden"
                boxShadow="xl"
                transition="250ms"
                _hover={{ transform: "scale(1.03)" }}
              >
                <Image
                  src={item.cover}
                  objectFit="cover"
                  width="100%"
                  height="200px"
                />
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  bg="gray.900"
                  px="3"
                  py="5"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    textTransform="capitalize"
                    color="white"
                  >
                    {item.title}
                  </Text>
                  <Text fontSize="md" color="gray">
                    {item.created_at}
                  </Text>
                </Flex>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default HomePage;
