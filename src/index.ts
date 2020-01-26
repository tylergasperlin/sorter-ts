import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'

//sort array of numbers
const numbersCollection = new NumbersCollection([-5000,100000,1000,10,3,-5,0])
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)

//sort string
const charactersCollection = new CharactersCollection('tylerGasperling')
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()
console.log(charactersCollection.data)