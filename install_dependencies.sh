#!/bin/bash

# Função para instalar as dependências
install_dependencies() {
    folder=$1
    cacheFolder=$2
    
    printf "\n> Entrando na pasta ${folder}\n"
    cd ${folder}
    
    printf "\n> Executando npm install\n"
    npm_config_loglevel=silent npm install --cache ${cacheFolder}

    printf "\n> Limpando Cache Folder\n"
    rm -rf $cacheFolder
    
    printf "\n> Voltando para a pasta anterior\n"
    cd -
}

# Instalar dependências do front-end
install_dependencies "./frontend"

# Instalar dependências do back-end
install_dependencies "./backend"