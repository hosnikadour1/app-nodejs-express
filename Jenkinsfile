pipeline {
  environment {
    registry = "hosnikadour/backend-nodejs-express"
    registryCredential = 'dockerhub-nodejs'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/hosnikadour1/backend-nodejs-express.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Test image docker' ) {
                agent {
                docker { image hosnikadour/backend-nodejs-express:$BUILD_NUMBER' }
            }
            steps {
                sh 'image docker --version'
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
  