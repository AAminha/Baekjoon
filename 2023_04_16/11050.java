import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int k = scanner.nextInt();
        int res = 1;

        for(int i = 0; i < k; i++) {
            res = (n - i) * res / (i + 1);
        }

        System.out.println(res);
        scanner.close();
    }
}