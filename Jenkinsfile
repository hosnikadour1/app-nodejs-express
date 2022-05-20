node {    
      def app     
      stage('Clone repository') {               
             
            checkout scm    
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