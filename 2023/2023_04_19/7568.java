import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        int[][] people = new int[n][3];

        for(int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            people[i][0] = Integer.parseInt(st.nextToken());
            people[i][1] = Integer.parseInt(st.nextToken());
            people[i][2] = 1;
        }

        for(int i = 0; i < n-1; i++) {
            for(int j = i + 1; j < n; j++) {
                if((people[i][0] > people[j][0]) && (people[i][1] > people[j][1])) {
                    people[j][2]++;
                } else if((people[j][0] > people[i][0]) && (people[j][1] > people[i][1])) {
                    people[i][2]++;
                }
            }
        }

        for(int i = 0; i < n; i++) {
            System.out.print(people[i][2] + " ");
        }

        br.close();
    }
}