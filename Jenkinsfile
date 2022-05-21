def pipelineContext = [:]
node {

   def registryProjet='https://hub.docker.com/repository/docker/hosnikadour/backend-express-nodesjs'
	 def IMAGE="${registryProjet}:version-${env.BUILD_ID}"

	 echo "IMAGE = $IMAGE"

    stage('Clone') {
    			checkout scm
		}

		def img = stage('Build') {
					docker.build("$IMAGE",  '.')
		}
	
		stage('Run') {
					img.withRun("--name run-$BUILD_ID -p 3001:3001") { c ->
						sh 'curl localhost'
          }					
		} 
          
       stage('Push image') {
    docker.withRegistry('https://hub.docker.com/', 'dockerhub') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }