pipeline {
    agent any

    environment {
         imagename = "hosnikadour/app-nodejs-express"
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-devops')
        dockerImage = ''
        
	}
    stages {
         stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/hosnikadour1/app-nodejs-express.git', branch: 'main', credentialsId: 'github'])
 
      }
    }

        
     stage('Building our image') {
steps{
script {
dockerImage = docker.build registry + ":$BUILD_NUMBER"
}
}
}
stage('Deploy our image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}
stage('Cleaning up') {
steps{
sh "docker rmi $registry:$BUILD_NUMBER"
}
}
}
post {
        always {
            sh 'docker logout'
        }
    }

}

         
    



         
 
