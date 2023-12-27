/*
Bridge is a structural design pattern that lets you split
a large class or a set of closely related
classes into two separate hierarchies—abstraction and 
implementation—which can be developed independently of each other.
*/

/*
Support for Different Vehicle Types:

Business Requirement: The system should be able to manage and operate different 
types of vehicles, such as cars, trucks, and bicycles.
Bridge Pattern: Use the Bridge pattern to separate the abstraction 
(vehicle operations) from the implementation (specific vehicle types).
*/

enum DIRECTION {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    STRAIGHT = "STRAIGHT",
}

abstract class ControlVehicle {
    protected velocity: number;
    protected direction: DIRECTION;

    constructor() {
        this.velocity = 0;
        this.direction = DIRECTION.STRAIGHT;
    }

    resetState() {
        this.velocity = 0;
        this.direction = DIRECTION.STRAIGHT;
    }

    goLeft(): void {
        console.log("===== DURING TURN LEFT =====");

        this.gearDown();
        this.direction = DIRECTION.LEFT;
        this.getInfor();

        this.grearUp();
        this.direction = DIRECTION.STRAIGHT;
        this.getInfor();

        console.log("===== FINALIZE TURN LEFT =====");
    }

    goRight(): void {
        console.log("===== DURING TURN RIGHT =====");
        this.gearDown();
        this.direction = DIRECTION.RIGHT;
        this.getInfor();

        this.grearUp();
        this.direction = DIRECTION.STRAIGHT;
        this.getInfor();

        console.log("===== FINALIZE TURN RIGHT =====");
    }

    abstract brake(): void;
    abstract grearUp(): void;
    abstract gearDown(): void;

    getInfor(): void {
        console.log(`The velocity now is ${this.velocity} and direction is ${this.direction}`);
    }
}

export class ControlBike extends ControlVehicle {
    constructor() {
        super();
    }

    brake(): void {
        this.velocity -= 50;
        if (this.velocity <= 0) {
            this.velocity = 0;
        }
    }

    grearUp(): void {
        this.velocity += 10;
    }

    gearDown(): void {
        this.velocity -= 10;
        if (this.velocity <= 0) {
            this.velocity = 0;
        }
    }
}

export class ControlMotor extends ControlVehicle {
    constructor() {
        super();
    }

    brake(): void {
        this.velocity -= 100;
        if (this.velocity <= 0) {
            this.velocity = 0;
        }
    }

    grearUp(): void {
        this.velocity += 50;
    }

    gearDown(): void {
        this.velocity -= 20;
        if (this.velocity <= 0) {
            this.velocity = 0;
        }
    }
}

export class ControlCar extends ControlVehicle {
    constructor() {
        super();
    }

    brake(): void {
        this.velocity = 0;
    }

    grearUp(): void {
        this.velocity += 100;
    }

    gearDown(): void {
        this.velocity -= 50;
        if (this.velocity <= 0) {
            this.velocity = 0;
        }
    }
}

export class ControlVehiclesDevice {
    private device: ControlVehicle;

    constructor(device: ControlVehicle) {
        this.device = device;
    }

    faster(): void {
        console.log("Go faster ===>");
        this.device.grearUp();
        this.device.getInfor();
    }

    slower() {
        console.log("Go slower <==");
        this.device.gearDown();
        this.device.getInfor();
    }

    stop() {
        console.log("Stop now X");
        this.device.brake();
        this.device.getInfor();
    }

    turnLeft() {
        console.log("turn LEFT <=");
        this.device.goLeft();
        this.device.getInfor();
    }

    turnRight() {
        console.log("turn RIGHT =>");
        this.device.goRight();
        this.device.getInfor();
    }

    changeDevice(device: ControlVehicle) {
        this.device = device;
        this.getControlType();
    }

    getControlType(): void {
        if (this.device instanceof ControlBike) {
            console.log("Control for Bike Only");
        } else if (this.device instanceof ControlMotor) {
            console.log("Control for Motor Only");
        } else {
            console.log("Control for Car Only");
        }
    }
}