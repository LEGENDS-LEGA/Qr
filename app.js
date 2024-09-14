const textInput = document.getElementById('text-input');
const qrCodeDiv = document.getElementById('qrcode');

textInput.addEventListener('input', generateQRCode);

function generateQRCode() {
    const text = textInput.value.trim();

    if (!text) {
        qrCodeDiv.innerHTML = ''; 
        return;
    }

    const qr = new QRCode(qrCodeDiv, {
        text: text,
        width: 300,
        height: 300,
    });
}
