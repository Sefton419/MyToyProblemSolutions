import java.io.*;
import java.util.*;

/*

In the Quicksort challenges, you sorted an entire array. Sometimes, you just need specific information about a list of numbers, and doing a full sort would be unnecessary. Can you figure out a way to use your partition code to find the median in an array?

Challenge 
Given a list of numbers, can you find the median?

*/

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int arrLength = scan.nextInt();
        int[] arr = new int[arrLength];      
        
        for (int i = 0; i < arrLength; i++) {
            arr[i] = scan.nextInt();
        }
        
        // sort array
        Arrays.sort(arr);

        double middleDoubleInd = Math.floor(arrLength/2);
        int middleInd = (int) middleDoubleInd;

        // if length of array is even
        if (arrLength % 2 == 0)
           System.out.println((arr[middleInd] + arr[middleInd + 1]) / 2);   
        else 
           System.out.println(arr[middleInd]);
        
    }
}