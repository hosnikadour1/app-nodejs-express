pipeline {
  environment {
    imagename = "hosnikadour/backend-nodejs-express"
    registryCredential = 'dockerhub-nodejs'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/app-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }
    stage('Build') {
		sh 'npm install'
    }
        stage('test'){
             
             sh 'npm test'
        }
	stage('Building image') {
        docker.withRegistry( 'https://' + registry, registryCredential ) {
		    imagename = registry + ":$BUILD_NUMBER"
			dockerImage = docker.build imagename
			dockerImage.push()
        }
	}
	stage('Registring image') {
        docker.withRegistry( 'https://' + registry, registryCredential ) {
    		dockerImage.push 'latest2'
        }
	}
  
  stage('Removing image') {
        sh "docker rmi $registry:$BUILD_NUMBER"
        sh "docker rmi $registry:latest"
    }
  }