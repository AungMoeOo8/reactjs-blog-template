import { Heading, Text, Container, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <Box position="sticky" top="0px" height="85px" bg='aliceblue'>
      <Container maxW="container.xl" paddingY="5">
        <Link as={Link} to="/">
          <Heading display="inline">MyBlog</Heading>
        </Link>
      </Container>
    </Box>
  );
}

export default Navbar;
