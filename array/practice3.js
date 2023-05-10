// Javascript Interview Prep Course 2022 Monsterlessons

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: false,
    age: 30,
  },
  {
    id: 2,
    name: "Ajnas",
    isActive: true,
    age: 24,
  },
  {
    id: 3,
    name: "Fayis",
    isActive: true,
    age: 15,
  },
  {
    id: 4,
    name: "Jalal",
    isActive: false,
    age: 44,
  },
];

// 1- write a code to get array of names from given array of users
// we can use forloop ,foreach,map

function getArrayName(items) {
  array = [];
  items.forEach((element) => {
    array.push(element.name);
  });
  return array;
}
console.log(getArrayName(users));
//use map
function getArrayName1(items) {
  return items.map((item) => item.name);
}
console.log(getArrayName1(users, "name using map"));

// 2.  get all active user
function getActiveUser(items) {
  return items.filter((item) => item.isActive == true);
}
console.log(getActiveUser(users));
const names = users.filter((user) => user.isActive).map((user) => user.name);
console.log(names, "names");

//sort array in accenting order of age

let sorted = users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));
console.log(sorted, "sortedusers");

let sortAndFiltered = users
  .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(sortAndFiltered, "sortAndFiltered");


