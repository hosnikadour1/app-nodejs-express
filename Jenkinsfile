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
 tage('Test') {
        nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm install --only=dev'
        sh 'npm test'
        }
    }

    stage('Send Finished Event Back to Keptn') {
        // Send Finished Event back
        def keptnContext = keptn.sendFinishedEvent eventType: "test", keptnContext: "${params.shkeptncontext}", triggeredId: "${params.triggeredid}", result:"pass", status:"succeeded", message:"jenkins tests succeeded"
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
  
    }
}