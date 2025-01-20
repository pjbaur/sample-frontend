pipeline {
    agent any
    environment {
        IMAGE_NAME = "pjbaur/frontend"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/pjbaur/frontend-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials']) {
                    sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f frontend || true'
                sh 'docker run -d --name frontend -p 80:80 $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }
}
