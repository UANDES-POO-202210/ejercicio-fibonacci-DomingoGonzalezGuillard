let words = ['fábula', 'Árbol', 'ganado', 'niña', 'filosofía, ñandú', 'alado'];

function words_sort(words){
    let words_copy = words.slice();
    return words_copy.sort((a, b) => a.localeCompare(b, 'en', { ignorePunctuation: false }));
};
console.log("Sorted list: ");
console.log(words_sort(words));
console.log("Initial list: ");
console.log(words);