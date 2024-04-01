import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int res = 666;

        while(true) {
            if(String.valueOf(res).contains("666")) {
                n--;
                if(n == 0) break;
            }
            res++;
        }

        System.out.println(res);

        scanner.close();
    }
}