import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String n = br.readLine();
        int num = Integer.parseInt(n);
        int res = 1;

        for(; res < num; res++) {
            int sum = res;
            String st = String.valueOf(res);

            for(int i = 0; i < st.length(); i++) {
                sum += Character.getNumericValue(st.charAt(i));
            }

            if(sum == num) {
                System.out.println(res);
                break;
            }
        }

        if(res == num) System.out.println(0);
        br.close();
    }
}