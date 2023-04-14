# Space Piracy Solution

## Realization 1: Hexadecimal
After inputting a number with a length of ten to fifteen and seeing some error messages about length being something like `A` or `E`, or after seeing a letter appear in the *Result Overlap* column, one (hopefully) realizes, in conjunction with the note on fingers in the flavor text, that the numbers inputted are being interpreted in hexadecimal, or base 16. This should prompt the solver to also check, and find, that the letters A, B, C, D, E, and F are all acceptable as part of an inputted number (though all other non-numeric characters are not).

## Realization 2: Guessing Game
This realization may occur before noticing the hexadecimal, but it should become clear that this is a black-box style guessing game. The number inputted has some relationship to a guess being made relative to the 12 rows in the table, and the *Result Overlap* column is displaying overlap of their guess with some hidden answers. The underlined orange section of each secret password is the overlap of the guess with the password, and any characters that are revealed are exact matches.

## Realization 3: Transformations/Functions
After inspecting some of the error messages that appear in the table with various guessed numbers and/or interpreting the "favorite functions" part of the flavor text, one realizes that the overlap is not the overlap of the secret numbers with the guessed number but rather the secret numbers' overlap with 12 distinct transformations of the inputted number. Errors (as opposed to warnings) occur when the transformation being applied fails to produce a valid result, and no overlap is shown. These error messages can be helpful in determining what the transformations are. The secret transformations are as follows:

1. Dividing by 2
2. Reversing the input
3. Multiplying by 3
4. Multiplying by 5
5. Adding 11...1 to the input, where the number added matches the length of the input; for instance, an input of 3F2 would have 111 added, resulting in 503
6. Dividing by 3
7. Subtracting 22...2, where length is matched as in transformation 5
8. "Peeling", where the first and last digit (or rather, hexit) are copied down and the process is repeated on the rest of the input; for instance, ABC123 would produce A3B2C1, where A3, B2, and C1 are iteratively "peeled" from the outside of the input
9. Dividing by 5
10. Subtracting the input from FF...F, where length is matched as in transformations 5 and 7
11. Squaring the input
12. "Cut and Swap": the input string is cut in half (with the left half containing the middle in the case of odd length), and these halves are swapped; for instance, ABCD123 results in 123ABCD

## Solution Step 1: Correct Inputs
After realizing the various factors involved in the puzzle and determining the transformations involved, one can then find the inputs that overlap exactly with each password, which result in a green highlight in the table. The correct inputs, along with the overlapped passwords, are as follows:

1. A5C1C0DE  |  52E0E06F
2. DEC15105  |  50151CED
3. D1DAC1C5  |  27590454F
4. 60DD55E5  |  1E452AD79
5. F0CEFEED  |  101E00FFE
6. AC1D1F1D  |  395F0A5F
7. AB5CE5E5  |  893AC3C3
8. DAABA5E5  |  D5AEA5BA
9. 5AC1F1CE  |  1226C9F6
10. B51C1DEA  |  4AE3E215
11. A550C1AE  |  6AC13323EB47D400
12. 6E0D51C5  |  51C56E0D

## Solution Step 2: Hexspeak
After looking at the inputs for a moment, especially 1, 5, and 10 (though hopefully all), it should become clear that each input is the "hexspeak" encoding of some word or phrase, where A-F are simply those letters, `0` is an `O`, `1` is an `I`, `5` is an `S`, and `6` is a `G`. The passwords themselves are effectively random, as they are simply what results from transforming these hexspeak words and phrases with relatively arbitrary functions. Converting the inputs to pure letters results in the following:

1. ASCICODE
2. DECISIOS
3. DIDACICS
4. GODDSSES
5. FOCEFEED
6. ACIDIFID
7. ABSCESES
8. DAABASES
9. SACIFICE
10. BSICIDEA
11. ASSOCIAE
12. GEODSICS

## Solution Step 3: Extraction
Each of these words or phrases is missing a single letter. The letters and the complete words/phrases are as follows:

I: ASCIICODE

N: DECISIONS

T: DIDACTICS

E: GODDESSES

R: FORCEFEED

E: ACIDIFIED

S: ABSCESSES

T: DATABASES

R: SACRIFICE

A: BASICIDEA

T: ASSOCIATE

E: GEODESICS

Reading down the column of missing letters reveals `INTEREST RATE`, the final answer.

## Canned Hints / Hinting Suggestions:

* If solvers are not getting that the numbers are hexadecimal, perhaps something like "Ask Mark Watney about alphabets." which a simple google search will reveal as a reference to The Martian (the inspiration for the title of this puzzle) and how Mark Watney uses hexadecimal in the movie(/book).

* If solvers are not discovering the transformations, one way of hinting some of the functions is to call attention to the error messages. Perhaps something like "Failure can be more informative than success". While some of the transformations may be more difficult to guess than others, the puzzle should still be solvable with a few intermediate answers missing, and mathematical functions such as division should be discoverable through testing of smaller numbers and seeing that, for instance, only multiples of 3 work for the dividing by 3 transformation.