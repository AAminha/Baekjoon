import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();

        int max = 0;
        int min = 0;

        for(int i = 1; i <= num1 && i <= num2; i++) {
            if(num1 % i == 0 && num2 % i == 0) max = i;
        }

        for(int i = 1; ; i++) {
            if((max * i) % num1 == 0 && (max * i) % num2 == 0) {
                min = i * max;
                break;
            }
        }

        System.out.println(max);
        System.out.println(min);

        scanner.close();
    }
}