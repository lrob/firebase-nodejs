# firebase-nodejs

This repository implements the firebase authentication example shown in [this tutorial](https://dev.to/betiol/how-to-handle-authentication-on-node-js-using-firebase-5ajn). 
In order to run the example you need to install `Docker` and `docker-compose` and take the following steps:

* Clone this respository
* Create the file `server/src/firebase/credentials.json` following the instructions contained in the aforementioned tutorial
* Create the file `frontend/src/firebaseConfig.json` with the configuration that you app needs to contact the firebase authentication server. In the tutorial this information are shown in the screenshot titled `Add firebase to your app`. The json file will result in something like

```json
{
    "apiKey": "your-apiKey",
    "authDomain": "your-authDomain",
    "projectId": "your-projectId",
    "storageBucket": "your-storageBucket",
    "messagingSenderId": "your-messagingSenderId",
    "appId": "your-appId"
}  
```

* Then run `docker-compose build`
* And finally `docker-compose up`

When the `server` and the `frontend` finish to load you should be able to contact the frontend at [this address](localhot:3000/login)
