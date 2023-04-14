import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        int sum = 0;

        for(int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        for(int i = 0; i < n; i++) {
            boolean prime = true;

            if(arr[i] == 1) prime = false;
            else if (arr[i] > 2) {
                for(int j = 2; j < arr[i]; j++) {
                    if(arr[i] % j == 0) {
                        prime = false;
                        break;
                    }
                }
            }

            if(prime) sum++;
        }

        System.out.println(sum);
        scanner.close();
    }
}