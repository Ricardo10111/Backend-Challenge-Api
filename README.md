# Backend Challenge Api

## Credentials 
It is necessary create a file .env to run de code
```
.env
```
Inside of the file *_example.env_* find the code you have to use in the .env file

## **Execution mode**

Enter the next command in the terminal of your Visual Code
- To run in dev modo

```
npm run dev 
```



- To run in production mode 
```
npm run start
```

## How to create, read, update or delete in the api

It is necessary the use of the programms that can connect to the APIs, like

- postman 
- Insomiac
- Thunder Client
- Hoppscotch
- NativeRest

In the body seccion of the programm of your preference you have to write the JSON according to the model of the progam, in this case the model is

- To create users
```
{
  "name": "Ricardo",
  "profilePicture": "iutyfhfhddd",
  "email": "ricardo@gmail.com",
  "password": "password123"
}

```
- To create posts 
```
{
  "description": "Hola es mi primer Post",
  "image": "URL image",
  "body": "example of dody",
  "user": "ID of the user"

}
```
- To create a token
```
{
  "email": "pablo@gmail.com",
  "password": "password123"
}
```

## How to create a post

It is necesary create a token before to create a post

## How to view the info that send to the API 

In the next URL you can to view the info

```
https://backend-challenge-api-3k5h.onrender.com
```