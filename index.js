// declare variables
const fs = require('fs');
const readline = require('readline');
let anagramsList = {};

function Anagram(anagrams) {
    anagramsList = anagrams;
}

// prepare data for search, sort input alphabetically
const sortChars = Anagram.prototype.sortChars = word => {
    return word.split('')
        .sort()
        .join('');
};

// handle search
const findAnagrams = Anagram.prototype.findAnagrams = word => {
    let sort = sortChars(word.toLowerCase());
    if (anagramsList[sort]) {
        return anagramsList[sort];
    }
    else {
        return 'There is no anagram';
    }
};

// error handling
// get dictionary content, prepare data for search and store into new array
const readFile = Anagram.prototype.readFile = function() {
    fs.readFile('wordlist.txt', 'utf8', (err, contents) => {
        if (err) {
            console.log('Something went wrong! Details: ', err);
            return;
        }

        // create new array "words"
        let words = [];
        words = contents.split('\r\n');
        for (let i in words) {
            let word = words[i].toLowerCase();
            let sorted = sortChars(word);

            if (anagramsList[sorted] != null) {
                anagramsList[sorted].push(word);
            }
            else {
                anagramsList[sorted] = [word];
            }
        }

        // handle command line events and prompting
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.setPrompt('Enter  string or word to find  anagrams: ');
        rl.prompt();
        rl.on('line', (word) => {
            console.log(findAnagrams(word));
            rl.prompt();
        })
            .on('close', () => {
                console.log('session closed')
            });
    });
}

module.exports = Anagram;

readFile();





