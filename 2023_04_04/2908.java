import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        String st = "";
        int res1;
        int res2;

        for(int i = 2; i >= 0; i--) {
            st += Integer.toString(num1).charAt(i);
        }
        res1 = Integer.parseInt(st);
        st = "";

        for(int i = 2; i >= 0; i--) {
            st += Integer.toString(num2).charAt(i);
        }
        res2 = Integer.valueOf(st);

        if(res1 > res2) System.out.println(res1);
        else System.out.println(res2);

        scanner.close();
    }
}