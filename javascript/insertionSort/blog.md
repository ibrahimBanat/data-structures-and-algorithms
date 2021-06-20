# Insertion Sort

This blog post is written upon a task required in code fellows data-structures-and-algorithms javascript daily challenges.

In this blog post i will focus on Insertion Sort. I will explain what is insertion sort and try to break down the concept of insertion sort step by step and providing the code, visiulizition and test for it.

before going further, I will introduce myself. I am Ibrahim Banat a full stack web developer, specialized in MERN stack. I just finished a bootcamp in web development from code fellows and sponsered by ASAC.

## what is insertion sort ?

Insertion sort is the simple sorting algorithm which is commonly used in the daily lives while ordering a deck of cards. In this algorithm, we insert each element onto its proper place in the sorted array. This is less efficient than the other sort algorithms like quick sort, merge sort, etc. [source](https://www.javatpoint.com/insertion-sort)

## Problem domain

writing a function called `insertonSort` which takes an array of intgers as input and returns and array of these intgers in sorted order from least ot the largest.

## Algorithm

The `insertonSort` method works by building up a sorted array with the first element, then looking to the next element, if it's less that the previous elements, it swaps the element backwards until it's in sorted position. it continue iterating through the input list, swapping new items backwards into sorted position until it reache the end.

in conclusion:

1. If the item is the first element, it's already sorted.
2. Incpect the next element
3. Compare the element to the sorted sub-list.
4. Swap the element in the sub-sorted array and push the element to it's sorted position.
5. Repeat until list is ordered.

## Pseudocode

```
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

```

## Visialization

- why we need visualization for data structures?

> Consequently exercises in computer science
> should also be supported not only by giving feedback
> to the program code, but also by visualizing objects
> and data structures produced by the program code
> created by learners. These visualizations of each
> individual solution would be an important link
> between contents of the course and feedback for
> exercises. Moreover, they can help learners in
> debugging their program code, because an image
> of the data structure may give them some useful
> information without any need for inserting debug
> statements into their program code.
>
> VISUALIZING DATA STRUCTURES IN AN E-LEARNING SYSTEM, M.Striewe & M.Goedicke [source](https://www.scitepress.org/papers/2010/27738/27738.pdf)

- for the visualizations, i am using a cool website called [visualgo](https://visualgo.net/).

first thing first, this is our input list of intgers:

![inputlist](./assets/1.PNG)

we will pass this list to the method, and the method will return a sorted copy of this list, we will come later to the impelmentation of the code.

Now we will take the first element, and since it's the first element, it's already sorted.

![firstlement](./assets/2.PNG)

moving to the next element, which is (44), figure where to insert this extracted element; comparing with sorted sub-list which contains (3).

![seconedelement](./assets/3.PNG)

becasue (44) is not smaller than (3) then insert the lement at the current position. the sub-sorted list should look like this:

![third element](./assets/4.png)
