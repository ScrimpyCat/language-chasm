'use babel';

import CHASMProvider from './chasm-provider';
import { CompositeDisposable, Range, Point } from 'atom';

export default {
    activate(state){
        this.subscriptions = new CompositeDisposable();

        this.subscriptions.add(atom.workspace.observeTextEditors((editor) => {
            this.subscriptions.add(editor.observeGrammar((grammar) => {
                if (grammar.scopeName == "source.chasm")
                {
                    editor.chasmSubscription = editor.onDidStopChanging((changes) => {
                        for (diff of changes.changes)
                        {
                            let buffer = editor.getBuffer();
                            for (let cursor = diff.start, countY = diff.start.row + diff.newExtent.row; cursor.row <= countY; cursor.row++)
                            {
                                for (let countX = cursor.row == diff.newExtent.row ? diff.newExtent.column : buffer.lineLengthForRow(cursor.row); cursor.column < countX; cursor.column += 8) //the max amount of characters to not skip (.define)
                                {
                                    let type = editor.scopeDescriptorForBufferPosition(cursor).getScopesArray().find((e) => e.includes(".chasm-directive-define."));
                                    if (type)
                                    {
                                        let newDefine = true;
                                        for (define of editor.chasmAPI.defines)
                                        {
                                            if (define.marker.getBufferRange().containsPoint(cursor, false))
                                            {
                                                newDefine = false;
                                                break;
                                            }
                                        }

                                        if (newDefine)
                                        {
                                            //TODO: Later workout range for define and add it to the API instead of doing this expensive operation
                                            this.findDefinesInEditor(editor, grammar);
                                            return;
                                        }
                                    }
                                }

                                cursor.column = 0;
                            }
                        }
                    });

                    this.subscriptions.add(editor.chasmSubscription);
                    this.findDefinesInEditor(editor, grammar);
                }

                else if (editor.chasmSubscription)
                {
                    this.subscriptions.remove(editor.chasmSubscription);
                    editor.chasmSubscription.dispose();
                    editor.chasmSubscription = null;
                }
            }));
        }));
    },

    deactivate(){
        this.subscriptions.dispose();
    },

    provide(){
        return CHASMProvider;
    },

    apiForTokens(lines){
        let api = {
            defines: [],
            labels: []
        };

        const KIND = {
            NONE: 0,
            DEFINE: 1
        };
        let row = 0;
        for (line of lines)
        {
            let kind = KIND.NONE, column = 0;
            for (token of line)
            {
                let type = token.scopes[token.scopes.length - 1];

                if (type.includes(".chasm-directive-define.")) kind = KIND.DEFINE;
                else if (kind === KIND.DEFINE)
                {
                    api.defines.push({
                        name: token.value,
                        range: new Range([row, 0], [row, column + 1 + token.value.length])
                    });

                    break;
                }

                else if (type.includes(".chasm-label"))
                {
                    api.labels.push({
                        name: token.value.slice(0, -1),
                        range: new Range([row, 0], [row, column + 1 + token.value.length])
                    });
                }

                column += token.value.length;
            }

            row++;
        }

        return api;
    },

    findDefinesInEditor(editor, grammar){
        editor.chasmAPI = this.apiForTokens(grammar.tokenizeLines(editor.getText()));

        for (define of editor.chasmAPI.defines)
        {
            let marker = editor.markBufferRange(define.range, { invalidate: "inside" });
            define.marker = marker;

            marker.onDidChange(function(define, change){
                let text = editor.getTextInBufferRange(new Range(change.newTailBufferPosition, change.newHeadBufferPosition));
                let api = this.apiForTokens(grammar.tokenizeLines(text));
                if (api.defines.length != 1)
                {
                    editor.chasmAPI.defines.splice(editor.chasmAPI.defines.indexOf(define), 1);
                    define.marker.destroy();
                }

                else define.name = api.defines[0].name;
            }.bind(this, define));
        }

        for (label of editor.chasmAPI.labels)
        {
            let marker = editor.markBufferRange(label.range, { invalidate: "inside" });
            label.marker = marker;

            marker.onDidChange(function(label, change){
                let text = editor.getTextInBufferRange(new Range(change.newTailBufferPosition, change.newHeadBufferPosition));
                let api = this.apiForTokens(grammar.tokenizeLines(text));
                if (api.labels.length != 1)
                {
                    editor.chasmAPI.labels.splice(editor.chasmAPI.labels.indexOf(label), 1);
                    label.marker.destroy();
                }

                else label.name = api.labels[0].name;
            }.bind(this, label));
        }
    }
};
