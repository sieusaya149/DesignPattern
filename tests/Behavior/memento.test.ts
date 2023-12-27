import { Design, DesignMemento, DesignState, DesignHistory } from '../../src/behavior/Memento/memento';
import { expect } from 'chai';
import 'mocha';
describe('Memento Pattern', () => {
    let design: Design;
    let history: DesignHistory;

    beforeEach(() => {
        design = new Design();
        history = new DesignHistory();
    });

    it('should save and restore state', () => {
        const initialState: DesignState = { grid: [[1, 2], [3, 4]] };
        design.setState(initialState);
        const memento = design.saveStateToMemento();
        history.add(memento);

        const newState: DesignState = { grid: [[5, 6], [7, 8]] };
        design.setState(newState);

        const restoredMemento = history.get(0);
        design.restoreStateFromMemento(restoredMemento);
        expect(design.getState()).deep.equal(initialState);
    });
});