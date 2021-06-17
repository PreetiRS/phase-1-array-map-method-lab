const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//We use map() when we want to perform an action on each elelment in an Array, 
//and "gather" the results in a new array


    // function titleCased(tutorials) {
    //   return tutorials[0].toUpperCase() + tutorials.substring(1);
    // };

    // const capsTutorials = tutorials.split(' ').map(titleCased).join(' ');

          // function titleCased (){
          //   tutorials.map(function(tutorials) {
          //     tutorials.split(' ');
          //     return tutorials.toUpperCase() + tutorials.substr(1);
          // })
          // };
//given:
//const titleCased = () => {
//  return tutorials
//}

///////////////////////////////////////////////////////
// const titleCased = tutorials.map(function (tutorial) {
//   return tutorial.toUpperCase();
// });

// return titleCased;

// const titleCased = (tutorials) => {
//   return tutorials.split(' ');
// }

function perElement(string){
  // let m = tutorials.map(s => `${s}!!!`)
  // console.log(m)
  return string.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

const titleCased = () => tutorials.map(string => perElement(string))

// const titleCased = () => tutorials.map(s => s.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "))

// function map(array, callback) {
//   for (cosnt element of array) {
//     ~Do something to each element
//      callback(element);
//   }
// }

//to create a new array using map()
// function map(array, callback){
//   const newArr = [];

//   for (const element of array) {
//     newArr.push(Callback(element));
//   }
//   return newArr
// }