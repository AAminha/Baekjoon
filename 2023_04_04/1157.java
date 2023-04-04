import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        final int ALPHA = 26;
        int index = 0;
        int flag = 1;
        Scanner scanner = new Scanner(System.in);
        int[] alpha = new int[ALPHA];
        String st = scanner.nextLine();
        for (int i = 0; i < st.length(); i++) {
            char c = st.charAt(i);

            if(c >= 65 && c <= 90) {
                alpha[c-65]++;
            } else {
                alpha[c-97]++;
            }
        }

        for (int i = 0; i < ALPHA; i++) {

            if (i == 0) continue;
            if (alpha[index] < alpha[i]) {
                index = i;
                flag = 1;
            } else if (alpha[index] == alpha[i]) {
                flag++;
            } else {;}
        }

        if(flag > 1) System.out.println("?");
        else System.out.println((char)(index + 65));

        scanner.close();
    }
}