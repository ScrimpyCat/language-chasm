'use babel';

import { Point } from 'atom';

export default {
    selector: ".source.chasm",
    inclusionPriority: 100,
    excludeLowerPriority: true,
    api: {
        instructions: [],
        registers: [
            { mnemonic: "r0", description: "A general purpose register" },
            { mnemonic: "r1", description: "A general purpose register" },
            { mnemonic: "r2", description: "A general purpose register" },
            { mnemonic: "r3", description: "A general purpose register" },
            { mnemonic: "flags", description: "The flags register" },
            { mnemonic: "pc", description: "The process counter register" }
        ]
    },

    getPrefix(editor, bufferPosition){
        match = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]).match(/[^,\[\]\s]+$/);
        return match != null ? match[0] : "";
    },

    match(name, string){
        return name.includes(string);
    },

    getSuggestions(suggestions){
        let prefixStr = this.getPrefix(suggestions.editor, suggestions.bufferPosition);
        if ((!prefixStr.length) && (!suggestions.activatedManually)) return;

        let scopes = suggestions.scopeDescriptor.getScopesArray();
        let type = scopes[scopes.length - 1];

        let completions = [];
        if (type.includes(".chasm-instruction"))
        {

        }

        else if (type.includes(".chasm-symbol"))
        {
            for (register of this.api.registers)
            {
                if (this.match(register.mnemonic, prefixStr))
                {
                    completions.push({
                        type: "register",
                        text: register.mnemonic,
                        snippet: register.mnemonic,
                        description: register.description,
                        replacementPrefix: prefixStr
                    });
                }
            }
        }

        return completions;
    }
}
