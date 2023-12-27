/*
    let's consider a real-world business scenario where we have an application 
    that can perform CRUD (Create, Read, Update, Delete) operations on a database. 
    We can use the Command pattern to encapsulate each operation in a command object
*/

// Receiver is the Database
export class Database {
    public create(): void {
        console.log('Creating a record in the database');
    }

    public read(): void {
        console.log('Reading a record from the database');
    }

    public update(): void {
        console.log('Updating a record in the database');
    }

    public delete(): void {
        console.log('Deleting a record from the database');
    }
}

export interface Command {
    execute(): void;
}

export class CreateCommand implements Command {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public execute(): void {
        this.database.create();
    }
}

export class ReadCommand implements Command {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public execute(): void {
        this.database.read();
    }
}

export class UpdateCommand implements Command {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public execute(): void {
        this.database.update();
    }
}

export  class DeleteCommand implements Command {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public execute(): void {
        this.database.delete();
    }
}

export class Invoker {
    private commands: Command[] = [];

    public getCommands(): Command[] {
        return this.commands
    }
    
    public storeAndExecute(cmd: Command): void {
        this.commands.push(cmd);
        cmd.execute();
    }
}