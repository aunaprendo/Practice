






You should have a function named fillArrContainer that takes an HTML element as the first argument and an array as the second argument.
The fillArrContainer should take an element as its first parameter and an array of integers as its second parameter, then populate the element with five span elements, with each span showing one of the integers from the array.
You should have a function named isOrdered that takes two integers and returns a boolean indicating if the first integer is less than or equal to the second.
You should have a function named swapElements that takes an array of integers and a numeric index.
The swapElements function should modify the array in place by swapping the element at the passed index and the following element if isOrdered returns false.
You should have a function named highlightCurrentEls that takes an HTML element and a numeric index.
The highlightCurrentEls function should set the border of the given element's child at the given index, and the child immediately after the index, to have a dashed style, a red color, and a width of your choice.
When you click #generate-btn you should use the fillArrContainer function to fill #starting-array with five span elements, each with a random number as its text. If present, other elements should be removed from #array-container.
You should implement the Bubble Sort algorithm so that after you click #sort-btn, #array-container contains a div element for each of the steps required by the Bubble Sort algorithm to sort the starting array, including the div representing the starting array and a div representing the sorted array. The functions you have created so far can be useful here.
Each div should contain five span elements, representing the array in its current state of being sorted.
After you click #sort-btn, #starting-array should represent the starting step with the initial array and the first two integers highlighted.
For each sorting step, you should use highlightCurrentEls to highlight the two numbers that are being compared, and swap them in the next step by using swapElements.


Waiting: 7. Your generateContainer function should return an empty div element.
Waiting: 8. You should have a function named fillArrContainer.
Waiting: 9. Your fillArrContainer() should take an element as its first parameter and an array of integers as its second parameter, then populate the element with five span elements, with each span showing one of the integers from the array.
Waiting: 10. You should have a function named isOrdered.
Waiting: 11. Your isOrdered function should take two integers and should return a boolean indicating if the first integer is less than or equal to the second.
Waiting: 12. You should have a function named swapElements.
Waiting: 13. Your swapElements function take an array of integers and a numeric index as arguments. It should modify the array passed in place by swapping the element at the given index and the following element if the first element is greater than the second.
Waiting: 14. You should have a function named highlightCurrentEls.
Waiting: 15. Your highlightCurrentEls function should give the descendants of the specified element, located at the given index and the next index, a border that is dashed, red, and set to a width of your choice.
Waiting: 16. When you click #generate-btn you should fill #starting-array with five span elements, each with a random number between 1 and 100 as its text.
Waiting: 17. When #starting-array already contains a generated array, or #array-container contains the sorted array, clicking the #generate-btn should remove other elements in the #array-container, leaving only #starting-array with newly generated numbers.
Waiting: 18. After you click #sort-btn, #array-container should contain as many div elements as the steps required by the Bubble Sort algorithm to sort the starting array, including the div representing the starting array and a div representing the sorted array.
Waiting: 19. After you click #sort-btn, each div within #array-container should contain five span, each with a number as its text, and arranged to represent the steps required by Bubble Sort algorithm to sort the starting array.
Waiting: 20. When you click the #sort-btn, you should make use of the highlightCurrentEls function to highlight the elements being compared in each step.
Waiting: 21. After you click #sort-btn, #starting-array should represent the starting step with the initial array and the first two integers highlighted using highlightCurrentEls.