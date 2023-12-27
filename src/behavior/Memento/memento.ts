
/**
 * Represents a set of classes that implement the Memento design pattern.
 * The Memento pattern allows an object to save and restore its internal state without exposing its details.
 * The code includes the following classes:
 * - `DesignState`: An interface that defines the state of a design, including a grid of numbers.
 * - `DesignMemento`: A class that encapsulates the state of a design and provides methods to access it.
 * - `Design`: A class that represents a design and provides methods to set, get, save, and restore its state.
 * - `DesignHistory`: A class that maintains a list of design mementos and provides methods to add and retrieve them.
 */
interface DesignState {
    grid: number[][];
    // Add new state variables here as needed
}

class DesignMemento {
    private state: DesignState;

    constructor(state: DesignState) {
        this.state = state;
    }

    public getState(): DesignState {
        return this.state;
    }
}

class Design {
    private state: DesignState;

    constructor() {
        this.state = { grid: [] };
    }

    public setState(state: DesignState): void {
        this.state = state;
    }

    public getState(): DesignState {
        return this.state;
    }

    public saveStateToMemento(): DesignMemento {
        // Use object spread to create a shallow copy of the state
        return new DesignMemento({ ...this.state });
    }

    public restoreStateFromMemento(memento: DesignMemento): void {
        this.state = memento.getState();
    }
}

class DesignHistory {
    private mementoList: DesignMemento[] = [];

    public add(memento: DesignMemento): void {
        this.mementoList.push(memento);
    }

    public get(index: number): DesignMemento {
        return this.mementoList[index];
    }
}

export { DesignState, DesignMemento, Design, DesignHistory };