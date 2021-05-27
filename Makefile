build:
	docker build -t gamespace-app .
run:
	docker run -v ${PWD}:/app -v /app/node_modules -p 8099:8080 --rm gamespace-app  