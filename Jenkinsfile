pipeline {
    agent any

    environment {
        // Load credentials from .env (or you can hardcode for testing)
        GIT_USERNAME = ''
        GIT_TOKEN = ''
        GIT_REPO = ''
        GIT_BRANCH = ''
    }

    stages {
        stage('Load .env') {
            steps {
                script {
                    def envVars = readProperties file: '.env'
                    env.GIT_USERNAME = envVars.GIT_USERNAME
                    env.GIT_TOKEN    = envVars.GIT_TOKEN
                    env.GIT_REPO     = envVars.GIT_REPO
                    env.GIT_BRANCH   = envVars.GIT_BRANCH
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    git url: "https://${env.GIT_USERNAME}:${env.GIT_TOKEN}@${env.GIT_REPO.replace('https://', '')}",
                        branch: "${env.GIT_BRANCH}"
                }
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            emailext(
                to: 'nasseor4@gmail.com',
                subject: 'Build Success',
                body: 'Build succeeded'
            )
        }
        failure {
            emailext(
                to: 'nasseor4@gmail.com',
                subject: 'Build Failed',
                body: 'Build failed'
            )
        }
    }
}
