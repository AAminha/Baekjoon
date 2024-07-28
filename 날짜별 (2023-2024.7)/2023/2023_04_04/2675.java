import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int test = scanner.nextInt();
        int[] r = new int[test];
        String[] s = new String[test];

        for(int i = 0; i < test; i++) {
            r[i] = scanner.nextInt();
            s[i] = scanner.nextLine().trim();
        }

        for(int i = 0; i < test; i++) {
            for(int j = 0; j < s[i].length(); j++) {
                for(int k = 0; k < r[i]; k++) {
                    System.out.print(s[i].charAt(j));
                }
            }
            System.out.println();
        }

        scanner.close();
    }
}