#!/bin/sh

# Changer les permissions à chaque lancement (utile pour les volumes)
chown -R node:node /opt/app

# Lancer Strapi en tant que node
exec su-exec node "$@"
