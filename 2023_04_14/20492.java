import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        double res1 = n * 0.78;
        double res2 = n * 0.8 + n * 0.2 * 0.78;

        System.out.println((int)res1 + " " + (int)res2);
        scanner.close();
    }
}