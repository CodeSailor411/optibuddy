from langchain_huggingface import ChatHuggingFace, HuggingFacePipeline
from transformers import AutoTokenizer, pipeline

# Authenticate with Hugging Face token
from huggingface_hub import login

# Replace 'your_hugging_face_token' with your actual token
login(token='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')

# Load the model and tokenizer
model_id = "meta-llama/Llama-3.2-1B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)

# Create a HuggingFace pipeline for text generation
llm = HuggingFacePipeline.from_model_id(
    model_id=model_id,
    task="text-generation",
    pipeline_kwargs=dict(
        max_new_tokens=512,
        do_sample=False,
        repetition_penalty=1.03,
    ),
)

# Wrap it in a ChatHuggingFace instance
chat_model = ChatHuggingFace(llm=llm)

# Function to generate a response
def generate_response(user_input):
    """Generate a response from the LLM based on user input."""
    # Generate the response using the chat model
    response = chat_model(user_input)
    return response
