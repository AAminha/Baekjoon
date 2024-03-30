import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] num = new int[10];
        int[] res = new int[42];
        int sum = 0;

        for(int i = 0; i < 10; i++) {
            num[i] = scanner.nextInt();
        }

        for(int i = 0; i < 10; i++) {
            num[i] %= 42;
        }

        for(int i = 0; i < 10; i++) {
            res[num[i]]++;
        }
        
        for(int i = 0; i < 42; i++) {
            if(res[i] != 0) sum++;
        }
        
        System.out.println(sum);

        scanner.close();
    }
}