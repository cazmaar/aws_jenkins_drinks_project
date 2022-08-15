def test(){
    sh "npm ci --production"
    sh "npm run test"
    sh "npm version minor"
}

def build(){
    withCredentials([usernamePassword(credentialsId: '94290158-e809-48d4-a7df-0d83c7b67fbc', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t cazmaars/jenkins:drinks-1.0 .'
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh 'docker push cazmaars/jenkins:drinks-1.0'
    }
}

def deploy(){
    echo "app deployed."
}

return this