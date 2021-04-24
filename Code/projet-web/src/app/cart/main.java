public class IntegerList {
    int[] intList;

    public IntegerList() {
        //intList = new int[size];
        //not even sure why this is here
    }

  

    public int binarySearch(int[] array, int left, int right, int target) {
        // Base condition (search space is exhausted)
        if (left > right) {
            return -1;
        }

        // find the mid-value in the search space and
        // compares it with the target

        int mid = (left + right) / 2;

        // overflow can happen. Use below
        // int mid = left + (right - left) / 2;

        // Base condition (a key is found)
        if (target == array[mid]) {
            return mid;
        }

        // discard all elements in the right search space,
        // including the middle element
        else if (target < array[mid]) {
            return binarySearch(array, left, mid - 1, target);
        }

        // discard all elements in the left search space,
        // including the middle element
        else {
            return binarySearch(array, mid + 1, right, target);
        }
    }


    public void sort(int randomList[]){
//        sort intList here
 
    for (int i = 0; i < randomList.length - 1; i++) {  
        int index = i;  
    for (int j = i + 1; j < randomList.length; j++){  
        if (randomList[j] < randomList[index]){  
            index = j; //lowest index
         }  
        }  
         int lowerNumber = randomList[index];   
        randomList[index] = randomList[i];  
        randomList[i] = lowerNumber;  
    }  
}

}
import java.util.*;

public class IntegerListDriver {

    public static void main(String[] args) {
        int[] randomList =  {19,62,26,87,100,16,31,76,11,83,33,21,64,73,77,98,56,89,97,30,78,96,69,50,47,55,12,17,48,28,42,46,93,27,84,75,10,34,20,22,72,13,51,45,65,54,25,94,99,52,36,71,40,79,85,70,59,53,58,60,15,29,86,57,24,67,90,44,32,74,80,18,41,81,35,82,38,91,14,66,39,43,68,88,37,23,92,61,63,49,95};
        
        Scanner input = new Scanner(System.in);
        System.out.println("Enter how many numbers you want in your list:");
        
        int size = input.nextInt();
        
        int [] list = new int[size];

        for (int i = 0; i < list.length; i++) {
            list[i] = randomList[i];
        }

        System.out.println(Arrays.toString(list)); //not sorted list

        IntegerList object = new IntegerList();

        object.sort(list);

        System.out.println(Arrays.toString(list)); //sorted list correctly

       

        //String safeword = "DONE";

       // int exit = Integer.parseInt(safeword);
        
        while (true) {
        
        System.out.println("Enter a number to find index ENTER DONE TO CLOSE");
        String target = input.nextLine()
           
            try {
                int c = Integer.parseInt(target);
                int left = 0;
                int right = list.length - 1;
        
                int index = object.binarySearch(list, left, right, c);
        
                if (index != -1) {
                    System.out.println("Element found at index " + index);
                } else {
                   System.out.println("Element not found in the array");
                }
        
            } catch (Exception e) {
               if (target.equals("DONE")){
                   break;
               }
               else{
                   System.out.println("Input Error");
                   continue
               }
            }

      
    }