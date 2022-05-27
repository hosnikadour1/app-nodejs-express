pipeline {
  environment {
    imagename = "hosnikadour/backend-nodejs-express"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/backend-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }

      
    stage('Building image') {
      steps{
        script {
         sh ' dockerImage = docker.build imagename'
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          sh '''
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest') 
             ''' 
            
        }
        }
        }
        }
  
  
    }
}