import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
        long sum = 7;
        int res = 2;

        if(n == 1) {
            System.out.println(1);
        } else {
            while(n > sum) {
                sum += 6 * res;
                res++;
            }
            System.out.println(res);
        }

        scanner.close();
    }
}