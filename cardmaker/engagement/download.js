function downloadCard() {
    html2canvas(document.querySelector("#card")).then(canvas => {
        let link = document.createElement('a');
        link.download = 'birthday_card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}