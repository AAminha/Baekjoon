import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        String num = scanner.next();
        int sum = 0;

        for(int i = 0; i < n; i++) {
            sum += (int)num.charAt(i)-48;
        }
        
        System.out.println(sum);

        scanner.close();
    }
}