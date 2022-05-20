pipeline {
    agent {
        docker {
            image 'node:16' 
            args '-p 3001:3001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh """
                npm install
                docker build -t hosnikadour/backend-express-nodesjs .
                docker run -p 3001:3001 hosnikadour/backend-express-nodesjs

                
                """
            }
        }
    }
}