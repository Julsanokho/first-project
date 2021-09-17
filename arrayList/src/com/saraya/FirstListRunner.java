package com.saraya;

import java.util.ArrayList;
import java.util.List;

public class FirstListRunner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		FirstLastElement myArray = new FirstLastElement();
//		int[] num = {6,1,4,5,7,8,9,0,6};
//		System.out.println(myArray.firstArray(num));
//		int[] numList = {1,3,4,5,1};
//		FirstLastElement myArray1 = new FirstLastElement();
//		System.out.println(myArray1.filterNumArray(numList));
//		
//		int[] arrayA= {1, 2, 3,7, 3};
//		 
//		 int[] arrayB= {1, 2, 3, 3};
//		 FirstLastElement mytooArray = new FirstLastElement();
//			System.out.println(mytooArray.tooArrayEqualElementArray(arrayA,arrayB));
//
//			FirstLastElement mySumArray = new FirstLastElement();
//			System.out.println(mySumArray.sumNumArray(arrayA));
			
			FirstLastElement myList = new FirstLastElement();
			List<Integer> list = List.of(1,3,5,7,89,67,45,3);
			List<Integer> list2 = new ArrayList<>(list); 
			myList.fizzBuzz(list2);
	}

}
