import React, { useState, useEffect } from 'react';
import { Box, Flex, Input, Button, Text, VStack, HStack, IconButton, Spinner } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [botTyping, setBotTyping] = useState(false);

  const simulatedBotResponse = "Hello! How can I assist you today?";

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
      setInput('');
      setIsTyping(true);
    }
  };

  useEffect(() => {
    if (isTyping) {
      setBotTyping(true);
      let charIndex = 0;
      let botResponse = '';

      const typingInterval = setInterval(() => {
        if (charIndex < simulatedBotResponse.length) {
          botResponse += simulatedBotResponse[charIndex];
          charIndex++;
        } else {
          setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
          setIsTyping(false);
          setBotTyping(false);
          clearInterval(typingInterval);
        }
      }, 50);
    }
  }, [isTyping]);

  return (
    <Flex direction="column" h="100%" p={4}>
      {/* Chat Container with Static Dark Gradient Background */}
      <Box
        flex="1"
        bgGradient="linear(to-r, #1a1d3e, #2c2f54, #3e4159, #1a1d3e)"
        borderRadius="lg"
        boxShadow="2xl"
        p={4}
        overflowY="auto"
      >
        <VStack spacing={4} align="stretch">
          {messages.length === 0 ? (
            <Text color="white" textAlign="center" fontSize="lg">
              Chat with your company...
            </Text>
          ) : (
            messages.map((msg, index) => (
              <HStack
                key={index}
                justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                w="100%"
              >
                <Box
                  bg={msg.sender === 'user' ? '#005f73' : '#002d30'} // Darker colors for messages
                  color="white"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  maxW="75%"
                  transition="background-color 0.3s"
                  _hover={{ bg: msg.sender === 'user' ? '#009688' : '#004d4f' }}
                >
                  {msg.text}
                </Box>
              </HStack>
            ))
          )}

          {/* Display bot typing */}
          {botTyping && (
            <HStack justify="flex-start" w="100%">
              <Box bg="#002d30" color="white" px={4} py={3} borderRadius="lg" maxW="75%">
                <Text>...</Text>
              </Box>
              <Spinner size="sm" color="white" />
            </HStack>
          )}
        </VStack>
      </Box>

      {/* Input Area */}
      <HStack mt={4}>
        <Input
          placeholder="Type your message..."
          bg="#004d4f"
          color="white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          borderRadius="md"
          _placeholder={{ color: 'gray.400' }}
          _focus={{ borderColor: '#009688' }}
        />
        <IconButton
          icon={<FiSend />}
          colorScheme="teal"
          aria-label="Send message"
          onClick={handleSendMessage}
        />
      </HStack>
    </Flex>
  );
};

export default Chat;
