const fs = require("fs");

let result_arr = [];

const data_from_tweets_file = fs.readFileSync("twitterTweets.txt");

const array_of_sentences = data_from_tweets_file.toString().split(".");

const data_from_bad_words_file = fs.readFileSync("badWords.txt");

const array_of_bad_words = data_from_bad_words_file.toString().split(" ");

function level_of_profanity(count) {
  if (count === 0) {
    return "No bad words";
  } else if (count === 1) {
    return "Bad";
  } else if (count === 2) {
    return "Very Bad";
  } else {
    return "Too much bad words";
  }
}
for (let i = 0; i < array_of_sentences.length - 1; i++) {
  const array_of_words = array_of_sentences[i].split(" ");

  let count_of_bad_words = 0;

  for (let j = 0; j < array_of_words.length; j++) {
    const word = array_of_words[j].toLowerCase();

    if (array_of_bad_words.includes(word)) {
      count_of_bad_words++;
    }
  }

  const level = level_of_profanity(count_of_bad_words);

  result_arr.push({
    sentence: array_of_sentences[i],

    count_of_profanity: count_of_bad_words,

    level_of_bad_words: level,
  });
}

result_arr.forEach((obj) => {
  console.log(
    `"${obj.sentence}" has ${obj.count_of_profanity} bad words and level of profanity is "${obj.level_of_bad_words}"`
  );

  console.log("\n");
});
