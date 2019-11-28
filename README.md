# Dashboard

## Install
- Install docker
- Install docker-compose

## Run
 - Create .env file in root, server and client directory following theses templates:
    - Root (.env):  
    MONGO_ROOT_USER=root  
    MONGO_ROOT_PASSWORD=example  
    MONGO_DBNAME=dashboard_db  

    - Client (client/.env):  
    iSKIP_PREFLIGHT_CHECK=true  
    NODE_PATH=./src  

    - Server (server/.env):  
    NODE_ENV=prod  
    APP="Dashboard"  
    PORT=8081  
    MONGOURI=mongodb://localhost:27017/dashboard_db  
    MONGOTESTURI=mongodb://localhost:27017/dashboard_db  
    APP_SECRET=somekey  
    YOUTUBE_API_KEY=your_youtube_api_key  
    WEATHER_API_KEY=your_weather_api_key  

- Start docker daemon: `sudo systemctl start docker`
- Then run: (this can take a while)
`sudo docker-compose up --build`

- Now access to the dashboard via localhost:8080
- If you want to test dashboard server, it's running on localhost:8081
