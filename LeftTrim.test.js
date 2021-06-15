const LeftTrim = require('./LeftTrim')

describe('LeftTrim', ()=>{
    
    test('Exception when argument is number', ()=>{
        expect(()=>{LeftTrim(123)}).toThrow("Type should be string");
    });

    test('Exception when argument is object', () =>{
        expect(()=>{LeftTrim({})}).toThrow("Type should be string");
    });

    test('Left Trimming a string', ()=>{
        expect(LeftTrim("    hola")).toBe("hola");
    });

    test('No Right Trimming done', ()=>{
        expect(LeftTrim("hola      ")).toBe("hola      ");
    });

    test('Exception when argument is Date', ()=>{
        expect(()=>{LeftTrim(new Date())}).toThrow("Type should be string");
    });

    test('Exception when argument is bool', ()=>{
        expect(()=>{LeftTrim(true)}).toThrow("Type should be string");
    });

});