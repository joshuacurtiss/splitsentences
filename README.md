This function receives some string content and a maximum length, and will break the content into a collection of strings that will fit the maximum length, but prioritizing: (a) sentences, (b) sentence fragments, (c) and lastly, words. 

## Example

```js
const splitSentences = require('splitsentences');
const hugecontent = 'Blah blah blah.';
console.log(splitSentences(hugecontent,200));
```
