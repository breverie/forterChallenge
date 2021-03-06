var _ = require('lodash');

var left = ['admiring', 'adoring', 'agitated', 'amazing', 'angry', 'awesome', 'backstabbing', 'berserk', 'big',
    'boring', 'clever', 'cocky', 'compassionate', 'condescending', 'cranky', 'desperate', 'determined', 'distracted',
    'dreamy', 'drunk', 'ecstatic', 'elated', 'elegant', 'evil', 'fervent', 'focused', 'furious', 'gigantic', 'gloomy',
    'goofy', 'grave', 'happy', 'high', 'hopeful', 'hungry', 'infallible', 'jolly', 'jovial', 'kickass', 'lonely',
    'loving', 'mad', 'modest', 'naughty', 'nauseous', 'nostalgic', 'peaceful', 'pedantic', 'pensive', 'prickly',
    'reverent', 'romantic', 'sad', 'serene', 'sharp', 'sick', 'silly', 'sleepy', 'small', 'stoic', 'stupefied',
    'suspicious', 'tender', 'thirsty', 'tiny', 'trusting', 'zen'];

var right = ['albattani', 'allen', 'almeida', 'agnesi', 'archimedes', 'ardinghelli', 'aryabhata', 'austin', 'babbage',
    'banach', 'bardeen', 'bartik', 'bassi', 'bell', 'bhabha', 'bhaskara', 'blackwell', 'bohr', 'booth', 'borg', 'bose',
    'boyd', 'brahmagupta', 'brattain', 'brown', 'carson', 'chandrasekhar', 'shannon', 'colden', 'cori', 'cray',
    'curran', 'curie', 'darwin', 'davinci', 'dijkstra', 'dubinsky', 'easley', 'einstein', 'elion', 'engelbart',
    'euclid', 'euler', 'fermat', 'fermi', 'feynman', 'franklin', 'galileo', 'gates', 'goldberg', 'goldstine',
    'goldwasser', 'golick', 'goodall', 'hamilton', 'hawking', 'heisenberg', 'heyrovsky', 'hodgkin', 'hoover', 'hopper',
    'hugle', 'hypatia', 'jang', 'jennings', 'jepsen', 'joliot', 'jones', 'kalam', 'kare', 'keller', 'khorana', 'kilby',
    'kirch', 'knuth', 'kowalevski', 'lalande', 'lamarr', 'lamport', 'leakey', 'leavitt', 'lichterman', 'liskov',
    'lovelace', 'lumiere', 'mahavira', 'mayer', 'mccarthy', 'mcclintock', 'mclean', 'mcnulty', 'meitner', 'meninsky',
    'mestorf', 'minsky', 'mirzakhani', 'morse', 'murdock', 'newton', 'nobel', 'noether', 'northcutt', 'noyce', 'panini',
    'pare', 'pasteur', 'payne', 'perlman', 'pike', 'poincare', 'poitras', 'ptolemy', 'raman', 'ramanujan', 'ride',
    'montalcini', 'ritchie', 'roentgen', 'rosalind', 'saha', 'sammet', 'shaw', 'shirley', 'shockley', 'sinoussi',
    'snyder', 'spence', 'stallman', 'stonebraker', 'swanson', 'swartz', 'swirles', 'tesla', 'thompson', 'torvalds',
    'turing', 'varahamihira', 'visvesvaraya', 'volhard', 'wescoff', 'williams', 'wilson', 'wing', 'wozniak', 'wright',
    'yalow', 'yonath'
];

module.exports = {
    // Name picker, a le' docker!
    getUniqId: function () {
        var name = 'a';
        do {
            name = _.sample(left) + '_' + _.sample(right);
        } while (name == 'boring_wozniak'); // homage :)
        return name;
    }
};