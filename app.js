
//Menu lateral
const menu = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Cierra el menú al hacer clic fuera (en el overlay)
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});



// Animacion de entrada y salida prrrraaaaa cabrooon 
const animElements = document.querySelectorAll(".animar");

// Creamos el observer dnde aja el punto de vista 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");   // animación de entrada sabosa
    } else {
      entry.target.classList.remove("visible"); // animación de salida deliciosa
    }
  });
}, { threshold: 0.2 });

// Observamos todos los elementos 
animElements.forEach(el => observer.observe(el));


//Comportamiento barras de progreso 
document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach(bar => {
    const skillPer = bar.querySelector(".skill-per");
    const number = bar.querySelector(".skill-per-number");
    const porcentaje = skillPer.getAttribute("data-porcentaje");

    // Agrega el número automáticamente
    number.textContent = porcentaje + "%";

    // Usa IntersectionObserver para animar solo cuando aparece
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillPer.style.width = porcentaje + "%";
          observer.unobserve(skillPer);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillPer);
  });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-per').forEach(skill => {
        const porcentaje = skill.dataset.porcentaje;
        const color = skill.dataset.color || '#ff7600';

        skill.style.width = porcentaje + '%';
        skill.style.backgroundColor = color;

        const tooltip = skill.querySelector('.tooltip');
        tooltip.innerText = porcentaje + '%';
        tooltip.style.backgroundColor = color;
    });
});