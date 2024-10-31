
function changeMap(location) {
    const map = document.getElementById("map");

    // Aplica la animación de desvanecimiento y escalado al iframe interno
    map.style.opacity = "0";
    map.style.transform = "scale(0.95)";

    const locations = {
        clearwater: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112737.32663056834!2d-82.7473985!3d27.992628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1fde274bb19%3A0x75a9dfd1d23c92fb!2sClearwater%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729921591426!5m2!1ses-419!2spe",
        ocala: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111477.99386457028!2d-82.15680794999999!3d29.173885400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e62b541cba3ce5%3A0xf5f53be4b1380536!2sOcala%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729923692541!5m2!1ses-419!2spe",
        sanpeterburgo: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225919.31304466308!2d-82.6548205!3d27.7793049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e663693aaa41%3A0x4cc4003bcd48bff!2sSan%20Petersburgo%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729923890084!5m2!1ses-419!2spe",
        lakeland: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112664.23218394873!2d-81.94735945!3d28.062435550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd38b2df0f0007%3A0x29d1320fb8a2d508!2sLakeland%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729923940944!5m2!1ses-419!2spe",
        ruskin: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.08165628399!2d-82.43359545!3d27.711338950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d1d7ba73c2d5%3A0xf48d2ba8ffdab19!2sRuskin%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924004005!5m2!1ses-419!2spe",
        parrish: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56583.70939567234!2d-82.4168553490193!3d27.578587449172563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c325ae41f25737%3A0xe66ee3f81e4d534b!2sParrish%2C%20Florida%2034219%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924059990!5m2!1ses-419!2spe",
        bradenton: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113259.57030172255!2d-82.58729244999999!3d27.489128499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3164fdea682f1%3A0xfa9d3b7d4ef1fd5a!2sBradenton%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924101020!5m2!1ses-419!2spe",
        LakewoodRanch: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28334.713384489445!2d-82.4287573!3d27.411946450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c339a1a62cd811%3A0xc829d2e8924438f0!2sLakewood%20Ranch%2C%20Florida%2034202%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924140668!5m2!1ses-419!2spe",
        sarasota: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56708.40138703945!2d-82.5379304!3d27.335867099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c337e69db2c22b%3A0xe335341d1d5715d9!2sSarasota%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924184036!5m2!1ses-419!2spe",
        nokomis: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14204.212460183411!2d-82.438325!3d27.12313695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c35029098e6a37%3A0x77bffc8063d928fa!2sNokomis%2C%20Florida%2034275%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924216962!5m2!1ses-419!2spe",
        veneci: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56821.06063998337!2d-82.41472345!3d27.11484605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c34e48300b2dfb%3A0x52ac882236d6b362!2sVenice%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924252619!5m2!1ses-419!2spe",
        englewood: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56898.84776720526!2d-82.35096545!3d26.961262399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c354ebac4f8c4b%3A0x1da51f643b04f38d!2sEnglewood%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924278533!5m2!1ses-419!2spe",
        northPort: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113723.98638051175!2d-82.20474604999998!3d27.034129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3537f8357d511%3A0x20c1781782e930ac!2sNorth%20Port%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1729924318627!5m2!1ses-419!2spe"
    };

    // Cambia el `src` y espera a que cargue el nuevo mapa
    map.onload = () => {
        // Cuando el nuevo mapa está cargado, muestra la animación
        map.style.opacity = "1";
        map.style.transform = "scale(1)";
    };

    // Actualiza el `src` con la nueva ubicación
    map.src = locations[location];
}

// Lista de imágenes de fondo
const images = [
    'assets/img/crownmolding/crown1.webp',
    'assets/img/exteriordoors/exteriordoor1.webp',
    'assets/img/baseboard/base1.webp',
    'assets/img/interiordoors/interiordoor1.webp',
    'assets/img/stairs/stairs2.webp',
    'assets/img/windowssill/windowssill.webp',

];

let currentIndex = 1; // Comienza en 1 ya que la primera imagen ya está visible
let activeImage = document.getElementById('image1');
let inactiveImage = document.getElementById('image2');

// Establecer la imagen inicial
activeImage.src = images[0];

function changeBackground() {
    // Cambia el `src` de la imagen inactiva a la siguiente en la lista
    inactiveImage.src = images[currentIndex];

    // Alterna la opacidad aplicando las clases `active` e `inactive`
    activeImage.classList.remove('active');
    activeImage.classList.add('inactive');
    inactiveImage.classList.remove('inactive');
    inactiveImage.classList.add('active');

    // Cambia las referencias de las imágenes después de la transición
    [activeImage, inactiveImage] = [inactiveImage, activeImage];
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambia la imagen cada 5 segundos
setInterval(changeBackground, 5000);

const services = [
    'Crown Molding',
    'Exterior Doors',
    'Baseboard     ',
    'Interior Doors',
    'Stairs        ',
    'Windows Sill '
];

let currentServiceIndex = 0;
let isDeleting = false;
let lastTimestamp = performance.now();

function typeEffect(timestamp) {
    const serviceElement = document.querySelector('.service');
    const currentService = services[currentServiceIndex];
    const typingSpeed = 100;  // Tiempo entre letras al escribir
    const deletingSpeed = 50; // Tiempo entre letras al borrar
    const pauseTime = 3500;   // Pausa después de escribir una palabra

    // Tiempo transcurrido desde el último cambio
    const timeElapsed = timestamp - lastTimestamp;

    if (!isDeleting && timeElapsed > typingSpeed) {
        // Escribe letra por letra
        const currentText = currentService.slice(0, serviceElement.textContent.length + 1);
        serviceElement.textContent = currentText;

        // Si la palabra completa está escrita, espera antes de borrar
        if (currentText === currentService) {
            isDeleting = true;
            lastTimestamp = timestamp + pauseTime; // Agrega una pausa antes de borrar
        } else {
            lastTimestamp = timestamp;
        }
    } else if (isDeleting && timeElapsed > deletingSpeed) {
        // Borra letra por letra
        const currentText = currentService.slice(0, serviceElement.textContent.length - 1);
        serviceElement.textContent = currentText;

        // Si la palabra está completamente borrada, pasa a la siguiente palabra
        if (currentText === "") {
            isDeleting = false;
            currentServiceIndex = (currentServiceIndex + 1) % services.length;
            lastTimestamp = timestamp;
        } else {
            lastTimestamp = timestamp;
        }
    }

    requestAnimationFrame(typeEffect);
}

// Inicia el efecto de tipeo
requestAnimationFrame(typeEffect);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("contextmenu", event => event.preventDefault());
    });
});
