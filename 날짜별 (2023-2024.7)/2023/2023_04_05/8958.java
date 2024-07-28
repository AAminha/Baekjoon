import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        String[] test = new String[num];
        int sum;

        for(int i = 0; i < num; i++) {
            test[i] = scanner.next();
        }

        for(int i = 0; i < num; i++) {
            sum = 0;
            int score = 0;
            for(int j = 0; j < test[i].length(); j++) {
                if(test[i].charAt(j) == 'O'){
                    score++;
                    sum += score;
                } else {
                    score = 0;
                }
            }

            System.out.println(sum);
        }

        scanner.close();
    }
}