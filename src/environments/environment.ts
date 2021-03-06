// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,  
  // firebase: {
  //   apiKey: "AIzaSyC7F8qExWo27s80QcvoPBf1_vRDCN2lNRQ",
  //   authDomain: "my-shared-notelist.firebaseapp.com",
  //   databaseURL: "https://my-shared-notelist.firebaseio.com",
  //   projectId: "my-shared-notelist",
  //   storageBucket: "my-shared-notelist.appspot.com",
  //   messagingSenderId: "288557134183"
  // }  
  firebase: {
    apiKey: "AIzaSyAStp-W0IK2qVFtpUsbE4NeXizPnsTlJrw",
    authDomain: "ionicmynotes.firebaseapp.com",
    databaseURL: "https://ionicmynotes.firebaseio.com",
    projectId: "ionicmynotes",
    storageBucket: "ionicmynotes.appspot.com",
    messagingSenderId: "108542055015",
    appId: "1:108542055015:web:e6ce20cba692bc1b653ac2",
    measurementId: "G-GB80VDTBHF"
  }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
