import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Safety = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Safety Tips</Heading>
        <Text fontSize="md">
          Here are some safety tips to protect yourself and your family from cholera:
        </Text>
        <Text fontSize="md">
          1. Always wash your hands with soap and water before eating or preparing food, and after using the toilet.
        </Text>
        <Text fontSize="md">
          2. Drink only water that has been boiled or treated with chlorine, iodine, or other disinfectants.
        </Text>
        <Text fontSize="md">
          3. Avoid raw foods other than fruits and vegetables you have peeled yourself.
        </Text>
        <Text fontSize="md">
          4. Avoid ice unless you are sure it is made from safe water.
        </Text>
        <Text fontSize="md">
          5. Clean and disinfect surfaces and objects that may be contaminated with cholera bacteria.
        </Text>
      </VStack>
    </Container>
  );
};

export default Safety;