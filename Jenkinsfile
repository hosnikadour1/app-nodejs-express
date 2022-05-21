pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {

		stage('Build') {

			steps {
                        sh 'npm install'
				sh 'docker build -t docker build -t hosnikadour/backend-express-nodes.js:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push  hosnikadour/backend-express-nodes.js:latest .'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}