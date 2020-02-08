/*Name: Ritu Bala Rai
 * Id:844539
 * Exception Handling using Try with Multiple catch Block and finally.
 */
package ygg;

public class ExceptionHandling {
	
		  public int[] arrayOfNumbers = new int[10];
		  public void writeList() {
		    try {
		      arrayOfNumbers[10] = 11; //Exception IndexOutOFBoound Exception Occur
		    } catch (NumberFormatException e1) {
		    	/* The Exception is thrown to this catch block but it can't handle 
		    	*this so it will throw to the second catch block.*/
		      System.out.println("NumberFormatException => " + e1.getMessage());
		    } catch (IndexOutOfBoundsException e2) {
		      System.out.println("IndexOutOfBoundsException => " + e2.getMessage());
		    }
		    finally{
		    	System.out.println("Finally block is always executed");
		  }
		}
		  }
		class Main {
		  public static void main(String[] args) {
			  ExceptionHandling e = new ExceptionHandling();
		    e.writeList();
		  }
		}



