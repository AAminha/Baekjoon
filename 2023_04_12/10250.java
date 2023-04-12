import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        for(int i = 0; i < t; i++) {
            int h = scanner.nextInt();
            int w = scanner.nextInt();
            int n = scanner.nextInt();

            int resH = 0;
            int resW = 0;

            for(int j = 0; j < w; j++) {
                for(int k = 0; k < h; k++) {
                    n--;
                    if(n == 0) {
                        resH = k + 1;
                        resW = j + 1;
                    }
                }
            }

            System.out.println(resH * 100 + resW);
        }

        scanner.close();
    }
}