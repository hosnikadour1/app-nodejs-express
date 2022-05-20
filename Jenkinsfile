node {    
      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }    
      environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}
    stages {
        stage('Docker Login') {
            steps {
                // Add --password-stdin to run docker login command non-interactively
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        } 
      stage('Build image') {         
       
            app = docker.build("hosnikadour/backend-express-nodesjs")    
       }     
          
       stage('Push image') {
    docker.withRegistry('https://hub.docker.com/', 'git') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }