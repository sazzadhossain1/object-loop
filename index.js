// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
// for (var i = 0; i < 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 15; i++) {
//   if (i === 12) {
//     continue;
//   }
//   console.log(i);
// }

// const myFriend = {
//   name: "Solim",
//   age: "26",
//   profession: "Business",
// };

// for (let key in myFriend) {
//   console.log(myFriend[key]);
// }

const pcBuild = {
  processor: "intel i 5, 10 gen",
  motherboard: "intel",
  ram: "32 gb 1600bus",
  hardDisk: "1 tb",
};

for (let pc in pcBuild) {
  console.log(pcBuild[pc]);
}
