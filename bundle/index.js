(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.arSoundex = factory());
}(this, function () { 'use strict';

  const ref = {
    ء: 0,
    ؤ: 0,
    ئ: 0,
    أ: 0,
    إ: 0,
    ا: 0,
    آ: 0,
    ه: 0,
    ع: 0,
    غ: 0,
    خ: 0,
    ح: 0,
    ق: 1,
    ك: 1,
    ج: 2,
    ش: 2,
    ي: 2,
    ى: 2,
    ض: 2,
    ص: 3,
    ز: 3,
    س: 3,
    ت: 4,
    ة: 4,
    ط: 4,
    د: 4,
    ث: 5,
    ظ: 5,
    ذ: 5,
    ر: 6,
    ل: 6,
    ن: 6,
    ف: 7,
    و: 7,
    ب: 7,
    م: 7
  };

  const ref$1 = {
    ا: 0,
    أ: 0,
    إ: 0,
    آ: 0,
    ح: 0,
    خ: 0,
    ه: 0,
    ع: 0,
    غ: 0,
    ش: 0,
    و: 0,
    ي: 0,
    ف: 1,
    ب: 1,
    ج: 2,
    ز: 2,
    س: 2,
    ص: 2,
    ظ: 2,
    ق: 2,
    ك: 2,
    ت: 3,
    ث: 3,
    ة: 3,
    د: 3,
    ذ: 3,
    ض: 3,
    ط: 3,
    ل: 4,
    م: 5,
    ن: 5,
    ر: 6
  };

  const arSoundex = (word = '', length = 6, method = 1) => {
    if (
      typeof word !== 'string' ||
      typeof length !== 'number' ||
      typeof method !== 'number' ||
      length < 1 ||
      ![1, 2].includes(method)
    ) {
      return {
        error:
          'One or more parameters has incorrect type! Make sure you have (string, number[>0], number[1, 2])'
      };
    }

    // eslint-disable-next-line eqeqeq
    const soundex = method == 1 ? ref : ref$1;

    // Value to return
    let value = '';

    // Size of the word to process
    const size = word.length;
    // Make sure the word is at least two characters in length
    if (size > 1) {
      // Convert the word to character array for faster processing
      let chars = word.split('');
      chars = chars.length >= length ? chars : chars.slice(0, length);
      // Buffer to build up with character codes
      let buffer = [];

      // The current and previous character codes
      let currCode = 0;
      // Loop through all the characters and convert them to the proper character code
      buffer = chars.reduce(
        (a, e) => {
          currCode = soundex[e];
          if (
            currCode === undefined ||
            currCode === 0 ||
            currCode === a.slice(-1)[0]
          ) {
            return a;
          }

          a.push(currCode);
          return a;
        },
        ['x']
      );

      const bufferSize = buffer.length;
      if (bufferSize < length) {
        buffer = buffer.concat(new Array(length - bufferSize).fill(0));
      }

      // Set the value to return
      value = buffer.join('');
    }

    // Return the value
    return value;
  };

  return arSoundex;

}));
