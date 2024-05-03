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
                        reports()
                    }
                    catch (e) {
                        reports()
                        throw e
                    }
                }
            }
        }
    }
}

def reports() {
    archiveArtifacts artifacts: 'Reports/**', allowEmptyArchive: true
    publishHTML(target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: true,
            keepAll              : true,
            reportDir            : "Reports/CucumberReports",
            reportFiles          : "index.html",
            reportName           : "Tests",
            reportTitles         : "Tests"
    ])
}
