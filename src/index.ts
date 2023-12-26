// import PersonFactory  from "./creational/simpleFactory/SimpleFactory";

// const personFactory = new PersonFactory();


// // create aldult object
// const myFather = personFactory.getPerson(new Date("1975-07-15"));
// myFather.printDetails()

// // create infrant object
// const myLittleBro = personFactory.getPerson(new Date("2023-06-30"));
// myLittleBro.printDetails()

// // create childer object
// const myBro = personFactory.getPerson(new Date("2010-01-01"))
// myBro.printDetails()


// // testing factory method

// import { chocolateIceCreamCreator, mangoIceCreamCreator } from "./creational/factoryMethod/factoryMethod";

// const chocolateIceCream = new chocolateIceCreamCreator()
// chocolateIceCream.printInfor()

// const mangoIceCream = new mangoIceCreamCreator()
// mangoIceCream.printInfor()

// testing abstract factory

import { AdvancedWeaponFactory,
         IntermediateWeaponFactory,
         BeginnerWeaponFactory } from "./creational/abstractFactory/abstractFactory";

const playerLevel = 11
let weaponFactory = null
if(playerLevel >= 0 && playerLevel <= 10)
{
    weaponFactory = new BeginnerWeaponFactory()
}
else if(playerLevel <= 30) // from 11 to 30
{
    weaponFactory = new IntermediateWeaponFactory()
}
else // >= 31
{
    weaponFactory = new AdvancedWeaponFactory()
}
weaponFactory.createAmor()
weaponFactory.createShoes()
weaponFactory.createSword()
weaponFactory.weaponInfo()