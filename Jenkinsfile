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
        git([url: 'https://github.com/hosnikadour1/backend-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
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
    stage ('run Image'){
      steps{
        sh "docker stop ${imagename} || true && docker rm ${imagename} || true"
        sh "docker run -d \
            --name ${imagename} \
            --publish ${PORT}:3001 \
            ${imagename}:${BUILD_NUMBER}"
      }
    }
    }

}
