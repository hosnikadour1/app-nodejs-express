pipeline {
  environment {
    imagename = "hosnikadour/backend-express-nodes.js"
    registryCredential = 'dockerhub'
    dockerImage = ''
    dockerContainer = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/backend-express-node-js.git', branch: 'main', credentialsId: 'github'])
 
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
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
             dockerContainer.run ("--name run -BUILD_NUMBER -3001:3001")
             
          }
        }
      }
    }
    
  }
}