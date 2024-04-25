import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int ax = scanner.nextInt();
        int ay = scanner.nextInt();
        int az = scanner.nextInt();
        int cx = scanner.nextInt();
        int cy = scanner.nextInt();
        int cz = scanner.nextInt();

        System.out.println((cx - az) + " " + (cy / ay) + " " + (cz - ax));
        scanner.close();
    }
}