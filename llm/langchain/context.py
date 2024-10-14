from langchain.memory import ConversationBufferMemory
import json
import os

class ContextManager:
    def __init__(self, memory_file='context_memory.json'):
        self.memory = ConversationBufferMemory()
        self.memory_file = memory_file
        self.load_context_from_file()

    def add_to_context(self, user_input, llm_response):
        """Add new interaction to the context"""
        self.memory.chat_memory.add_user_message(user_input)
        self.memory.chat_memory.add_ai_message(llm_response)
        self.save_context_to_file()

    def get_context(self):
        """Return the conversation history"""
        return self.memory.load_memory_variables({})['history']

    def get_recent_context(self, n=5):
        """Return the last N interactions from the conversation history"""
        history = self.get_context()
        return history[-n:]

    def clear_context(self):
        """Clear the current conversation history"""
        self.memory.clear()
        self.save_context_to_file()

    def save_context_to_file(self):
        """Save the current conversation history to a file"""
        try:
            history = self.get_context()
            with open(self.memory_file, 'w') as f:
                json.dump(history, f)
        except Exception as e:
            print(f"Error saving context to file: {e}")

    def load_context_from_file(self):
        """Load the conversation history from a file"""
        if os.path.exists(self.memory_file):
            try:
                with open(self.memory_file, 'r') as f:
                    history = json.load(f)
                    for message in history:
                        if message['type'] == 'user':
                            self.memory.chat_memory.add_user_message(message['data'])
                        elif message['type'] == 'ai':
                            self.memory.chat_memory.add_ai_message(message['data'])
            except Exception as e:
                print(f"Error loading context from file: {e}")

