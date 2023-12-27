import { expect } from 'chai';
import { Editor, WriteCommand, UndoCommand, Invoker } from '../../src/collaborate/CommandMemento/Editor';

describe('Editor', () => {
    let editor: Editor;
    let invoker: Invoker;

    beforeEach(() => {
        editor = new Editor();
        invoker = new Invoker(editor);
    });

    it('should write text', () => {
        invoker.executeCommand(new WriteCommand(editor, 'Hello, '));
        invoker.executeCommand(new WriteCommand(editor, 'world!'));
        expect(editor.getText()).to.equal('Hello, world!');
    });

    it('should undo last write operation', () => {
        invoker.executeCommand(new WriteCommand(editor, 'Hello, '));
        invoker.executeCommand(new WriteCommand(editor, 'world!'));

        invoker.executeCommand(new UndoCommand(editor));
        expect(editor.getText()).to.equal('Hello, ');
    });
});