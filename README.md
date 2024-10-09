# **OptiBuddy**

## Overview

**Optibuddy** is an AI-powered solution designed to optimize industrial performance through real-time data analysis and recommendations. Leveraging a fine-tuned language model (LLM) and IoT data, Optibuddy helps industries reduce resource waste, improve energy efficiency, and make informed decisions to boost sustainability.

---

## **Project Structure**

The project is divided into three main components:

1. **Frontend**: Developed using ReactJS to provide a user-friendly interface.
2. **Backend**: A server that handles API requests and communicates with the LLM.
3. **LLM**: A fine-tuned language model that processes data inputs and generates optimization suggestions.

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

    The application will be accessible at `http://localhost:3000`.

---

## **Backend Setup**

1. **Navigate to the Backend Directory**:
    ```bash
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Backend Server**:
    ```bash
    npm start
    ```

    The backend will run at `http://localhost:5000`.

4. **Testing API Endpoints**:
    Use Postman or curl to ensure API endpoints for the LLM are correctly set up.

---

## **LLM Setup**

We use a **pretrained language model** fine-tuned on datasets related to industrial processes and sustainability. The LLM generates insights and optimizes industrial performance.

### **Testing the LLM**

1. **Navigate to the LLM Directory**:
    ```bash
    cd llm
    ```

2. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Fine-Tune the Model**:
    - Fine-tune the model on your dataset using Hugging Face or other frameworks.
    - Save the model in a designated directory.

4. **Run Inference**:
    - Load the fine-tuned model and provide test inputs (e.g., industrial queries).
    - Example Input: 
        ```bash
        "How can we improve energy efficiency in our factory?"
        ```
    - The LLM will generate recommendations based on the input.

5. **Integrating with Backend**:
    - The backend communicates with the LLM through API endpoints.
    - Ensure smooth data flow between the frontend, backend, and LLM for real-time recommendations.

---



## **How to Contribute**

1. Fork the repository and clone your local copy.
2. Work on your assigned branch.
3. Commit and push your changes.
4. Open a pull request for review.

---

## **License**

This project is licensed under the MIT License.
