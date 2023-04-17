import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st1 = new StringTokenizer(br.readLine(), " ");
        StringTokenizer st2 = new StringTokenizer(br.readLine(), " ");

        int n = Integer.parseInt(st1.nextToken());
        int m = Integer.parseInt(st1.nextToken());
        int[] arr = new int[n];

        for(int i =0; i < n; i++) {
            arr[i] = Integer.parseInt(st2.nextToken());
        }

        int res = 0;

        for(int i = 0; i < n-2; i++) {
            for(int j = i + 1; j < n-1; j++) {
                for(int k = j + 1; k < n; k++) {
                    int sum = arr[i] + arr[j] + arr[k];
                    if(sum <= m && sum > res) {
                        res = sum;
                    }
                }
            }
        }

        System.out.println(res);

        br.close();
    }
}