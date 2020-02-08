package ygg;

import java.util.ArrayList;
import java.util.List;


	interface FuncInterface 
	{ 
	    // An abstract function 
	    void abstractFun(int x); 
	  
	    // A non-abstract (or default) function 
	    default void normalFun() 
	    { 
	       System.out.println("Hello"); 
	    } 
	} 
	  
	public class LambdaExpression {
	
		public static void main(String args[]) 
	    { 
	        // lambda expression to implement above 
	        // functional interface. This interface 
	        // by default implements abstractFun() 
	        FuncInterface fobj = (int x)->System.out.println(20*x); 
	  
	        // This calls above lambda expression and prints 100. 
	        fobj.abstractFun(5); 
	    } 
	} 

