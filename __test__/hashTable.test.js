'use strict';

let Index = require('../index.js');
// const util = require('util');

describe('Tests for the Hash Table using a linked list', () => {

  // console.log(Index.myHash.map.length);
  // console.log(util.inspect(Index.myHash, {showHidden:false,depth:null}));

  // remove values
  it('Test by removing a node and check the count', () => {
    Index.myHash.delete('Ovi');
    expect(Index.myHash.map.length).toBe(13);
  });

  it('Test by removing a node that doesn\'t exist', () => {
    Index.myHash.delete('Ovidiu');
    expect(Index.myHash.map.length).toBe(13);
  });

  it('Test by removing the head node', () => {
    Index.myHash.delete('John');
    expect(Index.myHash.map.length).toBe(12);
  });

  // update values
  it('update a value at the end of the linked list', () => {
    Index.myHash.update('Michael', 'Transformer');
    expect(Index.myHash.get('Michael').value.position).toBe('Transformer');
  });

  it('Test the Update with a non existing value in the linked list', () => {
    expect(Index.myHash.update('Nissy-boy', 'Dog')).toBe('key:value not found');
  });

  it('test the Update with a missing key and Value', () => {
    expect((() => Index.myHash.update(undefined, 'Student'))).toThrow();
    expect((() => Index.myHash.update('Cat', undefined))).toThrow();
  });


  // add new values
  it('add a new value to the linked list', () => {
    Index.myHash.add('Ovi','Student');
    expect(Index.myHash.get('Ovi').value).toEqual({name: 'Ovi', position: 'Student'});
  });

  it('add a new value to the linked list', () => {
    Index.myHash.add('Nismo','Dog');
    expect(Index.myHash.get('Nismo').value).toEqual({name: 'Nismo', position: 'Dog'});
  });

  it('add a new value to the linked list with jibberish', () => {
    expect((() => Index.myHash.add('asslkdja', undefined))).toThrow();
  });
  


  // get values 
  it('test the Get function by checking the position param', () => {
    expect(Index.myHash.get('Nismo').value.position).toEqual('Dog');
  });

  it('Test the Get function by checking a invalid key', () => {
    expect(Index.myHash.get('Nissy-boy')).toBe(undefined);
  });

  it('Test the Get function by checking the name param', () => {
    expect(Index.myHash.get('Cathy').value.name).toBe('Cathy');
  });

});