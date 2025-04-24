# ----------- CONFIG ------------
STRAPI_SERVICE = strapi
COMPOSE_FILE = docker-compose.yaml
COMPOSE = docker compose -f $(COMPOSE_FILE)
# --------------------------------

.PHONY: up down build restart logs cache-clean shell

## Démarre Strapi + dépendances
up:
	$(COMPOSE) up -d

## Arrête tous les conteneurs
down:
	$(COMPOSE) down

## Reconstruit les conteneurs (après modif Dockerfile ou packages)
build:
	$(COMPOSE) build $(STRAPI_SERVICE)

## Redémarre uniquement Strapi
restart:
	$(COMPOSE) restart $(STRAPI_SERVICE)

## Affiche les logs de Strapi
logs:
	$(COMPOSE) logs -f $(STRAPI_SERVICE)

## Nettoie le cache Strapi (.cache + .tmp)
cache-clean:
	$(COMPOSE) exec $(STRAPI_SERVICE) sh -c "rm -rf .cache .tmp"

## Ouvre un shell dans le conteneur Strapi
shell:
	$(COMPOSE) exec $(STRAPI_SERVICE) sh
