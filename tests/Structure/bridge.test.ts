import { ControlBike,
         ControlMotor,
         ControlCar,
         ControlVehiclesDevice } from '../../src/structure/Bridge/Bridge';
import { expect } from 'chai';
import 'mocha';

describe('Bridge Pattern', () => {
    describe('ControlVehiclesDevice', () => {
        it('should change device and get control type correctly', () => {
            const bike = new ControlBike();
            const motor = new ControlMotor();
            const car = new ControlCar();

            const device = new ControlVehiclesDevice(bike);
            device.changeDevice(motor);
            const controlType1 = device.getControlType();

            device.changeDevice(car);
            const controlType2 = device.getControlType();
        });
    });
});