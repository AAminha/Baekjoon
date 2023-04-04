import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        int[] a = new int[t];
        int[] b = new int[t];

        for(int i = 0; i < t; i++) {
            a[i] = scanner.nextInt();
            b[i] = scanner.nextInt();
        }

        for(int i = 0; i < t; i++) {
            System.out.println(a[i] + b[i]);
        }

        scanner.close();
    }
}