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
                    def dockerImage = docker.build("hosnikadour/app-nodejs-express .")
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
//                     sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    sh 'docker pull hosnikadour/app-nodejs-express:master'
                    sh 'docker stop backend-app'
                    sh 'docker rm backend-app'
                    sh 'docker rmi hosnikadour/app-nodejs-express'
                    sh 'docker tag hosnikadour/app-nodejs-express:master hosnikadour/app-nodejs-express:current'
                    sh 'docker run -d --name backend-react -p 80:3000 hosnikadour/app-nodejs-express'
                }
            }
        }
        }
    


         
    



         
 
