node {
   def commit_id
   stages{
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub-nodejs') {
       def app = docker.build("hosnikadour/backend-nodejs-express:${commit_id}", '.').push()
     }
   }
   }
}