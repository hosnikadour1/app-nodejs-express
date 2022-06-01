pipeline {
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-devops')
        
	}
    stages {
         stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/app-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }

         stage('Build docker image') {
            steps {  
                sh 'docker build -t hosnikadour/app-nodejs-express:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push hosnikadour/app-nodejs-express:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}  
     
    
         
 
