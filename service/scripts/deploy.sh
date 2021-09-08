SERVER_PASSWORD='9m)L674[Nv}Wt_fp'
SERVER_URL='202.182.123.158'
SCRIPTS_FOLDER=$PWD
cd ..
sbt docker:publishLocal
echo "- creating image files"
docker save carlos-log-service:latest -o /tmp/carlosLogService.image
echo "- uploading image files"
scp /tmp/carlosLogService.image "root@${SERVER_URL}:~"

echo "- uploading scripts"
scp $SCRIPTS_FOLDER/scripts/load-images.sh "root@${SERVER_URL}:~"

echo "- uploading docker files"
scp $SCRIPTS_FOLDER/../deploy/docker-compose.yml "root@${SERVER_URL}:~"

echo "- loading images on server"
sshpass -p ${SERVER_PASSWORD}  ssh root@${SERVER_URL} "echo '${SERVER_PASSWORD}' | /bin/bash load-images.sh"
echo "You can test this service under http://202.182.123.158/ping"
