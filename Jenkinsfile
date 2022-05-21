pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {

		stage('Build') {

			steps {
                         '''
                         npm install
				docker build -t docker build -t hosnikadour/backend-express-nodes.js:latest .
                        docker run -d --name backend-app   -p 3003:3001 hosnikadour/backend-express-node.js:latest
                        curl localhost
                        '''
                        
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