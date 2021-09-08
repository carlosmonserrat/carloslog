SERVER_PASSWORD='9m)L674[Nv}Wt_fp'
SERVER_URL='202.182.123.158'
#cd ..
#sbt docker:publishLocal
echo "- creating image files"
docker save carlos-log-service:latest -o /tmp/carlosLogService.image
echo "- uploading image files"
scp /tmp/carlosLogService.image "root@${SERVER_URL}:~"

echo "- uploading scripts"
scp $PWD/load-images.sh "root@${SERVER_URL}:~"

echo "- loading images on server"
sshpass -p ${SERVER_PASSWORD}  ssh root@${SERVER_URL} "echo '${SERVER_PASSWORD}' | /bin/bash load-images.sh"
