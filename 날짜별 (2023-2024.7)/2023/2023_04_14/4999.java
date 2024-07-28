import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String j = scanner.next();
        String d = scanner.next();

        if(j.length() < d.length()) {
            System.out.println("no");
        } else {
            System.out.println("go");
        }

        scanner.close();
    }
}