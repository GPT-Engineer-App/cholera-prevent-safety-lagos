import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Cholera Education</Heading>
        <Text fontSize="xl">Learn about cholera, how to prevent it, and safety tips to protect yourself and your family.</Text>
      </VStack>
    </Container>
  );
};

export default Index;