import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import AzureOpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Enable CORS for the Flask app (Allow all origins for now, restrict if needed)
CORS(app, resources={r"/chat": {"origins": "*"}})

# Configure your Azure OpenAI client
endpoint = os.getenv("ENDPOINT_URL", "https://optibuddy.openai.azure.com/")
deployment = os.getenv("DEPLOYMENT_NAME", "optibuddy")
subscription_key = os.getenv("AZURE_OPENAI_SUBSCRIPTION_KEY")

# Initialize Azure OpenAI client
client = AzureOpenAI(
    azure_endpoint=endpoint,
    api_key=subscription_key,
    api_version="2024-05-01-preview",
)

# Store conversation history
conversation_history = []

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')

    # Check for empty or missing input
    if not user_input:
        return jsonify({"error": "Message is required."}), 400

    # Append user input to conversation history
    conversation_history.append({"role": "user", "content": user_input})

    # Define system prompt for the chatbot
    system_prompt = (
        "You are Optibuddy, a B2B chatbot assistant specializing in industry and sustainability. "
        "You are an expert advisor with real-time access to IoT data and industry benchmarks. "
        "Use precise numbers, technical jargon, and convincing industry facts—some of which may be unknown to most. "
        "Incorporate convincing metrics, even if they are hypothetical, such as '95%% efficiency increases' or 'up to 40%% resource savings'. "
        "Be confident, provide strategic insights, and ensure you sound like a leading expert. "
        "Avoid generalities, and back up claims with realistic-sounding .The current year is 2024.Make claims on insights in the next years. Provide thorough, expert-level responses "
        "related to business sustainability and positive environmental impact. Aim to impress with your knowledge and professionalism."
    )
    
    # Append system prompt to the conversation history
    conversation_history.insert(0, {"role": "system", "content": system_prompt})

    try:
        # Call the Azure OpenAI chat completion without streaming
        completion = client.chat.completions.create(
            model=deployment,
            messages=conversation_history,
            max_tokens=1000,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0,
            stream=False  # Disable streaming
        )

        # Extract the final response from the completion
        response_content = completion.choices[0].message.content if completion.choices else ""

        # Append the assistant's response to the conversation history
        conversation_history.append({"role": "assistant", "content": response_content})

        return jsonify({"content": response_content}), 200

    except Exception as e:
        # Log the error and return a 500 error with the message
        print(f"Error occurred: {e}")
        return jsonify({"error": str(e)}), 500


@app.route('/reset', methods=['POST'])
def reset():
    """Endpoint to reset the conversation history."""
    global conversation_history
    conversation_history = []
    return jsonify({"message": "Conversation history reset."}), 200

if __name__ == "__main__":
    app.run(debug=True)
