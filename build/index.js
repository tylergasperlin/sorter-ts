"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
//sort array of numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([-5000, 100000, 1000, 10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
//sort string
var charactersCollection = new CharactersCollection_1.CharactersCollection('tylerGasperling');
var stringSorter = new Sorter_1.Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);
