// let state = {
//   arrays: [],
//   total: 15,
//   initial: 5,
//   maximum: 280,
// };

// //CREATING ARRAY
// function creatingArray() {
//   state.arrays = [];
//   for (let i = 0; i < state.total; i++) {
//     state.arrays.push(randomIntiger(state.initial, state.maximum));
//   }
//   appendingToDom();
// }
// creatingArray();

// //GENERATING RANDOM NUMBER
// function randomIntiger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// //APPENDING TO DOM
// function appendingToDom() {
//   let element = document.querySelector(".Content");
//   element.innerHTML = "";
//   state.arrays.map((item, index) => {
//     element.innerHTML += `<div class="bar" data-value=${index} style="height: ${item}px"></div>`;
//   });
// }

// //STARTING THE ALGORITHM
// let newarray = [];
// let collection = [];
// let picked = null,
//   index = null;
// let i = 0;
// document.querySelector(".start").addEventListener("click", () => {
//   newarray = [];
//   collection = [];
//   (picked = null), (index = null);
//   i = 0;
//   while (i < state.arrays.length) {
//     picked = state.arrays[i];
//     index = i;
//     if (!collection.includes(index)) {
//       if (newarray[collection.indexOf(index)] !== picked) {
//         for (let j = 0; j < state.arrays.length; j++) {
//           if (!collection.includes(j)) {
//             if (newarray[collection.indexOf(j)] !== picked) {
//               if (state.arrays[j] < picked) {
//                 picked = state.arrays[j];
//                 index = j;
//                 if (
//                   i === state.arrays.length - 1 &&
//                   state.arrays.length !== newarray.length
//                 ) {
//                   i = -1;
//                 }
//               }
//             }
//           }
//         }
//       }
//       collection.push(index);
//       newarray.push(picked);
//     }
//     i++;
//   }
//   console.log(state.arrays);
//   console.log(newarray);
//   console.log(collection);
// });

// //RESETING THE ARRAYS
// document.querySelector(".reset").addEventListener("click", () => {
//   creatingArray();
// });
