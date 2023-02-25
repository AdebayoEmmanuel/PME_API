# PME_API
Simple API to manage PME members record.

# Member Schema:

```json
{
  "name": "Member name",
  "stack": "Tech stack",
  "interest": "General interest"
}
```

![image](https://user-images.githubusercontent.com/92952014/221342050-4de7c671-dd7b-49dc-998e-c1ffe9b51092.png)


# Usage:

* Clone the repo
* npm i express mongoose nodemon dotenv
* nodemon app.js

# Endpoints:
```js
url{:port}/api/getAll //fetch all members record
url{:port}/api/post //add a member record
url{:port}/api/getOne/id //fetch member by ID
url{:port}/api/update/id //update member record by ID
url{:port}/api/delete/id //delete member record by ID
```


# STACK:


![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
