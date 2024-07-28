import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        String[] words = new String[n];

        for(int i = 0; i < n; i++) {
            words[i] = scanner.next();
        }

        for(int i = 0; i < n-1; i++) {
            for(int j = i+1; j < n; j++) {
                if(words[i].length() > words[j].length()) {
                    String tmp = words[i];
                    words[i] = words[j];
                    words[j] = tmp;
                } else if (words[i].length() == words[j].length()) {
                    int res = words[i].compareTo(words[j]);
                    if (res == 0) {
                        words[j] = words[n - 1];
                        j--;
                        n--;
                    } else if (res > 0) {
                        String tmp = words[i];
                        words[i] = words[j];
                        words[j] = tmp;
                    }
                }
            }
        }

        for(int i = 0; i < n; i++) {
            System.out.println(words[i]);
        }

        scanner.close();
    }
}