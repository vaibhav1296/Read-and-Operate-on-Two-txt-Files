I have taken two txt files named badWords.txt and twitterTweets.txt.

The twitterTweets file contains sentences from the tweets. So I am assuming that somehow we managed to get the sentences of tweets in a txt file.

The badWords file contains all possible bad words ( space separated )

#### About the content of both files

I am not using any offensive words in tweets here so I have simply taken fruits names as offensive words. The sentences in tweetsTXT file are meaningless.

#### About the result

I have simply counted the occurrance of bad words in each sentence and on the basis of the count I have taken the level of offence.

### How this program works

First just read the data from both file using fs module of Node.js. Convert the data into string. Apply split operation on string, that will convert it into an array. Then we will have two arrays from two files, one fill contain all the bad words and the second will contain all the sentences. Then loop through the sentence array ( one less then its length because the last sentence will have an empty string ). Pick a sentence, take its words one by one and check if our bad words array has these words. If yes then simply count the number of words. Now on the basis of the count I have displayed the result on console.

## Result

![ScreenShot](https://i.imgur.com/Pp1CB8P.png)
