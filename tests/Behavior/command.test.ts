import { assert } from 'chai';
import * as sinon from 'sinon';
import { CreateCommand,
         UpdateCommand,
         ReadCommand,
         DeleteCommand,
         Invoker,
         Database } from '../../src/behavior/Command/Command';

describe('DeleteCommand', () => {
    it('should call delete on the database when execute is called', () => {
        let database = new Database();
        let deleteCommand = new DeleteCommand(database);

        let deleteSpy = sinon.spy(database, 'delete');
        deleteCommand.execute();

        assert(deleteSpy.calledOnce);
    });
});

describe('Invoker', () => {
    it('should store and execute command a create', () => {
        let database = new Database();
        let createCommand = new CreateCommand(database);
        let invoker = new Invoker();

        let createSpy = sinon.spy(database, 'create');
        invoker.storeAndExecute(createCommand);

        assert(createSpy.calledOnce);
        assert.strictEqual(invoker.getCommands().length, 1);
    });

    it('should store and execute command multiple command', () => {
        let database = new Database();
        let createCommand = new CreateCommand(database);
        let updateCommand = new UpdateCommand(database);
        let deleteCommand = new DeleteCommand(database);
        let getCommand = new ReadCommand(database);

        let invoker = new Invoker();

        let createSpy = sinon.spy(database, 'create');
        let deleteSpy = sinon.spy(database, 'delete');
        let updateSpy = sinon.spy(database, 'update');
        let readSpy = sinon.spy(database, 'read');

        invoker.storeAndExecute(createCommand);
        invoker.storeAndExecute(updateCommand);
        invoker.storeAndExecute(createCommand);
        invoker.storeAndExecute(deleteCommand);
        invoker.storeAndExecute(getCommand);
        invoker.storeAndExecute(getCommand);
        invoker.storeAndExecute(getCommand);

        assert(createSpy.callCount === 2);
        assert(deleteSpy.callCount === 1);
        assert(updateSpy.callCount === 1);
        assert(readSpy.callCount === 3);

        assert.strictEqual(invoker.getCommands().length, 7);
    });
});