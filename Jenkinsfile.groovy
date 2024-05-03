import org.apache.commons.lang3.StringUtils
import groovy.lang.Binding
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
                post {
                    always {
                        script {
                            sh 'ls -l'
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
                        }
                    }
                }
            }
        }
    }
