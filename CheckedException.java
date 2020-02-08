/*Author: Ritu Bala Rai
 *Description: Handling checked Exception.
 * */
package ygg;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class CheckedException {

	public static void main(String[] args) {

		{
		    try
		    {
		        FileReader file = new FileReader("somefile.txt");// Handle Checked Exception
		    } 
		    catch (FileNotFoundException e) 
		    {
		        //Alternate logic
		        e.printStackTrace();
		    }
		    catch(IOException e)
		    {
		    	System.out.println("File Not Found");//FileNotFound is subclass of IOException
		    }
		    
		   
		}

	}

}
