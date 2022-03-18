class StrictEqualityExtension {
    getInfo() {
        return {
            id: 'arkosextensions', //��չid
            name: 'Arkos\'sExtensions',  //��չ��ʾ��
            blocks: [
                { //�ַ����Ƚ�
                    opcode: 'strictlyEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] strictly equals [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'First value'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Second value'
                        }
                    }
                },
                { //����㵽��ķ���
                    opcode: 'getDirFromAToB',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction form x:[X1]y:[Y1]to x:[X2]y:[Y2]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                { //����������н�
                    opcode: 'differenceBetweenDirections',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'difference from direction1:[a] to direction2:[b]',
                    arguments: {
                        a: {
                            type: Scratch.ArgumentType.ANGLE,
                            defaultValue: 0
                        },
                        b: {
                            type: Scratch.ArgumentType.ANGLE,
                            defaultValue: 0
                        }
                    }
                }
                //{ //������...��ת...����
                //    opcode: 'turnDegreesToDir',
                //    blockType: Scratch.BlockType.COMMAND,
                //    text: 'turn[degree]degrees toward direction[dir]',
                //    arguments: {
                //        degree: {
                //            type: Scratch.ArgumentType.NUMBER,
                //            defaultValue: 0
                //        },
                //        dir: {
                //            type: Scratch.ArgumentType.ANGLE,
                //            defaultValue: 0
                //        }
                //    }
                //}
            ]
        };
    }
    strictlyEquals(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE === args.TWO;
    }

    numGreaterThen(args) {
        return args.ONE > args.TWO;
    }

    getDirFromAToB(args) {
        const { X1, X2, Y1, Y2 } = args;
        let a = Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180.0;
        if (Y1 < Y2)
            return a;
        else if (Y1 > Y2) {
            a += 180;
            if (a > 180.0)
                a -= 360.0;
            return a;
        }
        else if (X2 > X1)
            return 90;
        else if (X2 < X1)
            return -90;
        else
            return NaN;
    }

    differenceBetweenDirections(args) {
        const { a, b } = args;
        let dif = b - a;
        if (dif > 180)
            dif -= 360;
        return dif;
    }

    turnDegreesToDir(args) {
        //��ô����ԭ�����ת��ľ
    }

}
Scratch.extensions.register(new StrictEqualityExtension());