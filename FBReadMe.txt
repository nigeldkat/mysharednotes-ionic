Firebase setup and install notes

Create FB Project

npm install firebase --save

*****************************************************************************
in app ts
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

add in init or something like that
- firebase.initializeApp(environment.firebase);

****************************************************************************

Configure security in db.  now in test mode
https://firebase.google.com/docs/database/security/quickstart?authuser=0
