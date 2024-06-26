import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">About Cholera</Heading>
        <Text fontSize="md">
          Cholera is an infectious disease that causes severe watery diarrhea, which can lead to dehydration and even death if untreated. It is caused by eating food or drinking water contaminated with a bacterium called Vibrio cholerae.
        </Text>
        <Text fontSize="md">
          Cholera is most common in places with poor sanitation, crowding, war, and famine. Common locations include parts of Africa, South Asia, and Latin America.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;