
/*

FizzBuzz

Print integers up to given value. For ints divisible by 3, print Fizz, for ints divisible by 5, print Buzz, and for ints divisible by both, print FizzBuzz.

*/

public class FizzBuzz {	
	public static void main(String[] args) {
        
		int testInt = 200;
		
		for (int i = 0; i <= testInt; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				System.out.println("FizzBuzz"); 
			} else if (i % 3 == 0) {
				System.out.println("Fizz"); 
			} else if (i % 5 == 0) {
				System.out.println("Buzz"); 
			} else {
				System.out.println(i);
			}
		}	
	}
}
