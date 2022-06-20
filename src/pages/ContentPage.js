import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

function ContentPage() {
  return (
    <Container
      maxW="container.xl"
      display={["block", "block", "block", "flex"]}
      my="10"
      gap="20px"
    >
      <Box flexBasis="65%">
        <Image
          width="100%"
          height="auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-3dPClsAaRML_7qtNqsCDNNBhh9dYbDJzA&usqp=CAU"
          objectFit="cover"
        />
        <Flex justifyContent="space-between" marginY="5" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Some title
          </Text>
          <Text>Date</Text>
        </Flex>

        <Text fontSize="22px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          risus ligula, finibus tincidunt tellus vitae, rhoncus dignissim eros.
          Praesent ac diam nec metus vestibulum sollicitudin. Aliquam aliquet
          nisl ornare, sodales est eu, mollis nisi. Nam vehicula nibh eu neque
          dictum molestie. Quisque vehicula posuere lectus, ut vestibulum elit
          elementum quis. Morbi tempus fringilla metus, eget scelerisque lorem
          dapibus vel. Aliquam tincidunt ante euismod consectetur imperdiet.
          Nunc mi enim, commodo a velit aliquam, rhoncus bibendum arcu. Vivamus
          congue sodales orci, eu vestibulum mauris dignissim et. Vestibulum
          auctor turpis sit amet hendrerit sodales. In ac elementum nunc, nec
          gravida odio. Fusce vel turpis sollicitudin, porttitor sapien eu,
          dapibus ligula. Morbi vel mauris a diam tincidunt interdum sed in
          nulla. Aliquam cursus ante ac euismod venenatis. Ut sodales iaculis ex
          vel ultrices. Suspendisse vel elementum tellus. Mauris non purus id
          ligula varius mattis at id ipsum. Suspendisse potenti. Mauris
          ultrices, velit vitae scelerisque euismod, purus nisl commodo mauris,
          ut maximus nunc justo eget nisl. Morbi eu venenatis lacus. Vestibulum
          nec ultrices erat, quis interdum erat. Morbi lectus diam, rutrum sed
          risus non, convallis sodales eros. Fusce elit justo, dictum a rutrum
          eu, lacinia ac ligula. Nulla cursus ante ipsum, ac auctor erat
          ultrices at. Phasellus pulvinar magna nec eros convallis, sed molestie
          purus sagittis. Nunc condimentum egestas lorem, nec ornare diam
          tincidunt sit amet. Proin nec tellus sagittis, malesuada nibh
          tincidunt, bibendum justo. Mauris ac eleifend libero. Nam fermentum
          sapien eget maximus auctor. Ut mauris lorem, ullamcorper vitae
          consequat at, finibus vel sem. Duis quis nulla nec ex interdum commodo
          ut sed tortor. Vestibulum faucibus rhoncus lobortis. Aenean libero
          orci, tristique at turpis at, sodales efficitur tellus. Suspendisse
          semper euismod lorem eget tristique. Sed elementum lobortis arcu vitae
          placerat. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Cras sagittis porttitor turpis et
          posuere. Ut at massa nec arcu rutrum bibendum in at sem. Aliquam
          eleifend faucibus massa non viverra. Vestibulum nec nulla laoreet,
          cursus massa sit amet, consequat nisl. Phasellus massa diam, tincidunt
          elementum magna eget, sodales molestie magna. Etiam risus nisl,
          venenatis efficitur elit ac, vehicula placerat enim. Etiam fringilla
          ultricies est, sit amet aliquet felis egestas et. Proin volutpat odio
          non aliquet sollicitudin. Maecenas commodo massa at lacus lacinia, in
          rhoncus orci scelerisque. Vivamus dapibus consequat quam eget
          malesuada. Maecenas non ipsum elit. Curabitur vitae tellus lectus.
          Suspendisse potenti. Nulla fringilla, ante eget scelerisque fringilla,
          mauris dolor feugiat nunc, eget dapibus eros nisi ut lectus. Integer
          eget ante augue. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Donec ac arcu et velit rhoncus
          luctus tempus vitae diam. Sed ullamcorper, diam sit amet porttitor
          ultricies, est velit ornare est, eu posuere eros ante eu leo. Praesent
          et tincidunt orci. Mauris tempus vulputate magna sit amet accumsan.
          Pellentesque aliquet, nulla non facilisis dignissim, ligula felis
          blandit tortor, laoreet luctus magna urna nec felis. Curabitur
          interdum elit lorem, vitae eleifend nisi molestie eu. Aenean ut tempor
          nisi. Nunc tempus tempor felis, sed condimentum elit iaculis iaculis.
          Nunc sed malesuada enim. Sed lobortis quam et mollis laoreet.
        </Text>
      </Box>

      <Box
        bg="red"
        flexBasis="35%"
        position={["relative", "relative", "relative", "sticky"]}
        top="125px"
        alignSelf="self-start"
      >
        World
      </Box>
    </Container>
  );
}

export default ContentPage;
