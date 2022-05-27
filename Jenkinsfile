node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myTestContainer = docker.image('node:16')
     myTestContainer.pull()
     myTestContainer.inside {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
                                        
   stage('docker build/push') {            
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("hosnikadour/backend-nodejs-express:${commit_id}", '.').push()
     }                                     
   }                                       
}  