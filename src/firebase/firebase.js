import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY, 
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

  // database.ref('expenses').on('child_removed',(snapshot)=>{
  //   console.log(snapshot.key,snapshot.val());
  // });

  // database.ref('expenses').on('child_changed',(snapshot)=>{  
  //   console.log(snapshot.key,snapshot.val());
  // });

  // database.ref('expenses').on('child_added',(snapshot)=>{
  //   console.log(snapshot.key,snapshot.val());
  // });

  // database.ref('expenses').on('value',(snapshot)=>{
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: 'House rent',
  //   amount: 457800,
  //   createdAt : 1000
  // });

  // database.ref('notes').push({
  //     title:'Course topics',
  //     body : 'React Native, Angular'
  // });

  // database.ref('notes/-LU5e3l_01KDYs12GdJi').remove();

  // database.ref().on('value',(snapshot)=>{
  //     const val = snapshot.val();
  //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });
  
  // setTimeout(()=>{
  //   database.ref('job/company').set('Microsoft');
  // },3500);


//   database.ref().set({
//     name : 'Ajit Kumar',
//     age:24,
//     stressLevel: 6,
//     job : {
//       title: 'software developer',
//       company:'Google'
//     },
//     location:{
//       city:'Chennai',
//       country:'India'
//     }
//   }).then(()=>{
//     console.log('Data is saved!');
//   }).catch((e)=>{
//     console.log('This failed',e);
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Hyderabad'
// });
// database.ref().remove().then(()=>{
//     console.log('Remove succeeded.');
// }).catch((e)=>{
//     console.log('Remove failed:',e);
// });