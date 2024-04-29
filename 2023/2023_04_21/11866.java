import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        int[] arr = new int[n];
        int currentIndex = -1;

        System.out.print("<");
        for(int i = 0; i < n; i++) {
            int cnt = 0;
            while(cnt < k) {
                if(currentIndex != n - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }

                if(arr[currentIndex] != -1) {
                    cnt++;
                }
            }

            System.out.print(currentIndex + 1);
            if(i < n-1) {
                System.out.print(", ");
            } else {
                System.out.println(">");
            }
            arr[currentIndex] = -1;
        }

        br.close();
    }
}