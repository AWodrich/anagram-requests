// declare variables
const fs = require('fs');
const readline = require('readline');
let allAnagrams = {};

function Anagram(anagrams) {
    allAnagrams = anagrams;
}

// prepare data for search, sort input alphabetically
const sortLetters = Anagram.prototype.sortLetters = word => {
    return word.split("").sort().join("");
};

// handle search
const findAllAnagrams = Anagram.prototype.findAllAnagrams = word => {
    let sort = sortLetters(word.toLowerCase());
    if (allAnagrams[sort]) {
        return allAnagrams[sort];
    } else {
        return "There is no anagram";
    }
};

// error handling
// get dictionary content, prepare data for search and store into new array
const readFile = Anagram.prototype.readFile = function() {
    fs.readFile('wordlist.txt', 'utf8', (err, contents) => {
        if (err) {
            console.log("Something went wrong! Detalis: ", err);
            return;
        }

        // create new array "words"
        let words = [];
        words = contents.split('\r\n');
        for (let i in words) {
            let word = words[i].toLowerCase();
            let sorted = sortLetters(word);
	    	            
		if (allAnagrams[sorted] != null) {
                	allAnagrams[sorted].push(word);
           	 }
           	 else {
                	allAnagrams[sorted] = [word];
           	 }
        }

        // handle command line events and prompting
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.setPrompt('Enter  string or word to find  anagrams: ');
        rl.prompt();
        rl.on('line', (word) => {
            console.log(findAllAnagrams(word));
            rl.prompt();
        }).on('close', () => {
            console.log("session closed")
        });
    });
} 

module.exports = Anagram;

readFile();





