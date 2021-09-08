#!/bin/bash
set -e

echo "-- Removing unnamed docker images"
UNNAMED_IMAGES=$(docker images | grep "^<none>" | awk '{print $3}')
if [ ! -z "$UNNAMED_IMAGES" ]; then
	docker rmi $UNNAMED_IMAGES
else
	echo "No unnamed docker images to remove"
fi

echo "-- Loading images"
docker load -i carlosLogService.image
docker-compose up -d --remove-orphans
echo "✔ Service ready"