import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int res = 0;
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 1; i <= n; i++) {
            queue.add(i);
        }

        while(true) {
            res = queue.poll();
            if(queue.size() == 0) break;

            int num = queue.poll();
            queue.add(num);
        }

        System.out.println(res);
        scanner.close();
    }
}