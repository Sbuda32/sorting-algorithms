/**
 * 
    Author:  Sbuda32

 */

 //Unsorted Arrays
var arrayList = [9, 7, 8, 3, 2, 1];
var arrayList2 = [7, 4, 5, 2];

/**Quick Sort
 *  
 * Quick sort is based on the divide-and-conquer approach based on the idea of choosing one element as a 
 * pivot element and partitioning the array around it such that: Left side of pivot contains all the 
 * elements that are less than the pivot element Right side contains all elements greater than the pivot
 * 
 * It reduces the space complexity and removes the use of the auxiliary array that is used in merge sort. 
 * Selecting a random pivot in an array results in an improved time complexity in most of the cases.
 * 
 * 
*/

//Partition, moves the element of the array, such that elemnts less than pivot are on the left and elements
//that are greater are on the right.
function partition(array, start, end){
    
    //Declare starting variables for partitoned and unpartitioned elements of a list
    let i = start + 1;
    let piv = array[start];

    //Iterate the array and check elements that are less then pivot and move them to the left
    for(let j = start + 1; j <= end; j++){
        if(array[j] < piv){
            
            //Move to left if less than pivot
            swap(array, i, j)
            i+=1;           //Increment by 1, so the next value can be next to the value last moved
        }
    }
    
    //Move the pivot to last position
    swap(array, start, i - 1);
    
    //return pivot position
    return i - 1;
}

//Swap function used to swap two elements from different positions.
var swap = function(inputArray, index_A, index_B){

    var temp = inputArray[index_A];
    inputArray[index_A] = inputArray[index_B];
    inputArray[index_B] = temp;
}

//Used to find a random pivot position in an unsorted array
var random_partition = function(start, end){

    var randomPivot = Math.floor(Math.random() * (end - start + 1));
    
    //return random value between 0 and (end - start) values
    return randomPivot;
}

//Method used to sort the array
var quick_sort = function(array, start, end){

    if(start < end){
        var piv_pos = partition(array, start, end);

        quick_sort(array, start, piv_pos - 1);
        quick_sort(array, piv_pos + 1, end);
    }
    console.log(array);
}

/**
 *                      Magic Happen Below, Uncomment to test functions
 */

//swap(arrayList, 0, 3);
//random_partition(arrayList, 0, 5);
//partition(arrayList, 0, 5);
//quick_sort(arrayList, 0, 5);

/**Quick Sort */

/**Merge Sort 
 * 
 * Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several 
 * sub-lists until each sublist consists of a single element and merging those sublists in a manner that 
 * results into a sorted list.
 * 
 * => Divide the unsorted list into N sublists, each containing 1 element.
   => Take adjacent pairs of two singleton lists and merge them to form a list of 2 elements. will now convert into N/2 lists of size 2.
   => Repeat the process till a single sorted list of obtained.
*/
function merge_sort(array, start, end){

    if(start < end){
        var mid = Math.floor((start + end) / 2);
        
        console.log(start);
        merge_sort(array, start, mid);
        merge_sort(array, mid + 1, end);
        
        merge(array, start, mid, end);
    }
}

function merge(array, start, mid, end){

    //Starting positions
    var p = start, q = mid + 1;

    var tempArray = [], k = 0;

    for(var i = start; i <= end; i++){
        if(p > mid){

            tempArray[ k++ ] = array[ q++ ];
        }
        else if( q > end){

            tempArray[ k++ ] = array[ p++ ];
        }
        else if(tempArray[ p ] < tempArray[ q ]){

            tempArray[ k++ ] = array[ p++ ];
        }
        else{

            tempArray[ k++ ] = array[ q++ ];
        }
    }

    for(var p = 0; p < k; p++){

        array[ start++ ] = tempArray[ p ];
    }
    console.log(tempArray);
}

/**
 *                      Magic Happen Below, Uncomment to test functions
 */

//merge_sort(arrayList, 0, 5);
/**Merge Sort */

/**Insertion sort
 * 
 * Insertion sort is based on the idea that one element from the input elements is consumed in each 
 * iteration to find its correct position i.e, the position to which it belongs in a sorted array.

 * It iterates the input elements by growing the sorted array at each iteration. It compares the current 
 * element with the largest value in the sorted array. If the current element is greater, then it leaves 
 * the element in its place and moves on to the next element else it finds its correct position in the 
 * sorted array and moves it to that position. This is done by shifting all the elements, which are larger 
 * than the current element, in the sorted array to one position ahead.
 */

function insertion_sort(array, length){

    for(var i = 0; i < length; i++){

        var tempArray = array[i];
        var j = i;

        while(  j > 0  && tempArray < array[ j -1]) {
        
            array[j] = array[j - 1];
            j = j - 1;
        }

        array[j] = tempArray;
    }

    console.log(array);
}

/**
 *                      Magic Happen Below, Uncomment to test functions
 */

//insertion_sort(arrayList2, arrayList2.length);
/**Insertion sort */

/**Selection sort
 * 
 * The Selection sort algorithm is based on the idea of finding the minimum or maximum element in an unsorted 
 * array and then putting it in its correct position in a sorted array.
 * 
 */

function selection_sort(array, arrayLength){

     // temporary variable to store the position of minimum element
    var minimum;

    // reduces the effective size of the array by one in  each iteration.
    for(var i = 0; i < arrayLength - 1; i++){

       // assuming the first element to be the minimum of the unsorted array .
        minimum = i;

        // gives the effective size of the unsorted  array .
        for(var j = i + 1; j < arrayLength; j++){

            if(array[ j ] < array[ minimum ]){

                //finds the minimum element
                minimum = j;
            }
        }
        // putting minimum element on its proper position.
        swap(array, minimum, i);
    }

    console.log(array);
}

/**
 *                      Magic Happen Below, Uncomment to test functions
 */

//selection_sort(arrayList2, arrayList2.length);
 /**Selection sort */

 /**Bogo Sort (AKA Monkey sort, Slow sort) 
  * 
  * BogoSort also known as permutation sort, stupid sort, slow sort, shotgun sort or monkey sort is a 
  * particularly ineffective algorithm based on generate and test paradigm. The algorithm successively 
  * generates permutations of its input until it finds one that is sorted.(Wiki)
    
  * For example, if bogosort is used to sort a deck of cards, it would consist of checking if the deck were 
  * in order, and if it were not, one would throw the deck into the air, pick the cards up at random, and 
  * repeat the process until the deck is sorted.
 */

 // To check if array is sorted or not 
 function isSorted(array, arrayLength){

    while(--arrayLength > 1){

        if(array[ arrayLength ] < array[ arrayLength - 1 ] ){

            console.log('false');
            return false;
            
        }
        else{

            console.log('true');
            return true;
        }
    }
 }

 // To generate permuatation of the array
 function shuffle(array, arrayLength){

    for(var i = 0; i < arrayLength; i++){

        swap(array, i, (Math.floor(Math.random()*arrayLength)));
    }
 }

 // Sorts array a[0..n-1] using Bogo sort 
 function bogosort(array, arrayLength){

    // if array is not sorted then shuffle 
    // the array again
    while( !isSorted(array, arrayLength) ){

        console.log(array);
        shuffle(array, arrayLength); 
    }
 }

 //function to print array to console
 function printArray(array){

    console.log(array);
 }

 /**
 *                      Magic Happen Below, Uncomment to test functions
 */

 shuffle(arrayList2, arrayList2.length);
 isSorted(arrayList2, arrayList2.length);
//bogosort(arrayList2, arrayList2.length);
printArray(arrayList2);
 /**Bogo Sort */