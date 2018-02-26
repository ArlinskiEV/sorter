class Sorter {
  constructor() {
    // your implementation
    this.store = [];
    this.compare = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    this.store.push(element);
  }

  at(index) {
    // your implementation
    // ?????????????????????????
    return this.store[index];
  }

  get length() {
    // your implementation
    return this.store.length;
  }

  toArray() {
    // your implementation
    return [...this.store];
  }

  sort(indices) {
    // your implementation
    let arrForSort = indices.map((item) => this.store[item]);
    arrForSort.sort(this.compare);
    let i = 0;
    this.store = this.store.map((item, index) => {
      if (indices.indexOf(index) === -1) return item;
      return arrForSort[i++];
    });
  }

  setComparator(compareFunction) {
    // your implementation
    this.compare = compareFunction;
  }
}

module.exports = Sorter;