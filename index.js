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
    var fragment, bestIndex, match, idx;
    var sentenceRegex = /[;.?!]['"]*/g;
    var commaRegex = /,['"]*/g;
    var spaceRegex = /\s+/g;
    // First, clean up tabs, newlines and multiple spaces
    content = content.replace(/([\n\t]|\s{2,})/g, ' ');
    // Whittle away at the content until all the fragments account for it
    while (content.length) {
        if (content.length > maxlen) {
            bestIndex = 0;
            // Check for sentences
            if (!bestIndex) {
                while (match = sentenceRegex.exec(content)) {
                    idx = match.index + match[0].length - 1;
                    if (idx < maxlen) bestIndex = idx;
                }
            }
            // Check for sentence fragments
            if (!bestIndex) {
                while (match = commaRegex.exec(content)) {
                    idx = match.index + match[0].length - 1;
                    if (idx < maxlen) bestIndex = idx;
                }
            }
            // Check for words delimited by spaces
            if (!bestIndex) {
                while (match = spaceRegex.exec(content)) {
                    idx = match.index + match[0].length - 1;
                    if (idx < maxlen) bestIndex = idx;
                }
            }
            // Define the fragment we found
            if (!bestIndex) fragment = content;
            else fragment = content.substr(0, bestIndex + 1);
        } else {
            fragment = content;
        }
        // Push this fragment onto the array, then remove it from the content we're processing. Continue.
        strings.push(fragment.trim());
        content = content.substr(fragment.length).trim();
    }
    return strings;
};
