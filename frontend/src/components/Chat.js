import React, { useState } from 'react';
import { Box, Flex, Input, Text, VStack, HStack, IconButton, Spinner } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const [currentBotMessage, setCurrentBotMessage] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setBotTyping(true);
      setCurrentBotMessage(''); // Reset current bot message for new response

      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        if (response.ok) {
          const data = await response.json(); // Expecting a single JSON response
          streamBotResponse(data.content); // Stream the response
        } else {
          console.error('Error sending message:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to backend:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage(); // Send message on Enter key press
    }
  };

  const streamBotResponse = (responseText) => {
    const chars = responseText.split('');
    setCurrentBotMessage(''); // Reset current bot message
    let index = 0;

    const interval = setInterval(() => {
      if (index < chars.length) {
        setCurrentBotMessage((prev) => prev + chars[index]); // Add one character at a time
        index++;
      } else {
        clearInterval(interval); // Clear the interval once all characters are displayed
        setBotTyping(false); // Stop bot typing after the message is fully displayed

        // Add the final bot message to the messages array
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: responseText, sender: 'bot' },
        ]);
        setCurrentBotMessage(''); // Clear the current message display
      }
    }, 30); // Increased speed of character display (reduced to 30ms)
  };

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

          {/* Display current bot message */}
          {currentBotMessage && (
            <HStack justify="flex-start" w="100%">
              <Box bg="#002d30" color="white" px={4} py={3} borderRadius="lg" maxW="75%">
                <Text>{currentBotMessage}</Text>
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
          onKeyPress={handleKeyPress} // Add key press event
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
