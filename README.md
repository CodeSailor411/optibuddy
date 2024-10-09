# Optibuddy

## Project Overview
Optibuddy is an AI-driven sustainability advisor that optimizes industrial performance by analyzing IoT and environmental data using advanced language models (LLMs). The project focuses on improving energy efficiency, resource use, and emissions reduction in manufacturing industries.

## Project Structure
- **Frontend**: Built with ReactJS, provides the user interface for interacting with Optibuddy.
- **Backend**: Provides the API to connect the frontend with the LLM and other data sources.
- **LLM**: The core AI system that processes industrial data and provides optimization advice.
- **IoT**: (Optional) Gathers real-time data from industrial processes.

## Installation and Setup
To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/username/Optibuddy.git
    cd Optibuddy
    ```

2. **Frontend Setup**:
    Navigate to the frontend folder and install dependencies:
    ```bash
    cd frontend
    npm install
    npm start
    ```

3. **Backend Setup**:
    Navigate to the backend folder and install dependencies:
    ```bash
    cd backend
    npm install
    npm start
    ```

4. **LLM Setup**:
    Navigate to the LLM folder and install dependencies. Fine-tune the model using available industrial datasets, then deploy it:
    ```bash
    cd llm
    pip install -r requirements.txt
    python finetune_llm.py
    ```

## Contributing
1. Create a branch for your feature.
2. Commit and push your code.
3. Open a Pull Request for review.

## License
MIT License.
