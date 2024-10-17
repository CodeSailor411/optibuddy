# **OptiBuddy**

## Overview

**OptiBuddy** is an AI-powered solution designed to optimize industrial performance through real-time IoT data analysis and AI-driven recommendations. By leveraging the advanced **LLaMA 3.2 model** from Meta and Microsoft Azure for **cloud computing**, fine-tuned for industrial processes and sustainability, OptiBuddy helps industries enhance operational efficiency, reduce energy consumption, and minimize resource waste, driving sustainable business practices.

The solution integrates seamlessly with IoT sensors and business systems to deliver insights, offering real-time decision support for maximizing industrial output while adhering to environmental sustainability goals.

---

## **Project Structure**

The project is composed of three core components:

1. **Frontend**: A ReactJS-based web interface offering a user-friendly dashboard for interacting with OptiBuddy.
2. **Backend**: A Flask-based server that handles API requests, manages data processing, and interacts with the AI model.
3. **LLM**: A fine-tuned large language model (LLaMA 3.2) providing intelligent responses and optimization recommendations by analyzing IoT data.

---

## **Frontend Setup (ReactJS)**

1. **Navigate to the Frontend Directory**:
    ```bash
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Frontend Server**:
    ```bash
    npm start
    ```

    The frontend application will be accessible at `http://localhost:3000`.

---

## **Backend Setup (Flask)**

1. **Navigate to the Backend Directory**:
    ```bash
    cd backend
    ```

2. **Install Dependencies**:
    Ensure you have Python and pip installed, then run:
    ```bash
    pip install -r requirements.txt
    ```

3. **Start the Backend Server**:
    ```bash
    flask run
    ```

    The backend will be running at `http://localhost:5000`.

4. **Testing API Endpoints**:
    Use Postman, curl, or any HTTP client to test the endpoints, ensuring proper communication with the LLM and data flow. Example:
    ```bash
    curl -X POST http://localhost:5000/chat -d '{"message": "How can we improve our company sustainability to fit the latest trends in terms of reducing greenhouse gases?"}'
    ```

---

## **LLM Setup (Just for testing)**

### **Model Details**:
OptiBuddy uses the **LLaMA 3.2** language model, fine-tuned on industrial and sustainability datasets to provide actionable insights based on the latest company and industry data. The model is deployed on **Azure OpenAI** infrastructure for scalability and reliability in cloud environments.
**You dont need to to follow the next steps if you just need to try the project.Running frontend and backend is sufficient.

### **Steps to Set Up the LLM**:

1. **Navigate to the LLM Directory**:
    ```bash
    cd llm
    ```

2. **Install LLM Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Fine-Tune the Model**:
    - Use your industrial dataset for fine-tuning the model. Fine-tuning can be done using frameworks like Hugging Face Transformers or directly on Azure ML.
    - Example of fine-tuning via Hugging Face:
    ```python
    from transformers import LlamaForCausalLM, Trainer, TrainingArguments

    model = LlamaForCausalLM.from_pretrained('meta/llama-3.2')
    training_args = TrainingArguments(
        output_dir='./results',
        per_device_train_batch_size=8,
        num_train_epochs=3,
        logging_dir='./logs',
    )
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=your_dataset,
    )
    trainer.train()
    ```

4. **Run Inference**:
    Once fine-tuning is complete, load the model to perform inference on test queries:
    ```bash
    python run_inference.py
    ```

    - **Example Input**:
        ```bash
        "How can we reduce energy consumption in our manufacturing process?"
        ```

    - The model will generate optimization recommendations based on real-time IoT data and fine-tuned insights.

5. **Integrating with Backend**:
    - The backend communicates with the LLM via Azure OpenAI's cloud API.
    - Ensure the LLM is accessible through the backend API endpoints for real-time interaction.

---

## **Azure Deployment**

OptiBuddy’s LLM is fine-tuned and hosted on **Azure OpenAI** for cloud-based access. Azure allows for scalability and ensures the model remains up-to-date with the latest industry and company-specific data.

### Key Azure Components:

- **Azure OpenAI Service**: Hosts the LLaMA model for scalable and reliable API access.
- **Azure IoT Hub**: Integrates with IoT devices to continuously feed real-time data for analysis by OptiBuddy.
- **Azure Machine Learning**: Used for fine-tuning and model training processes, allowing seamless integration of industry-specific data.

Ensure that your Azure OpenAI subscription and deployments are correctly set up by configuring the necessary API keys and environment variables in the `.env` file as shown in the backend setup section.

---

## **How to Contribute**

We welcome contributions to improve OptiBuddy. To get started:

1. **Fork the Repository**: Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/optibuddy.git
    ```

2. **Create a New Branch**: Work on a new branch for your changes.
    ```bash
    git checkout -b feature-branch
    ```

3. **Make Your Changes**: Implement your changes or improvements.

4. **Commit and Push**: Commit your changes to the branch and push them to GitHub.
    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin feature-branch
    ```

5. **Open a Pull Request**: Submit your pull request for review by the team.

---

## **License**

OptiBuddy is licensed under the **MIT License**. It is free for open-source use and development, with cloud deployment provided by Azure to facilitate seamless integration and scaling in industrial applications.
