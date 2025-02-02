document.getElementById("clickButton").addEventListener("click", function() {
  const messageBox = document.getElementById("messageBox");
  messageBox.style.display = "block"; // Muestra el cuadro con el mensaje
  
  // Crear corazones
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "♥";
    
    // Posición aleatoria
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;

    // Agregar al contenedor de corazones
    document.getElementById("heartsContainer").appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => heart.remove(), 2000);
  }
});