import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int year = scanner.nextInt();
        int res;

        if(year % 4 == 0) {
            if(year % 100 != 0) {
                res = 1;
            } else if(year % 400 == 0) {
                res = 1;
            } else {
                res = 0;
            }
        } else {
            res = 0;
        }

        System.out.println(res);

        scanner.close();
    }
}