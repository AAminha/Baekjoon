import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        char[][] board = new char[n][m];
        int min = 64;

        for(int i = 0; i < n; i++) {
            String line = scanner.next();
            for(int j = 0; j < m; j++) {
                board[i][j] = line.charAt(j);
            }
        }

        for(int i = 0; i < n-7; i++) {
            for(int j = 0; j < m-7; j++) {
                int b = 0;
                int w = 0;
                for(int k = i; k < i+8; k++) {
                    for(int l = j; l < j+8; l++) {
                        if((k + l) % 2 == 0 && board[k][l] != 'B') b++;
                        else if((k + l) % 2 == 1 && board[k][l] != 'W') b++;

                        if((k + l) % 2 == 0 && board[k][l] != 'W') w++;
                        else if((k + l) % 2 == 1 && board[k][l] != 'B') w++;
                    }
                }
                if(min > b) min = b;
                if(min > w) min = w;
            }
        }

        System.out.println(min);

        scanner.close();
    }
}