
/*
Factory Method is a creational design pattern that provides an interface for 
creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
*/

/*
    Requirement
    In your ice cream shop has many types of scream and each type of cream has 
    different way to create. 
    1. Solocola should be combine from socola, vanila, water and cacao
    2. Mango should be combine from mango, vanila, water, lemon
    3. Vanila should be combine from vanila, water, milk
    4. Print the infor each type of icream was made and price
*/

enum IncredientName {
    chocolate = "chocolate",
    vanila = "vanila",
    water = "water",
    mango = "mango",
    lemon = "lemon",
    milk = "milk",
    cacao = "cacao"
}

enum IncredientPrice {
    chocolate = 10,
    vanila = 11,
    water = 12,
    mango = 8,
    lemon = 2,
    milk = 3,
    cacao = 7
}

type element = {
    name: string,
    price: number
}

// define interface for the icecream
interface IIcream {
    listIncredient: element[];
    printInfo(): void;
    makeCream(): void;
}


abstract class AbstractIcream implements IIcream{
    listIncredient: element[];
    constructor()
    {
        this.listIncredient = []
    }
    abstract makeCream(): void;

    printInfo(): void {
        console.log("The Ice Cream Made from:")
        let totalPrice = 0;
        for(let element of this.listIncredient)
        {
            const {name, price} = element
            totalPrice += price
            console.log(`${name} with price: ${price}`)
        }
        console.log(`The price for chocolate ice cream is ${totalPrice}`)
    }
}
class chocolateIceCream extends AbstractIcream {
    constructor() {
        super()
        console.log("The chocolate ice cream is being make")
    }
    makeCream(): void {
        this.listIncredient.push({
            name: IncredientName.chocolate,
            price: IncredientPrice.chocolate
        })
        this.listIncredient.push({
            name: IncredientName.cacao,
            price: IncredientPrice.cacao
        })
        this.listIncredient.push({
            name: IncredientName.water,
            price: IncredientPrice.water
        })
        this.listIncredient.push({
            name: IncredientName.vanila,
            price: IncredientPrice.vanila
        })
    } 
}

class mangoIceCream extends AbstractIcream {
    constructor() {
        super()
        console.log("The mango ice cream is being make")
    }
    makeCream(): void {
        this.listIncredient.push({
            name: IncredientName.mango,
            price: IncredientPrice.mango
        })
        this.listIncredient.push({
            name: IncredientName.water,
            price: IncredientPrice.water
        })
        this.listIncredient.push({
            name: IncredientName.vanila,
            price: IncredientPrice.vanila
        })
        this.listIncredient.push({
            name: IncredientName.lemon,
            price: IncredientPrice.lemon
        })
    } 
}


export abstract class IcreamCreator {
    constructor() {
        
    }
    abstract createAnIceCream(): IIcream;
    printInfor()
    {
        let iceCream = this.createAnIceCream()
        iceCream.makeCream();
        iceCream.printInfo()
    }
}

export class chocolateIceCreamCreator extends IcreamCreator {
    constructor()
    {
        super()
    }
    createAnIceCream(): IIcream {
        return new chocolateIceCream()
    }
}

export class mangoIceCreamCreator extends IcreamCreator {
    constructor()
    {
        super()
    }
    createAnIceCream(): IIcream {
        return new mangoIceCream()
    }
}
