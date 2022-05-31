pipeline {
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-devops')
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
                    docker build -t hosnikadour/app-nodejs-express .
                    docker push hosnikadour/app-nodejs-express
                    
                    """
            }
        }
       stage ('Remove Unused docker image') {
            steps {
              sh "docker rmi hosnikadour/app-nodejs-express"

       }
       }
           stage ('run container') {
             steps {

               sh "docker run -p 4000:4000 hosnikadour/app-nodejs-express"
             }
           }
    }
}

