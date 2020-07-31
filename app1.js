let state = {
  arrays: [],
  total: 100,
  initial: 5,
  maximum: 280,
};

//CREATING ARRAY
function creatingArray() {
  state.arrays = [];
  for (let i = 0; i < state.total; i++) {
    state.arrays.push(randomIntiger(state.initial, state.maximum));
  }
  appendingToDom();
}
creatingArray();

//GENERATING RANDOM NUMBER
function randomIntiger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//APPENDING TO DOM
function appendingToDom() {
  let element = document.querySelector(".Content");
  element.innerHTML = "";
  state.arrays.map((item, index) => {
    element.innerHTML += `<div class="bar" data-value=${index} style="height: ${item}px"></div>`;
  });
  Sorting(state.arrays, 0, state.arrays.length - 1);
}

//RESETING THE ARRAYS
document.querySelector(".reset").addEventListener("click", () => {
  creatingArray();
});

/** *ALGORITHM STARTS* **/
async function Sorting(array, start, end) {
  if (start >= end) {
    return array;
  }
  let index = await Partition(array, start, end);
  await Promise.all([
    Sorting(array, start, index - 1),
    Sorting(array, index + 1, end),
  ]);
}
//PARTITION
async function Partition(array, start, end) {
  let pivotIndex = start;
  let pivotValue = array[end];
  let i = start;
  while (i < end) {
    if (array[i] < pivotValue) {
      await Swap(array, i, pivotIndex);
      pivotIndex++;
    }
    i++;
  }
  await Swap(array, pivotIndex, end);
  return pivotIndex;
}
//SWAP FUNCTION
async function Swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
//START CLICK EVENT
document.querySelector(".start").addEventListener("click", () => {
  Sorting(state.arrays, 0, state.arrays.length - 1);
  appendingToDom();
});
