module.exports = function (content = '', maxlen = 200) {
    let strings = [];
    content = content.replace(/(\n|\s{2,})/g, ' ');
    while (content.length) {
        let fragment;
        if (content.length > maxlen) {
            let bestIndex = 0;
            let match;
            if (!bestIndex) {
                const sentenceRegex = /[;.?!]/g;
                while (match = sentenceRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
                }
            }
            if (!bestIndex) {
                const commaRegex = /,/g;
                while (match = commaRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
                }
            }
            if (!bestIndex) {
                const spaceRegex = /\s+/g;
                while (match = spaceRegex.exec(content)) {
                    if (match.index < maxlen) bestIndex = match.index;
                }
            }
            if (!bestIndex) fragment = content;
            else fragment = content.substr(0, bestIndex + 1);
        } else {
            fragment = content;
        }
        // if (debugging) console.log('"' + fragment + '"');
        strings.push(fragment.trim());
        content = content.substr(fragment.length).trim();
    }
    return strings;
};
