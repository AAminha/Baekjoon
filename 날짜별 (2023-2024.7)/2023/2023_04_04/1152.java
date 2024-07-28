import java.util.StringTokenizer;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String st = scanner.nextLine();
        StringTokenizer res = new StringTokenizer(st, " ");
        System.out.println(res.countTokens());

        scanner.close();
    }
}