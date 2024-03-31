import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.next();
        int[] alpha = new int[26];

        for(int i = 0; i < 26; i++) {
            alpha[i] = -1;
        }

        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if(alpha[c - 97] == -1) alpha[c - 97] = i;
        }

        for(int i = 0; i < 26; i++) {
            System.out.print(alpha[i]);
            if(i != 25) System.out.print(" ");
            else System.out.println();
        }

        scanner.close();
    }
}