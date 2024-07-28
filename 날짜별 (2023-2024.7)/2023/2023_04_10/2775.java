import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        for(int i = 0; i < t; i++) {
            int k = scanner.nextInt();
            int n = scanner.nextInt();
            int[][] home = new int[k+1][n];

            for(int j = 0; j < n; j++) {
                home[0][j] = j+1;
            }

            for(int j = 0; j < k+1; j++) {
                home[j][0] = 1;
            }

            for(int j = 1; j < k+1; j++) {
                for(int l = 1; l < n; l++) {
                    home[j][l] = home[j-1][l] + home[j][l-1];
                }
            }

            System.out.println(home[k][n-1]);
        }

        scanner.close();
    }
}