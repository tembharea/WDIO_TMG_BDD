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
                        sh 'ls -l'
                        archiveArtifacts artifacts: 'Reports/**', allowEmptyArchive: true

                            publishHTML(target: [
                                    allowMissing         : false,
                                    alwaysLinkToLastBuild: true,
                                    keepAll              : true,
                                    reportDir            : "Reports",
                                    reportFiles          : "CucmumberReports/index.html",
                                    reportName           : "Tests",
                                    reportTitles         : "Tests"
                            ])
                            publishReports("Reports/CucumberReports/index.html", "More Tests")
                        }
                      throw error
                    }
                }
            }
        }
    }
