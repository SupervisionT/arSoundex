# arSoundex

There are many libraries that generate soundex index for English but non for Arabic.
In this contribution we provide the first open source soundex index for Arabic.
Our Arabic soundex library could help in improving the search in arabic documents, finding and correcting spelling errors and many other applications.

[Soundex Algorithem](https://en.wikipedia.org/wiki/Soundex)

We developed an algorithm based on Tajweed rules that categorize the characters into groups based on it's pronunciation.
The second algorithm inspired from [this source](https://www.codeproject.com/Articles/26880/Arabic-Soundex)

## Install
```javascript
npm i ar-soundex
```
## API
```javascript
var arSoundex = require('ar-soundex');
arSoundex('عبدالله') // => x74600
```
## Parameters
| parameter        | Type | Description           | Defult  |
| ------------- |:-------------:|:-------------:| -----:|
| word      | String| A string of one word or more | '' |
| length      | Number | The max length of generated index |   6 |
| method | Number | To set which algorithm to be used [1 or 2] |    1 |

## Example
```javascript
arSoundex('عبدلله') // => x74600
arSoundex('عبدالله') // => x74600

arSoundex('ضربوه', 6, 1) // => x26700
arSoundex('ضرب', 6, 1) // => x26700
```
## License
[MIT ©](https://github.com/SupervisionT/arSoundex/blob/master/LICENSE)

## Contributions & Issues
All contributions are welcome. Create a pull request [here](https://github.com/SupervisionT/arSoundex/pulls)
If you have an issue please let us know . Create an issue [here](https://github.com/SupervisionT/arSoundex/issues)

## Keywords
Arabic Natural Language Soundex Metaphone Index Search Spelling