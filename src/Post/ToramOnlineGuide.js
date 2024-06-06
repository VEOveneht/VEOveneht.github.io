import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';

const ToramGuide = () => {
    return (
        <>
        <Navigation />
        <main>
            <div className='container'>
                <div className='wrap'>
                    <h2>Toram Online GUIDE (ID)</h2>
                    <p>Halo Petualang, selamat datang di blog saya.</p>
                    <p>Seperti diketahui, 
                        Toram Online mengusung genre RPG dengan 
                        spesialisasi PvE atau <i>playing against monsters.</i> 
                        Namun, kamu tetap bisa melakukan interaksi dengan pemain lain, 
                        membangun guild dan tim untuk melakukan misi atau permainan bersama. 
                        Cerita tentang bencana besar yang membelah bumi 
                        menjadi titik awal permainan dimulai.
                    </p>
                    <br/>
                    <p>
                        Hal pertama yang perlu kamu ketahui adalah ada apa saja pada layar utama.
                    </p>
                    <br/>
                    <ul>
                        <li> Menu, di sudut kiri atas layar, berisi bagian utama game (skill, inventori, karakter, dst).</li>
                        <li> Chat, di sudut kanan atas layar, kamu bisa chat dengan pemain lain di sini.</li>
                        <li> Action, ada di sisi kanan layar, kamu bisa mengaktivasi serangan fisik di sini.</li>
                        <li> List, membantumu mencari skill yang diperlukan saat bertempur dan berganti skill dengan cepat.</li>
                        <li> Channel, nomor server tempatmu berada.</li>
                        <li> Emblem atau mini-tasks, menunjukkan sejauh mana pencapaian kamu.</li>
                    </ul>
                    <br/>
                    <p>
                        Di sisi kiri dan kanan layar adalah kontrol joystick milik karakter yang dipakai. 
                        Dengan begitu kamu leluasa menggerakkan karaktermu secara mulus tanpa 
                        hambatan apa pun. Sementara itu, tombol di tengah sisi kanan 
                        berperan sebagai tombol cepat yang membuka beberapa bagian menu terpenting. 
                        Kamu bisa membuat pengaturan sendiri sesuai kebutuhan.
                    </p>
                    <br/>

                    <h2>Karakter</h2>
                    <p>
                        Toram Online guide berikutnya menunjukkan berbagai tipe karakter yang 
                        akan kamu butuhkan saat awal permainan. Sebagai catatan, 
                        dengan siapa kamu bermain ditentukan oleh pemilihan skill dan senjata. 
                        Jadi, kamu dapat menciptakan karakter yang 
                        akan berkembang menjadi salah satu tipe di bawah ini.
                    </p>
                    <br/>
                    <ul>
                        <li> Mage, senjata utamanya adalah tongkat, punya magic attack yang ditingkatkan, memberi damage pada jarak tertentu di sebuah area.</li>
                        <li> Archer, si pemegang busur yang memiliki kecepatan serangan tinggi.</li>
                        <li> Swordsman, sosok petarung yang biasa bertempur dengan tangan kosong atau sarung tangan.</li>
                        <li> Samurai, punya pedang katana yang ia kuasai dengan baik, ahli menghindar dan punya mobilitas cepat.</li>
                        <li> Halberdier, sang pemilik tombak kerajaan.</li>
                    </ul>
                    <br/>
                    <p>
                        Setelah kamu menentukan senjata, kamu akan punya satu skill tree 
                        secara gratis. Pilihan cabang tersebut akan tergantung pada 
                        senjata pilihan tadi. Tingkat kesulitan game untuk tiap karakter 
                        sengaja dibuat berlawanan dengan senjata masing-masing. 
                        Menurut Toram Online guide, begitu kamu menentukan 
                        class hero yang diambil, game akan memunculkan rekomendasi 
                        skill mana yang akan diprioritaskan.
                    </p>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default ToramGuide;