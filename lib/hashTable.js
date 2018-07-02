'use strict';

const hash = require('string-hash');
const LinkedList = require('../Linked-List/LinkedList.js');

class Hashmap {

  constructor() {
    this.map = (() => {
      let ll = new LinkedList();
      return ll;
    }) ();
  }

  add(key, value) {
    if (key === undefined) throw 'missing the key';
    if (value === undefined) throw 'missing the value';

    this.map.append({key: hash(key), value: {name: key, position: value}});
    return this;
  }

  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   */
  get(key) {
    if (key === undefined) throw 'missing the key';

    let currentNode = this.map.head;
    while (currentNode) {
      if (currentNode.value.key === hash(key)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  /**
   * Delete a key from the map
   * @param key
   */
  delete(key) {
    if (key === undefined) throw 'missing the key';

    let currentNode = this.map.head;
    while (currentNode) {
      if (currentNode.value.key === hash(key)) {
        this.map.remove(currentNode.value);
        return 'deleted the node';
      }
      currentNode = currentNode.next;
    }
    return 'key:value not found';
  }

  /**
   * Replace a value for a key in a hashmap
   * @param key
   * @param newValue
   */
  update(key, newValue) {
    if (key === undefined) throw 'missing the key';
    if (newValue === undefined) throw 'missing the new value';

    let currentNode = this.map.head;
    while (currentNode) {
      if (currentNode.value.key === hash(key)) {
        currentNode.value = {key: hash(key), value: {name: key, position: newValue}};
        return 'updated value';
      }
      currentNode = currentNode.next;
    }
    return 'key:value not found';
  }

  serialize() {
    return this.map.serialize();
  }

  deserialize(data) {
    if (!data) throw 'invalid hashmap';
    return JSON.parse(JSON.stringify(data));
  }

}

module.exports = Hashmap;
