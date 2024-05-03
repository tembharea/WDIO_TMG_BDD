pipeline {
    agent { label 'UseGCPPreprodClusterWeb' }
    tools {

        nodejs 'Node-20.9.0'
    }
    stages {
        stage("Test") {
            steps {
                script {
                    sh 'npm i'
                    try {
                        sh 'npx wdio'
                    }
                    catch (error){
                        archiveArtifacts artifacts: './Reports/*', allowEmptyArchive: true
                        throw error
                    }
                }
            }
        }
    }
}
