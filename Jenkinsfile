pipeline {
  environment {
    imagename = "hosnikadour/backend-express-nodes.js"
    registryCredential = 'dockerhub'
    dockerImage = ''
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
          }
        }
      }
    }
    stage("run") {
      steps {
        sh " docker run --rm -p 3001:3001 hosnikadour/backend-express-nodes.js:latest "
      }
  }
}
}