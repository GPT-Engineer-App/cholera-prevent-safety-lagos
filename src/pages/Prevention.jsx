import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Prevention = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Prevention</Heading>
        <Text fontSize="md">
          Preventing cholera involves proper sanitation, clean water, and good hygiene practices. Here are some key measures:
        </Text>
        <Text fontSize="md">
          1. Drink and use safe water.
        </Text>
        <Text fontSize="md">
          2. Wash your hands often with soap and safe water.
        </Text>
        <Text fontSize="md">
          3. Use latrines or bury your feces; do not defecate in any body of water.
        </Text>
        <Text fontSize="md">
          4. Cook food well (especially seafood), keep it covered, eat it hot, and peel fruits and vegetables.
        </Text>
        <Text fontSize="md">
          5. Clean up safely in the kitchen and in places where the family bathes and washes clothes.
        </Text>
      </VStack>
    </Container>
  );
};

export default Prevention;