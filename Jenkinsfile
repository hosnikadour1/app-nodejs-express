pipeline {
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
    stages {
      stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/backend-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }
        stage('Docker Login') {
            steps {
                // Add --password-stdin to run docker login command non-interactively
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build & push Dockerfile') {
            steps {
                sh """
                docker build -t hosnikadour/backend-nodejs-express .
                docker push hosnikadour/backend-nodejs-express
                """
            }
        }
        stage ('run dockerfile'){
          steps{
            sh "docker run -d --name nodejs -p 3001:3001 hosnikadour/backend-nodejs-express "
          }

        }
    }
}
