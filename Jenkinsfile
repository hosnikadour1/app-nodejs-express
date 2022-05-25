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
     stage('test') {
     dockerImage = docker.image('node:16')
     dockerImage.pull()
     dockerImage.inside {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
   stage('test with a DB') {
      mysql = docker.imagename('mysql').run("-e MYSQL_ALLOW_EMPTY_PASSWORD=yes") 
     dockerImage = docker.imagename('node:16')
     dockerImage.pull()
     dockerImage.inside("--link ${mysql.id}:mysql") { // using linking, mysql will be available at host: mysql, port: 3306
          sh 'npm install --only=dev' 
          sh 'npm test'                     
     }                                   
     mysql.stop()
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
