import * as GameMode from "./GameMode"
// @ponicode
describe("modeType", () => {
    let inst: any

    beforeEach(() => {
        inst = new GameMode.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.modeType(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.modeType(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.modeType(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.modeType(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.modeType(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.modeType(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
