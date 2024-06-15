function submitForm() {
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
    return false;
}

// Signature Pad
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Tambahkan event listener untuk membatasi input pada nomor telepon dan kode pos
document.getElementById('nomor-telpon').addEventListener('input', restrictToNumbers);
document.getElementById('kontak-telpon').addEventListener('input', restrictToNumbers);
document.getElementById('kode-pos').addEventListener('input', restrictToNumbers);

// Fungsi untuk membatasi input pada nomor telepon dan kode pos hanya menerima angka
function restrictToNumbers(event) {
    // Menghapus semua karakter selain angka
    this.value = this.value.replace(/\D/g, '');
}