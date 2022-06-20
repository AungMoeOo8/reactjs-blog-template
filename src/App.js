import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box
          position="absolute"
          w="100vw"
          h="50vh"
          // background='url("https://websavii.com/wp-content/uploads/2016/07/fountain-pen1.jpg") no-repeat'
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="-1"
          sx={{ maskImage: "linear-gradient(black, transparent)" }}
        ></Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<ContentPage />} />
          </Route>
        </Routes>

        <Flex justify="center" gap="30px" marginY="30px">
          <Icon
            as={BsFacebook}
            boxSize="40px"
            color="blue.500"
            cursor="pointer"
          />
          <Icon
            as={BsTwitter}
            boxSize="40px"
            color="blue.300"
            cursor="pointer"
          />
          <Icon as={BsGithub} boxSize="40px" cursor="pointer" />
        </Flex>
      </BrowserRouter>
    </div>
  );
}

export default App;
