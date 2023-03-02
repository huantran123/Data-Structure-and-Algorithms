class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = []
    }
    this.data[index].push([key, value])
    return this.data
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index]
    if (bucket) {
      for (let row of bucket) {
        if (row[0] === key) {
          return row[1]
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0])
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
myHashTable.set('oranges', 25)
console.log(myHashTable.keys())