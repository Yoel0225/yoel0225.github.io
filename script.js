function cerrarModal() {
    document.getElementById("myModal").style.display = "none";
}

const deadline = new Date("December 15, 2023 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Feliz Navidad, Tía! 🎄";
        const messageElement = document.getElementById("message");
        if (messageElement.style.display !== "block") {
            messageElement.style.display = "block";
            document.getElementById("abrazoButton").addEventListener("click", function() {
                document.getElementById("myModal").style.display = "block";
            });
        }
    }
}, 1000);
