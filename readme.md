The timing result for the extraLargeArray was as follows: when extraLargeArray is passed to doublerAppend, the result is 2.8395 ms. When extraLargeArray is passed to doublerInsert, the timing result is 1.343853041 s.

|             | doublerInsert | doublerAppend |   |   |
|-------------|---------------|---------------|---|---|
| tinyArray   | 27.042 μs     | 88.083 μs     |   |   |
| smallArray  | 35.459 μs     | 76.459 μs     |   |   |
| mediumArray | 224.167 μs    | 146.125 μs    |   |   |
| largeArray  | 10.517708 ms  | 674.166 μs    |   |   |

When tinyArray and smallArray are passed into the two functions, doublerInsert had a shorter timing result.When mediumArray and largeArray were passed into the two functions, the doublerInsert had a bigger timing result than doublerAppend. From these results, it seems the pattern is that the larger an array is, when passed into both functions, it'll take longer for the doublerInsert function to run due to it using .unshift() to add the numbers to a new array. The .unshift() method adds items to the beginning of an array, shifting the other items in the array in order to add to the  first position which takes a lot longer than pushing the items to the end of an array as does the .push method. The doublerAppend function scales better since it runs in a shorter time, making it more efficient. 
