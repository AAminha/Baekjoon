import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            String num = scanner.next();
            if (num.equals("0")) break;
            boolean check = true;
            for (int i = 0; i < (num.length() / 2); i++) {
                if (num.charAt(i) != num.charAt(num.length() - 1 - i)) {
                    System.out.println("no");
                    check = false;
                    break;
                }
            }
            if(check) System.out.println("yes");
        }
        scanner.close();
    }
}