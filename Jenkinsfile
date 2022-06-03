pipeline {
    agent any

    environment {
         imagename = "hosnikadour/app-nodejs-express"
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-devops')
        dockerImage = ''
        
	}
    stages {
         stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/app-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }

        
       stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename + ':1'
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
             
            
        }
        }
        }
        }
        stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename
 
      }
    }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
         
    



         
 
