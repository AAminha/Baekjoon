import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        int n = scanner.nextInt();

        for(int i = 0; i < n; i++) {
          int price = scanner.nextInt();
          int count = scanner.nextInt();
          x -= price * count;
        }
        
        if(x == 0) System.out.println("Yes");
        else System.out.println("No");
        scanner.close();
    }
}