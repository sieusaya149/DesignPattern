/*
Abstract Factory is a creational design pattern that lets you produce families 
of related objects without specifying their concrete classes.
*/

/*
    Tạo các nhà máy sản xuất nhân vật game bao gồm gươm, áo giáp và giày
    bởi vì ở mỗi level khác nhau thì cách tạo đồ và sức mạnh của đồ khác nhau
    nên là cần phải tạo theo level
    để đáp ứng được nhu cầu đề ra chúng ta nên dùng abstract factory
*/

interface ISword {
    damage: number
    name: string
    getInfor(): void;
}

class BasicSword implements ISword {
    damage: number;
    name: string
    constructor(name: string) {
        this.damage = 15
        this.name = name
    }
    getInfor(): void {
        console.log(`Your Sword is basic level with damage ${this.damage}`)
    }
}

class IntermedidateSword implements ISword {
    damage: number;
    name: string;
    constructor(name: string) {
        this.damage = 35
        this.name = name
    }
    getInfor(): void {
        console.log(`Your Sword is intermediate level with damage ${this.damage}`)
    }
}

class SuperSword implements ISword {
    damage: number;
    name: string;
    constructor(name: string) {
        this.damage = 60
        this.name = name
    }
    getInfor(): void {
        console.log(`Your Sword is Super level with damage ${this.damage}`)
    }
}


interface IAmor {
    amor: number
    durable: number
    getInfor(): void;
}

class NormalAmor implements IAmor {
    amor: number;
    durable: number
    constructor() {
        this.amor = 1000
        this.durable = 20
    }
    getInfor(): void {
        console.log(`Your Amor is normal level with amor ${this.amor}
                    and durable is ${this.durable}`)
    }
}

class SuperAmor implements IAmor {
    amor: number;
    durable: number
    constructor() {
        this.amor = 1500
        this.durable = 100
    }
    getInfor(): void {
        console.log(`Your Amor is normal level with amor ${this.amor}
                    and durable is ${this.durable}`)
    }
}

interface IShoes {
    speed: number,
    getInfor(): void;
}

class BasicShoes implements IShoes {
    speed: number;
    constructor() {
        this.speed = 355
    }
    getInfor(): void {
        console.log(`Your Shoes is basic shoes with speed is ${this.speed}`)
    }
}

class SuperShoes implements IShoes {
    speed: number;
    constructor() {
        this.speed = 555
    }
    getInfor(): void {
        console.log(`Your Shoes is super shoes with speed is ${this.speed}`)
    }
}

type Weapon = IShoes | IAmor | ISword
abstract class WeaponFactory {
    listWeaponCreated:Weapon[];
    constructor()
    {
        this.listWeaponCreated = []
    }
    abstract createSword(): ISword;
    abstract createAmor(): IAmor;
    abstract createShoes(): IShoes;
    weaponInfo()
    {
        for(let weapon of this.listWeaponCreated)
        {
            console.log(weapon)
        }
    }
}

export class BeginnerWeaponFactory extends WeaponFactory {
    constructor(){
        super()
    }
    createAmor(): IAmor {
        const newAmor = new NormalAmor();
        newAmor.getInfor();
        this.listWeaponCreated.push(newAmor)
        return newAmor
    }
    createShoes(): IShoes {
        const newShoes = new BasicShoes();
        newShoes.getInfor();
        this.listWeaponCreated.push(newShoes)
        return newShoes
    }
    createSword(): ISword {
        const newSword = new BasicSword("Beginner");
        newSword.getInfor();
        this.listWeaponCreated.push(newSword)
        return newSword
    }
}

export class IntermediateWeaponFactory extends WeaponFactory {
    constructor(){
        super()
    }
    createAmor(): IAmor {
        const newAmor = new NormalAmor();
        newAmor.getInfor();
        this.listWeaponCreated.push(newAmor)
        return newAmor
    }
    createShoes(): IShoes {
        const newShoes = new BasicShoes();
        newShoes.getInfor();
        this.listWeaponCreated.push(newShoes)
        return newShoes
    }
    createSword(): ISword {
        const newSword = new IntermedidateSword("Intermediate");
        newSword.getInfor();
        this.listWeaponCreated.push(newSword)
        return newSword
    }
}

export class AdvancedWeaponFactory extends WeaponFactory {
    constructor(){
        super()
    }
    createAmor(): IAmor {
        const newAmor = new SuperAmor();
        newAmor.getInfor();
        this.listWeaponCreated.push(newAmor)
        return newAmor
    }
    createShoes(): IShoes {
        const newShoes = new SuperShoes();
        newShoes.getInfor();
        this.listWeaponCreated.push(newShoes)
        return newShoes
    }
    createSword(): ISword {
        const newSword = new SuperSword("Super");
        newSword.getInfor();
        this.listWeaponCreated.push(newSword)
        return newSword
    }
}