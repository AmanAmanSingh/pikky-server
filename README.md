
# PIKKY FOOD SERVER

The "PIKKY Server" project is a Node.js application built to manage and serve food-related data via an Express.js API. Retrieve information about various food items, including their names, descriptions, prices, and other relevant details. It aims to provide a scalable and efficient backend solution for handling food data management tasks.


## Run Locally

Clone the project

```bash
   git clone https://github.com/AmanAmanSingh/pikky-server.git
```

Go to the project directory :

```bash
  cd pikky-server
```

Install dependencies :

```bash
  npm install
```

Start the (nodemon) server :

```bash
    npm run dev
```


## Run With Docker

By running below command Docker will automatically pull it. If any issues occur during the first run, please simply rerun the command again to resolve them or change the port.

```bash
  docker run -it -p 3000:3000 amans7097/pikky-server
```




## API Reference

#### /api test route will give response "success"

```http
  GET http://localhost:3000/api
```


#### Get item

```http
  GET http://localhost:3000/api/food-list
```


#### getMergedData()

Food List Endpoint: Accessing http://localhost:3000/api/food-list will return merged data of all food items. Due to the 2-minute interval for some data retrieval as per task requirements, it may timeout initially. Adjust the timing in the code to ensure proper response.


## Tech Stack

**Server:** Node.js, Express , nodemon , Dcoker .


## Support

For support, email amans7097@gmail.com or join our Slack channel.
