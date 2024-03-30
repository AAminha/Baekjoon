import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] num = new int[8];

        for(int i = 0; i < 8; i++) {
            num[i] = scanner.nextInt();
        }

        if(num[0] == 1) {
            for(int i = 0; i < 8; i++) {
                if(num[i] != i+1) {
                    System.out.println("mixed");
                    return;
                }
            }
            System.out.println("ascending");
        } else if(num[0] == 8) {
            for(int i = 0; i < 8; i++) {
                if(num[i] != 8-i) {
                    System.out.println("mixed");
                    return;
                }
            }
            System.out.println("descending");
        } else {
            System.out.println("mixed");
        }

        scanner.close();
    }
}