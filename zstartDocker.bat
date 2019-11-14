docker build . -t myreact-dockerapp
docker images
docker run -p 8000:80 myreact-dockerapp
pause
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)