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

// testing adapter
import { JsonServiceAdapter, InputCategory } from "./structure/Adapter/Adapter";

const analysisService = new JsonServiceAdapter()
analysisService.execute("this is data by XML", InputCategory.XML);

analysisService.execute("this is data by JSON", InputCategory.JSON);

// testing bridge
import { ControlBike, ControlCar, ControlMotor, ControlVehiclesDevice } from "./structure/Bridge/Bridge";


const bikeController = new ControlBike()
const motorController = new ControlMotor()
const carController = new ControlCar()
const controlDevice = new ControlVehiclesDevice(bikeController)

// control bike
controlDevice.faster()
controlDevice.faster()
controlDevice.slower()
controlDevice.faster()
controlDevice.turnLeft()
controlDevice.turnRight()
controlDevice.stop()

// change type vehicle to motor
controlDevice.changeDevice(motorController)
controlDevice.faster()
controlDevice.faster()
controlDevice.turnLeft()
controlDevice.turnRight()
controlDevice.stop()

// change type vehicle to car
controlDevice.changeDevice(carController)
controlDevice.faster()
controlDevice.faster()
controlDevice.stop()



