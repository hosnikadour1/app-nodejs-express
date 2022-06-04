pipeline {
    agent any
    stages {
        stage('Tests') {
            steps {
//                 script {
//                    docker.image('node:10-stretch').inside { c ->
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
                    def dockerImage = docker.build("hosnikadour/app-nodejs-express:master")
                    docker.withRegistry('', 'dockerhub-devops') {
                        dockerImage.push('master')
                    }
                }
            }
        }
        stage('Deploy to remote docker host') {
            environment {
                DOCKER_HOST_CREDENTIALS = credentials('dockerhub-devops')
            }
            steps {
                script {
//                     sh 'docker login -u $DOCKER_HOST_CREDENTIALS_USR -p $DOCKER_HOST_CREDENTIALS_PSW 127.0.0.1:2375'
                    sh 'docker pull :master'
                    sh 'docker stop backend-app'
                    sh 'docker rm backend-app'
                    sh 'docker rmi hosnikadour/app-nodejs-express'
                    sh 'docker tag hosnikadour/app-nodejs-express:master hosnikadour/app-nodejs-express:current'
                    sh 'docker run -d --name backend-react -p 80:3000 hosnikadour/app-nodejs-express:current'
                }
            }
        }
    }
}

         
    



         
 
