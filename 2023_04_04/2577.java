import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int[] num = new int[10];
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        String res = Integer.toString(a * b * c);
        for(int i = 0; i < res.length(); i++) {
            num[res.charAt(i)-48]++;
        }

        for(int i = 0; i < 10; i++) {
            System.out.println(num[i]);
        }

        scanner.close();
    }
}