/**
 * Will try to split up some string content into an array of fragments.
 * @arg {string} content The content to be processed.
 * @arg {int} maxlen The target length of the fragments.
 */
module.exports = function (content, maxlen) {
    // Arg sanitization
    content = (typeof content !== 'undefined') ? content : '';
    maxlen = (typeof maxlen !== 'undefined') ? maxlen : 200;
    // Declarations
    var strings = [];
    var bestIndex, fragment, idx, match, regex;
    var regexes = [
        // Sentences (plus semicolon)
        /[;.?!]['"]*/g,
        // Sentence fragments with commas
        /,['"]*/g,
        // Words (spaces)
        /\s+/g
    ];
    // First, clean up tabs, newlines and multiple spaces
    content = content.replace(/([\n\t]|\s{2,})/g, ' ');
    // Whittle away at the content until all the string snippets account for it
    while (content.length) {
        if (content.length > maxlen) {
            bestIndex = 0;
            // Loop thru the different regex types we have, to find sentences, then fragments, then words, until we find a decent index.
            for (var i = 0; i < regexes.length && bestIndex === 0; i++) {
                regex = regexes[i];
                regex.lastIndex = 0;
                // Find the next string snippet. If it's under the max, save it. We'll loop thru all but only keep the best under the max.
                while (match = regex.exec(content)) {
                    // If a multi-char match was found, set index to the end of the match.
                    idx = match.index + match[0].length - 1;
                    if (idx < maxlen) bestIndex = idx;
                    else break;
                }
            }
            // Define the snippet we found. If we didn't find anything, well, just give the whole string. We don't know how to handle it.
            if (!bestIndex) fragment = content;
            else fragment = content.substr(0, bestIndex + 1);
        } else {
            fragment = content;
        }
        // Push this snippet onto the array, then remove it from the content we're processing. Continue.
        strings.push(fragment.trim());
        content = content.substr(fragment.length).trim();
    }
    return strings;
};
