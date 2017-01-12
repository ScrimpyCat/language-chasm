'use babel';

import { Point } from 'atom';

const OPERAND = {
    NONE: 0,
    REGISTER: 1,
    MEMORY: 2,
    IMMEDIATE: 3,
    RELATIVE: 3
};

export default {
    selector: ".source.chasm",
    inclusionPriority: 100,
    excludeLowerPriority: true,
    api: {
        instructions: [
            {
                mnemonic: "mov", description: "Move", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "add", description: "Addition", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "sub", description: "Subtract", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "mul", description: "Multiply", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "sdiv", description: "Divide (signed)", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "udiv", description: "Divide (unsigned)", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "smod", description: "Modulo (signed)", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "umod", description: "Modulo (unsigned)", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "cmp", description: "Compare", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "shl", description: "Logical shift left", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "shr", description: "Logical shift right", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "xor", description: "Logical exclusive OR", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "or", description: "Logical inclusive OR", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "neg", description: "Two's complement negation", operands: [
                    [OPERAND.REGISTER, OPERAND.NONE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "and", description: "Logical AND", operands: [
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.IMMEDIATE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "not", description: "One's complement negation", operands: [
                    [OPERAND.REGISTER, OPERAND.NONE, OPERAND.NONE],
                    [OPERAND.MEMORY, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "hlt", description: "Halt operation", operands: [
                    [OPERAND.NONE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jz", description: "Jump if zero/equal (ZF=1)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jnz", description: "Jump if not zero/not equal (ZF=0)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "js", description: "Jump if sign (SF=1)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jns", description: "Jump if not sign (SF=0)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jo", description: "Jump if overflow (OF=1)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jno", description: "Jump if not overflow (OF=0)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jsl", description: "Jump if (signed) less (SF!=OF)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jsge", description: "Jump if (signed) greater or equal (SF=OF)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jsle", description: "Jump if (signed) less or equal ((ZF=1) OR (SF!=OF))", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jsg", description: "Jump if (signed) greater ((ZF=0) AND (SF=OF))", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jul", description: "Jump if (unsigned) less/carry (CF=1)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "juge", description: "Jump if (unsigned) greater or equal/not carry (CF=0)", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jule", description: "Jump if (unsigned) less or equal ((CF=1) AND (ZF=1))", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jug", description: "Jump if (unsigned) greater ((CF=0) AND (ZF=0))", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "send", description: "Send message from a port", operands: [
                    [OPERAND.REGISTER, OPERAND.NONE, OPERAND.NONE],
                    [OPERAND.IMMEDIATE, OPERAND.NONE, OPERAND.NONE],
                    [OPERAND.REGISTER, OPERAND.REGISTER, OPERAND.MEMORY],
                    [OPERAND.REGISTER, OPERAND.IMMEDIATE, OPERAND.MEMORY],
                    [OPERAND.IMMEDIATE, OPERAND.REGISTER, OPERAND.MEMORY],
                    [OPERAND.IMMEDIATE, OPERAND.IMMEDIATE, OPERAND.MEMORY]
                ]
            },
            {
                mnemonic: "recv", description: "Receive message from a port", operands: [
                    [OPERAND.REGISTER, OPERAND.MEMORY, OPERAND.NONE],
                    [OPERAND.IMMEDIATE, OPERAND.MEMORY, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "nop", description: "No operation", operands: [
                    [OPERAND.NONE, OPERAND.NONE, OPERAND.NONE]
                ]
            },
            {
                mnemonic: "jmp", description: "Jump", operands: [
                    [OPERAND.RELATIVE, OPERAND.NONE, OPERAND.NONE]
                ]
            }
        ],
        registers: [
            { mnemonic: "r0", description: "A general purpose register" },
            { mnemonic: "r1", description: "A general purpose register" },
            { mnemonic: "r2", description: "A general purpose register" },
            { mnemonic: "r3", description: "A general purpose register" },
            { mnemonic: "flags", description: "The flags register" },
            { mnemonic: "pc", description: "The process counter register" }
        ],
        directives: [
            { mnemonic: ".define", description: "Define a new symbol" },
            { mnemonic: ".byte", description: "Insert literal byte values" },
            { mnemonic: ".entrypoint", description: "Declare the entrypoint in the program" },
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
            for (instruction of this.api.instructions)
            {
                if (this.match(instruction.mnemonic, prefixStr))
                {
                    completions.push({
                        type: "function",
                        iconHTML: '<span class="icon-letter">i</span>',
                        text: instruction.mnemonic,
                        snippet: instruction.mnemonic,
                        description: instruction.description,
                        replacementPrefix: prefixStr
                    });
                }
            }
        }

        else if (type.includes(".chasm-directive"))
        {
            for (directive of this.api.directives)
            {
                if (this.match(directive.mnemonic, prefixStr))
                {
                    completions.push({
                        type: "function",
                        iconHTML: '<span class="icon-letter">d</span>',
                        text: directive.mnemonic,
                        snippet: directive.mnemonic,
                        description: directive.description,
                        replacementPrefix: prefixStr
                    });
                }
            }
        }

        else if (type.includes(".chasm-symbol"))
        {
            for (register of this.api.registers)
            {
                if (this.match(register.mnemonic, prefixStr))
                {
                    completions.push({
                        type: "tag",
                        iconHTML: '<span class="icon-letter">r</span>',
                        text: register.mnemonic,
                        snippet: register.mnemonic,
                        description: register.description,
                        replacementPrefix: prefixStr
                    });
                }
            }

            for (define of suggestions.editor.chasmAPI.defines)
            {
                if (this.match(define.name, prefixStr))
                {
                    completions.push({
                        type: "constant",
                        iconHTML: '<span class="icon-letter">d</span>',
                        text: define.name,
                        snippet: define.name,
                        replacementPrefix: prefixStr
                    });
                }
            }

            for (label of suggestions.editor.chasmAPI.labels)
            {
                if (this.match(label.name, prefixStr))
                {
                    completions.push({
                        type: "constant",
                        iconHTML: '<span class="icon-letter">l</span>',
                        text: label.name,
                        snippet: label.name,
                        replacementPrefix: prefixStr
                    });
                }
            }
        }

        return completions;
    }
}
