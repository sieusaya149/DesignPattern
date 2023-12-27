/*
This application allows users to write, edit, and format text. It also has 
an undo feature that allows users to revert their changes.

Here's how we can apply the Command and Memento patterns:

Command Pattern: Each action the user can perform (like writing text,
deleting text, formatting text) is encapsulated in a command object.
These commands are executed by an invoker object.
This allows us to easily add new actions without changing the invoker's code.

Memento Pattern: Whenever a command is executed, the application's state is 
saved in a memento object. The application can restore its state from a memento
 when the user wants to undo a command.
*/

// Define an interface for the state
export interface EditorState {
    text: string;
}

// Command Pattern
export interface Command {
    execute(): void;
}

export class WriteCommand implements Command {
    private editor: Editor;
    private text: string;

    constructor(editor: Editor, text: string) {
        this.editor = editor;
        this.text = text;
    }

    public execute(): void {
        this.editor.write(this.text);
    }
}

export class UndoCommand implements Command {
    private editor: Editor;

    constructor(editor: Editor) {
        this.editor = editor;
    }

    public execute(): void {
        this.editor.undo();
    }
}

export class Invoker {
    private editor: Editor;

    constructor(editor: Editor) {
        this.editor = editor;
    }

    public executeCommand(cmd: Command): void {
        cmd.execute();
        if (!(cmd instanceof UndoCommand)) {
            this.editor.saveState();
        }
    }
}

// Memento Pattern
export class Memento {
    private state: EditorState;

    constructor(state: EditorState) {
        this.state = state;
    }

    public getState(): EditorState {
        return this.state;
    }
}

export class Editor {
    private state: EditorState = { text: '' };
    private history: EditorHistory = new EditorHistory();

    public write(text: string): void {
        this.state.text += text;
    }

    public saveState(): void {
        // must use object spread to create a shallow copy
        this.history.addMemento(new Memento({...this.state})); 
    }

    public undo(): void {
        let memento = this.history.getPrevious();
        if (memento) {
            this.state = memento.getState();
        }
    }

    public getText(): string {
        return this.state.text;
    }
}

export class EditorHistory {
    private mementos: Memento[] = [];

    public addMemento(memento: Memento): void {
        console.log(`Adding memento: ${memento.getState().text}`)
        this.mementos.push(memento);
        this.getInfo()
    }

    public getPrevious(): Memento | undefined {
        if(this.mementos.length > 1)
        {
            this.mementos.pop(); // remove the last one
            return this.mementos.pop(); // return the previous one
        }
        return undefined;
    }

    public getInfo(): void {
        console.log("History: ")
        console.log(this.mementos)
    }
}