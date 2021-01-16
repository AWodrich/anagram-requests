const Anagram = require('../index');

describe("Anagram", () => {
    let anagram;
    beforeAll(() => {
        anagram = new Anagram({
            'estt': ['test', 'test', 'test', 'etst', 'ttse'],
            'ahllo': ['alohl', 'ollah','olhal', 'hallo'],
            'fhiins': ['insfih', 'finish', 'hinifs'],
        });
    });

    it("should sortChars() correct sort", () => {
        const word = anagram.sortChars('hallo');
        expect(word).toBe('ahllo');
    });

    it("should not sortChars() correct sort", () => {
        const word = anagram.sortChars('hallo');
        expect(word).not.toBe('hallo');
    });

    it("should correct findAnagrams(input)", () => {
        const result = anagram.findAnagrams('hallo')
        const resultToBe = ['alohl', 'ollah','olhal', 'hallo'];
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAnagrams(input) no anagrams", () => {
        const result = anagram.findAnagrams('g')
        const resultToBe = "There is no anagram";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAnagrams(input) with no string input", () => {
        const result = anagram.findAnagrams('')
        const resultToBe = "There is no anagram";
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAnagrams(input) caseInsensitive", () => {
        const result = anagram.findAnagrams('HALLO')
        const resultToBe = ['alohl', 'ollah','olhal', 'hallo'];
        expect(result).toStrictEqual(resultToBe);
    });
});
