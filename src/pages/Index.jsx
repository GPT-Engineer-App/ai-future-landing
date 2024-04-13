import React from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, keyframes } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Index = () => {
  const bgGradient = useColorModeValue("linear(to-r, #4299e1, #3182ce, #2b6cb0, #2c5282, #2a4365)", "linear(to-r, #0987A0, #2C3E50)");

  return (
    <Box minH="100vh" bgGradient={bgGradient} animation={`${gradientAnimation} 15s ease infinite`} backgroundSize="400% 400%">
      <VStack spacing={8} align="center" justify="center" minH="100vh" px={4}>
        <Heading as="h1" size="3xl" textAlign="center" color="white" textShadow="0 0 20px rgba(0,0,0,0.3)">
          Welcome to AI Chatbot
        </Heading>
        <Text fontSize="xl" color="white" maxW="600px" textAlign="center">
          Experience the future of conversational AI. Our cutting-edge chatbot is powered by advanced machine learning to provide intelligent and engaging interactions.
        </Text>
        <Button size="lg" colorScheme="teal" rightIcon={<FaRobot />} _hover={{ transform: "scale(1.05)" }} transition="all 0.3s">
          Start Chatting
        </Button>

        <HStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1633957897986-70e83293f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYWklMjByb2JvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjk4NTU3Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Robot" w="300px" h="300px" objectFit="cover" rounded="full" shadow="lg" transition="transform 0.5s" _hover={{ transform: "scale(1.05) rotate(5deg)" }} />
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYWklMjBjaGF0Ym90JTIwaW50ZXJmYWNlfGVufDB8fHx8MTcxMjk4NTU3Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Chatbot Interface" w="500px" h="300px" objectFit="cover" rounded="lg" shadow="lg" transition="transform 0.5s" _hover={{ transform: "scale(1.05)" }} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
