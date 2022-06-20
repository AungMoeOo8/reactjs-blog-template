import React, { useState } from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function BlogPage() {
  const [contents, setcontents] = useState([
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
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-3dPClsAaRML_7qtNqsCDNNBhh9dYbDJzA&usqp=CAU",
      title: "How you dream",
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
    <Container maxW="container.xl" mb="20">
      <Helmet>
        <title>What are you searching? | My Blog</title>
      </Helmet>
      <Text fontSize="3xl" fontWeight="bold" my="10">
        Here's everything!
      </Text>
      <SimpleGrid minChildWidth="300px" spacing="40px" gap="5">
        {contents.map((item, index) => (
          <Link to="/blog/1" key={index}>
            <Box
              as={motion.div}
              layout
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
    </Container>
  );
}

export default BlogPage;
