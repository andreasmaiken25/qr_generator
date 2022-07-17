function generateQR() {
    let canvas = document.getElementById("canvas")
    let qrinput = document.getElementById("qrInput")
    QRCode.toCanvas(canvas, qrinput.value, (err) => {
        if(err) console.error(err)
        console.log('qr berhasil dibuat');
        ocument.getElementById("myBtn").click();
    })
}