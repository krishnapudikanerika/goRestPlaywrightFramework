pipeline {

    agent any

    options {

        timestamps()

    }

    stages {

        stage('Checkout Code') {

            steps {

                checkout scm

            }

        }

        stage('Node Version') {

            steps {

                bat 'node -v'
                bat 'npm -v'

            }

        }

        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }

        stage('Install Playwright Browsers') {

            steps {

                bat 'npx playwright install'

            }

        }

        stage('Execute Framework') {

            steps {

                bat 'npm run all'

            }

        }

    }

    post {

        always {

            publishHTML(
                [
                    allowMissing         : true,
                    alwaysLinkToLastBuild: true,
                    keepAll              : true,
                    reportDir            : 'playwright-report',
                    reportFiles          : 'index.html',
                    reportName           : 'Playwright Automation Report'
                ]
            )

            archiveArtifacts(
                artifacts: 'playwright-report/**/*',
                allowEmptyArchive: true
            )

            emailext(

                mimeType: 'text/html',

                subject:
                "[GoRest Framework] Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",

                to:
                "krishna.pudi@kanerika.com",

                body: """

                <html>

                <body style="font-family:Calibri,Arial,sans-serif;">

                <h2 style="color:#0078D4;">
                GoRest Automation Execution Report
                </h2>

                <table border="1"
                       cellpadding="8"
                       cellspacing="0"
                       style="border-collapse:collapse;">

                    <tr>
                        <td><b>Build Status</b></td>
                        <td>${currentBuild.currentResult}</td>
                    </tr>

                    <tr>
                        <td><b>Job Name</b></td>
                        <td>${env.JOB_NAME}</td>
                    </tr>

                    <tr>
                        <td><b>Build Number</b></td>
                        <td>${env.BUILD_NUMBER}</td>
                    </tr>

                </table>

                <br/>

                <h3>Executed Test Suites</h3>

                <ul>
                    <li>API Tests</li>
                    <li>UI Tests</li>
                    <li>Integration Tests</li>
                </ul>

                <br/>

                <h3>Useful Links</h3>

                <ul>

                    <li>
                        Build URL :
                        ${env.BUILD_URL}
                        ${env.BUILD_URL}
                        </a>
                    </li>

                    <li>
                        Console Log :
                        ${env.BUILD_URL}console
                        ${env.BUILD_URL}console
                        </a>
                    </li>

                    <li>
                        Playwright Report :
                        <aenv.BUILD_URL}Playwright_Automation_Report/
                        Open Playwright Report
                        </a>
                    </li>

                </ul>

                <br/>

                Regards,
                <br/>
                <b>Jenkins CI/CD Pipeline</b>

                </body>

                </html>

                """

            )

        }

    }

}