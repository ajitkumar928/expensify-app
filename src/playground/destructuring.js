// const person={
//     name:'Ajit',
//     age:24,
//     location:{
//         city:'Chennai',
//         temp:40
//     }
// };

// const { name:firstName='Anonymous',age }=person;
// console.log(`${firstName} is ${age}`);

// const { city,temp:temperature }=person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book={
//     title:'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// };

// const { name:publisherName='Self-Published' }=book.publisher;
// console.log(`${publisherName}`);

const address=['1/383','Indiragandhi Street'];

const [,street,district='Kanchipuram']=address;
console.log(`You're in  ${district}`);

const item=['Coffee (hot)','$2.00','$2.50','$2.75'];
const [Coffee,light,medium,heavy]=item;
console.log(`A medium ${Coffee} costs ${medium}`);