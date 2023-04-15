import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char[][] arr = new char[5][15];

        for(int i = 0; i < 5; i++) {
            String str = scanner.next();
            for(int j = 0; j < str.length(); j++) {
                arr[i][j] = str.charAt(j);
            }
            for(int j = str.length(); j < 15; j++) {
                arr[i][j] = ' ';
            }
        }

        for(int i = 0; i < 15; i++) {
            for(int j = 0; j < 5; j++) {
                if(arr[j][i] != ' ') {
                    System.out.print(arr[j][i]);
                }
            }
        }
        scanner.close();
    }
}