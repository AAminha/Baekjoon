import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int h = scanner.nextInt();
        int m = scanner.nextInt();

        if(m >= 45) {
            m -= 45;
        } else {
            m += 15;
            if(h > 0) h--;
            else h = 23;
        }

        System.out.println(h + " " + m);

        scanner.close();
    }
}