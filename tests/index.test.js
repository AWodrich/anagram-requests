const Anagram = require('../index');

describe("Anagram", () => {
    let anagram;
    beforeAll(() => {
        anagram = new Anagram({
            'estt': ['test', 'test', 'test', 'etst', 'ttse'],
            'aastw': ['astaw'],
            'addss': ['sdasd'],
            'adssw': ['sasdw']
        });
    });

    it("should sortLetters() correct sort", () => {
        const word = anagram.sortLetters('test');
        expect(word).toBe('estt');
    });

    it("should not sortLetters() correct sort", () => {
        const word = anagram.sortLetters('test');
        expect(word).not.toBe('test');
    });

    it("should correct findAllAnagrams(input)", () => {
        const result = anagram.findAllAnagrams('test')
        const resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) no anagrams", () => {
        const result = anagram.findAllAnagrams('k')
        const resultToBe = "There is no anagram";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) with no string input", () => {
        const result = anagram.findAllAnagrams('')
        const resultToBe = "There is no anagram";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAllAnagrams(input) caseSensitive", () => {
        const result = anagram.findAllAnagrams('TEST')
        const resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });
});
