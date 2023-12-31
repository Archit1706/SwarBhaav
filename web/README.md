# SwarBhaav - Transforming Calls into Actionable Feedback

<!-- [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/sentiment-analysis-helpdesk/blob/main/LICENSE) -->

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Demo](#demo)
-   [Tech Stack](#tech-stack)
-   [Installation](#installation)
-   [Usage](#usage)
<!-- -   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments) -->

## Introduction

The Sentiment Analysis of Incoming Calls on Helpdesk project is a comprehensive solution tailored for analyzing the sentiment of incoming calls in helpdesks, call centers, and customer services. With the ever-increasing volume of customer interactions in these domains, understanding customer sentiments expressed during phone conversations is crucial for improving customer service delivery.

## Features

-   **Dual Dashboards**: The project offers separate dashboards for rookies and managers, each with distinct access controls.

-   **Chat Analysis**: Analyze chat conversations to provide summaries, sentiment scores, and key positive and negative words. Users can specify date ranges for analysis.

-   **Swar or Audio Sentiment Analysis**: Utilize the Librosa model to classify Swar recordings into one of seven different emotions, enhancing the depth of sentiment analysis.

-   **Reporting**: Generate comprehensive reports and store the results in a MongoDB database for users to review whenever necessary, facilitating data-driven decision-making.

## Demo

For a live demo of the project, visit [Demo Link](https://your-demo-link.com).

## Tech Stack

-   Frontend:
    -   [Next.js](https://nextjs.org/): React framework for building user interfaces.
    -   [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
-   Backend:

    -   [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
    -   [FastAPI](https://fastapi.tiangolo.com/): Modern, fast (high-performance) web framework for building APIs.

-   Sentiment Analysis:

    -   [Librosa](https://librosa.org/): Python library for audio and music analysis.
    -   [Transformers](https://huggingface.co/transformers/): State-of-the-art natural language processing models.

-   Data Sources:
    -   Swar Dataset
    -   WhatsApp Chats

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Archit1706/SwarBhaav.git
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    # Navigate to the frontend directory
    cd frontend
    npm install

    # Navigate to the backend directory
    cd ../backend
    pip install -r requirements.txt
    ```

3. Configuration:

    - Set up environment variables and configuration files as needed for your development and production environments.

4. Start the development server:

    ```bash
    # In the frontend directory
    npm run dev

    # In the backend directory
    uvicorn main:app --reload
    ```

## Usage

-   Access the application by visiting the appropriate URL in your browser.
-   Log in with your credentials to access the dashboard.
-   Explore the chat analysis, Swar sentiment analysis, and reporting features based on your user role.

<!-- ## Contributing

Contributions are welcome! Please follow our [Contributing Guidelines](CONTRIBUTING.md) to get started. -->
<!--
## License

This project is licensed under the [MIT License](LICENSE). -->
