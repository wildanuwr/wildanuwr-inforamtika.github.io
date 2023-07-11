<?php
// Mengambil data dari formulir kontak
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

// Mengirim email
$tujuan_email = 'kelompok7@gmail.com'; 
$subjek_email = 'Pesan dari Formulir Kontak';
$isi_email = "Nama: $nama\n\nEmail: $email\n\nPesan: $pesan";
$headers = "From: $email";

// Mengirim email
if (mail($tujuan_email, $subjek_email, $isi_email, $headers)) {
    echo '<h2>Pesan berhasil dikirim!</h2>';
    echo '<p>Terima kasih atas pesan yang Anda kirimkan.</p>';
} else {
    echo '<h2>Maaf, pesan gagal dikirim.</h2>';
    echo '<p>Silakan coba lagi nanti.</p>';
}
?>
