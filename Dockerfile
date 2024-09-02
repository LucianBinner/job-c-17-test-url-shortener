# Usando a imagem base do Node.js
FROM node:20.11.1-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia o restante do código-fonte para o contêiner, ignorando node_modules
COPY . .
