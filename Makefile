# Makefile

# make commands be run with `bash` instead of the default `sh`
SHELL='/bin/bash'

docker_compose_bin:=$(shell [ -x "$(command -v docker-compose)" ] && echo 'docker-compose' || echo 'docker compose')

# Setup —————————————————————————————————————————————————————————————————————————————————
.DEFAULT_GOAL := help

# .DEFAULT: If command does not exist in this makefile
# default:  If no command was specified:
.DEFAULT default:
	$(EXECUTOR)
	if [ "$@" != "" ]; then echo "Command '$@' not found."; fi;
	make help

## —— Project Make file  ————————————————————————————————————————————————————————————————

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Init project ——————————————————————————————————————————————————————————————————————
init: ## Project init
init: docker-down-clear app-clear docker-pull docker-build docker-up app-init

## —— Manage project ————————————————————————————————————————————————————————————————————
up: docker-up ## Project up
down: docker-down ## Project down
restart: down docker-build up ## Project restart

## —— Audit project —————————————————————————————————————————————————————————————————————
check: lint test ## Project restart
test: frontend-test ## Run testing
lint: frontend-lint ## Run linters

docker-up:
	$(docker_compose_bin) up -d

docker-down:
	$(docker_compose_bin) down --remove-orphans

docker-down-clear:
	$(docker_compose_bin) down -v --remove-orphans

docker-stop:
	$(docker_compose_bin) stop

docker-pull:
	$(docker_compose_bin) pull

docker-build:
	$(docker_compose_bin) build

app-clear:
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine sh -c 'rm -f .ready'

app-init: frontend-init
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine sh -c 'touch .ready'

## —— Frontend ——————————————————————————————————————————————————————————————————————————
frontend-init: ## Init frontend
frontend-init: frontend-yarn-install

frontend-yarn-install: ## Install yarn package
	$(docker_compose_bin) run --rm frontend-node-cli yarn install

frontend-node-cli: ## Run node container command. Args: cmd - any command line
	$(docker_compose_bin) run --rm frontend-node-cli $(cmd)

frontend-lint: ## Run lints
	$(docker_compose_bin) run --rm frontend-node-cli yarn stylelint
	$(docker_compose_bin) run --rm frontend-node-cli yarn eslint

frontend-test: ## Run test
	$(docker_compose_bin) run --rm frontend-node-cli yarn test --watchAll=false

frontend-fix: ## Run lint fixer
	$(docker_compose_bin) run --rm frontend-node-cli yarn prettier
	$(docker_compose_bin) run --rm frontend-node-cli yarn eslint:fix

frontend-logs: ## Show logs
	$(docker_compose_bin) logs --follow frontend-node