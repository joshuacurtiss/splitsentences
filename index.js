/**
 * Will try to split up some string content into an array of fragments.
 * @arg {string} content The content to be processed.
 * @arg {int} maxlen The target length of the fragments.
 */
module.exports = function (content, maxlen) {
    content = (typeof content !== 'undefined') ? content : '';
    maxlen = (typeof maxlen !== 'undefined') ? maxlen : 200;
    let strings = [];
    content = content.replace(/(\n|\s{2,})/g, ' ');
    while (content.length) {
        let fragment;
        if (content.length > maxlen) {
            let bestIndex = 0;
            let match;
            // Check for sentences (delimited by ;.?!)
            if (!bestIndex) {
                const sentenceRegex = /[;.?!]/g;
                while (match = sentenceRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
                }
            }
            // Check for sentence fragments (delimited by commas)
            if (!bestIndex) {
                const commaRegex = /,/g;
                while (match = commaRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
                }
            }
            // Check for words delimited by spaces
            if (!bestIndex) {
                const spaceRegex = /\s+/g;
                while (match = spaceRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
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
