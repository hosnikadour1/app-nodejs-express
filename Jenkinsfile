
pipeline {
    agent any
    stages {
        stage('Tests') {
            steps {
//                 script {
//                    docker.image('node:16').inside { c ->
                        echo 'Building..'
                        sh 'npm install'
                        echo 'Testing..'
                        sh 'npm test'
//                         sh "docker logs ${c.id}"
//                    }
//                 }
            }
        }
        
        stage('Build and push docker image') {
            steps {
                script {
                    def dockerImage = docker.build(" docker build -t hosnikadour/backend-express-nodes.js .")
                    docker.withRegistry('', 'dockerhub') {
                        dockerImage.push('main')
                    }
                }
            }
        }
        stage('Deploy to remote docker host') {
            environment {
                DOCKER_HOST_CREDENTIALS = credentials('dockerhub')
            }
            steps {
                script {
//                     sh 'docker login -u $DOCKER_HOST_CREDENTIALS_USR -p $DOCKER_HOST_CREDENTIALS_PSW 127.0.0.1:2375'
                    sh 'docker pull hosnikadour/backend-express-nodes.js:latest'
                    sh 'docker stop backend-express-node.js'
                    sh 'docker rm backend-express-node.js'
                    sh 'docker rmi hosnikadour/backend-express-node.js:back'
                    sh 'docker tag hosnikadour/backend-express-node.js:latest hosnikadour/backend-express-node.js:back '
                    sh 'docker run -d --name backend-app  -p 3001:3001 hosnikadour/backend-express-node.js:back'
                }
            }
        }
    }
}
}
}