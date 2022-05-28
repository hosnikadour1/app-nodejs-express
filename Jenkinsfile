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
    stages {
        stage('Docker Login') {
            steps {
                // Add --password-stdin to run docker login command non-interactively
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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

   
  
