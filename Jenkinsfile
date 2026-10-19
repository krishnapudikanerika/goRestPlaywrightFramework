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

        stage('Generate Statistics') {

            steps {

                powershell '.\\scripts\\GetTestStatistics.ps1'

                bat 'type total.txt'
                bat 'type passed.txt'
                bat 'type failed.txt'
                bat 'type percentage.txt'

            }

        }

    }

    post {

        always {

            script {

                env.TOTAL =
                    fileExists('total.txt')
                        ? readFile('total.txt').trim()
                        : '0'

                env.PASSED =
                    fileExists('passed.txt')
                        ? readFile('passed.txt').trim()
                        : '0'

                env.FAILED =
                    fileExists('failed.txt')
                        ? readFile('failed.txt').trim()
                        : '0'

                env.PERCENTAGE =
                    fileExists('percentage.txt')
                        ? readFile('percentage.txt').trim()
                        : '0'

                echo "TOTAL=${env.TOTAL}"
                echo "PASSED=${env.PASSED}"
                echo "FAILED=${env.FAILED}"
                echo "PERCENTAGE=${env.PERCENTAGE}"

            }

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

                <h3>
                Execution Summary
                </h3>

                <table border="1"
                       cellpadding="8"
                       cellspacing="0"
                       style="border-collapse:collapse;">

                    <tr>
                        <td><b>Total Tests</b></td>
                        <td>${env.TOTAL}</td>
                    </tr>

                    <tr>
                        <td><b>Passed Tests</b></td>
                        <td style="color:green;">
                        ${env.PASSED}
                        </td>
                    </tr>

                    <tr>
                        <td><b>Failed Tests</b></td>
                        <td style="color:red;">
                        ${env.FAILED}
                        </td>
                    </tr>

                    <tr>
                        <td><b>Pass Percentage</b></td>
                        <td>${env.PERCENTAGE}%</td>
                    </tr>

                </table>

                <br/>

                <h3>
                Useful Links
                </h3>

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