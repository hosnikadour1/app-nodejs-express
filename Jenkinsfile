pipeline {
  environment {
    AWS_ECR_LOGIN=true
    imagename = "hosnikadour/backend-nodejs-express"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/app-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }
   
   
	stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename 
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("{env.$BUILD_NUMBER}")
             dockerImage.push('latest')  
            
        }
        }
        }
        }
     
  }
}

