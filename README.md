# Hash-Tables
https://travis-ci.com/OviParasca/Hash-Tables.svg?branch=master

Create a hash table using a linked-list.
Include the following functions:
* `Get(key)`
* `Delete(key)`
* `Add(key, value)`
* `Update(key, newValue)`
* `Serialize()` & `Desrialize(data)`


To run tests, install Jest and run navigating to the directory and running `npm test`

### The unit tests are:
* Test by removing a node and check the count 
* Test by removing a node that doesn't exist (1ms)
* Test by removing the head node
* Test Update a value at the end of the linked list (1ms)
* Test the Update with a non existing value in the linked list
* Test the Update with a missing key and Value (1ms)
* Test add a new value to the linked list (1ms)
* Test add a new value to the linked list
* Test add a new value to the linked list with jibberish (1ms)
* Test the Get function by checking the position param
* Test the Get function by checking a invalid key
* Test the Get function by checking the name param
