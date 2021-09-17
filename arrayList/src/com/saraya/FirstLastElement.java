package com.saraya;


import java.util.List;

public class FirstLastElement {

		public boolean  firstArray(int num[])
		{
			return ((num[0]==6) || (num[num.length-1]==6));
		}
		
		
		public boolean filterNumArray(int[] numList) {
			
			return ((numList[0]==1) && (numList.length-1==1));
		  }
		
		
		public boolean tooArrayEqualElementArray(int[] arrayA,int[]arrayB) {
				
				return ((arrayA[0]==arrayA[0]) || (arrayA.length-1==arrayB.length-1));
			  }
		
		
		public int sumNumArray(int[] numArray) {
			int sum =0;
			for(int val:numArray){
				sum+=val;
			}
	
			return sum;
		  }
		
		public void fizzBuzz(List<Integer> numlist) {
			for(Integer val:numlist){
				
			if (val%3==0 && val%5==0) {
				System.out.println("FizzBuzz");	
			}
			
			else if (val%3==0) {
				System.out.println("Fizz");	
			}
			
			else if (val%5==0) {
				System.out.println("Buzz");	
			}
			else {
				System.out.println(val);	
		}
				
	}

 }
}
