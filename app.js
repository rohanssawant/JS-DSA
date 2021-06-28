// STACKS Last in first out
// POP EXTRACT RECENTLY ADDED
// PEEK LOOK RECENTLYADDED

// // SETS unordered, unqiue. vs arrays itis performs better
// const set = new Set();
// set.add(1);
// set.add("rohan");

// // console.log(set);
// for (const s of set) {
//   console.log(s);
// }
// console.log(set.has("rohan"));
// set.delete(1);
// console.log(set);

// OBJECT  can have methods
// unordered, for in loop, only key is unique,
// const obj = {
//   name: "rohan",
//   age: 20,
//   hobby: ["myhobbies", "astro"],
//   greet() {
//     console.log(`Hi, I am ${this.name}`);
//   },
// };
// // delete obj.hobby;
// obj.greet();
// console.log(obj);

//MAPS
// KEY VALUE ORDERED, ITERABEL FOR OF CAN USED
//stored as an array of 2, which is ket and value
// const resultData = new Map();

// resultData.set("average", "1.25");
// resultData.set("lastResult", "null");
// // for (d of resultData) {
// //   console.log(d);
// // }
// console.log(resultData.get("average"));

// LINKEDLISTS

class LinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //   it means bydefault its at end so next hsould be null
  append(value) {
    const newNode = { value: value, next: null };
    //means if tail is not there ie lists is empty so
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  //logging an lists
  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const LL1 = new LinkedLists();
LL1.append(1);
LL1.append("rohan");
LL1.append(true);
LL1.append(1.256);
console.log(LL1.toArray());
