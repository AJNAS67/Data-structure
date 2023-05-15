//Node
//Trie
//  insert
//  contains
//  startWithPrefix

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }
  contain(world) {
    let curr = this.root;
    for (let i = 0; i < world.length; i++) {
      let charToFind = world[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }
  startsWithPrefix(prefix){
    for(let i=prefix.length;i>0;i--){
        let world=prefix.slice(0,i)
        // console.log(world,'world');
        this.insert(world)
    }

  }
}



const trie=new Trie()
trie.insert("ajnas")
trie.insert("ajnaskp")
trie.insert("ajnasmuhammed")
trie.insert("ajnasaju")
trie.startsWithPrefix("ajnas")

console.log(trie.contain("aj"));
