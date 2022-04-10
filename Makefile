IMAGE=dvitali/slidev
TAG=latest

docker-build:
	docker build \
		-t "$(IMAGE):$(TAG)" \
		.

docker-run:
	docker run \
		--rm \
		-it \
		--entrypoint=/bin/bash \
		--name slides-development \
		-v "$$PWD:/app" \
		-p 3030:3030 \
		"$(IMAGE):$(TAG)"
