#!/usr/bin/env groovy
@Library("Jenkins shared library")_
pipeline {
    agent any
        stages{
            stage("initialization"){
                steps{
                    script{
                        def gv = load "script.groovy"
                    }
                }
            }
            // stage("test"){
            //     steps{
            //         script{
            //             test()
            //         }
            //     }
            // }
            // stage("version bump"){
            //     steps{
            //         script{
            //             bumpversion "minor"
            //         }
            //     }
            // }
            // stage("artifact"){
            //     steps{
            //         script{
            //             buildArtifact "drinks_app"
            //         }
            //     }
            // }
            stage("build"){
                steps{
                    script{
                        builddocker "cazmaars/jenkins:drinks-${version}"
                }
                    }
                }
            stage("deploy"){
                steps{
                    script{
                        sshagent(['SSH_Key']) {
                            sh "bash ./deploy.sh cazmaars/jenkins:drinks-${version} ec2-user@35.177.182.143"                  
                            }
                    }
                }
            }
            stage("commit to git"){
                steps{
                    script{
                    commitgit()
                    }
                }
            }}
        post{
            success{
                echo "it's live"
            }
            failure{
                echo "it failed"
            }
        }
        }
        
 