import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = scanner.nextInt();
        int[] score = new int[count];
        double[] newScore = new double[count];
        int best = 0;
        double sum =  0;

        for(int i = 0; i < count; i++) {
            score[i] = scanner.nextInt();
        }

        for(int i = 0; i < count; i++) {
            if(best < score[i]) best = score[i];
        }

        for(int i = 0; i < count; i++) {
            newScore[i] = (double)score[i] / best * 100;
            sum += newScore[i];
        }

        System.out.println(sum / count);

        scanner.close();
    }
}