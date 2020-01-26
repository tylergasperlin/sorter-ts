"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//sort array of numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([-5000, 100000, 1000, 10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log('---------------------------1');
//sort string
var charactersCollection = new CharactersCollection_1.CharactersCollection('tylerGasperling');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(5000);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(100);
console.log('---------------------------1');
linkedList.sort();
linkedList.print();
