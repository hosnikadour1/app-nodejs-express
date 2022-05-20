pipeline {
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
    stages {
        stage('Docker Login') {
            steps {
                // Add --password-stdin to run docker login command non-interactively
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build & push Dockerfile') {
            steps {
                sh """
                   npm install
                   docker build -t hosnikadour/backend-express-nodesjs .
                   docker run -d --name backend-app   -p 3003:3001 hosnikadour/backend-express-nodejs
                   docker push hosnikadour/backend-express-nodejs
                """
            }
        }
    }