import PersonFactory  from "./creational/simpleFactory/SimpleFactory";

const personFactory = new PersonFactory();


// create aldult object
const myFather = personFactory.getPerson(new Date("1975-07-15"));
myFather.printDetails()

// create infrant object
const myLittleBro = personFactory.getPerson(new Date("2023-06-30"));
myLittleBro.printDetails()

// create childer object
const myBro = personFactory.getPerson(new Date("2010-01-01"))
myBro.printDetails()
