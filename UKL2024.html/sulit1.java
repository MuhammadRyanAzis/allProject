import java.util.Scanner;

public class sulit1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Meminta jumlah siswa
        System.out.print("Masukkan jumlah siswa: ");
        int jumlahSiswa = input.nextInt();

        double totalNilai = 0; // Variabel untuk menjumlahkan nilai

        // Loop untuk memasukkan nilai setiap siswa
        for (int i = 1; i <= jumlahSiswa; i++) {
            System.out.print("Masukkan nilai siswa ke-" + i + ": ");
            double nilai = input.nextDouble();
            totalNilai += nilai; // Menambahkan nilai ke total
        }

        // Menghitung rata-rata
        double rataRata = totalNilai / jumlahSiswa;

        // Menampilkan hasil
        System.out.println("Rata-rata nilai adalah: " + rataRata);
    }
}
