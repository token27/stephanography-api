# A simple stephanograpy api applications in Node.js

## Installation

### Composer
```
composer require token27/stephanography-api
```

### Git
```
git clone https://github.com/token27/stephanography-api.git
```

### Install dependencies
```
cd stephanography-api
npm install
```

## Start
Start the application according to your requirements.
``` 
    npm run start
   
    npm run debug
        
    npm run development
        
    npm run production
```

## Testing
App testing with jasmine.
```
    npm run test    
```

## Docker

### Start all services

```
    docker-compose up
```

### Or start service required

``` 
    docker-compose up -d mysql
    docker-compose up -d phpmyadmin
    docker-compose up -d ngrok
    docker-compose up -d stephanography-nodejs-app    
```

### This allows you to enter a running container:

```
    docker exec -it [container-id] bash
```

## Ports

| PORT | EXPOSED | PROTOCOL | Description |
| ------ | ------ | -------- | --- |
| **3025** | **3025** | TCP |  Stephanography NodeJS App |
| **4040** | **4040** | TCP |  Ngrok |
| **80** | **8025** | TCP |  PhpMyAdmin |
| **3306** | **33025** | TCP |  Mysql |

## Folders & Files :

| FOLDER / FILE | Description |
| ------ | ------  |
| **/.env** | This file contain your enviroment vars for the NodeJS app |
| **/docker/.env** | This file contain your enviroment vars for the container |
| **/docker/database** | The mysql container data |
| **/docker/ngrok** | The ngrok container data |

