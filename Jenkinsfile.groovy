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
                    sh 'npx wdio'

                }
                always {
                    script {
                        archiveArtifacts artifacts: 'Reports/*', allowEmptyArchive: true
                    }
                }
            }
        }
    }
}
