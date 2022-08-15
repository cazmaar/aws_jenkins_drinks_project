#!/bin/bash
scp docker-compose.yaml $2:/home/ec2-user
ssh -o StrictHostKeyChecking=no $2
docker run -p 3000:3000 -d $1

