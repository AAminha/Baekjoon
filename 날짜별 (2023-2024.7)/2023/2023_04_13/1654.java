import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int k = scanner.nextInt();
        long n = scanner.nextLong();
        long[] arr = new long[k];
        long min = 1;
        long max = 1;


        for (int i = 0; i < k; i++) {
            arr[i] = scanner.nextLong();
            if(max < arr[i]) max = arr[i];
        }

        while(min <= max) {
            long len = (min + max) / 2;
            long cnt = 0;

            for(int i = 0; i < k; i++) {
                cnt += arr[i] / len;
            }

            if(cnt >= n) {
                min = len + 1;
            } else {
                max = len - 1;
            }
        }

        System.out.println(max);

        scanner.close();
    }
}