    const images = [
        "/assets/images/Anime-4.jpg",
        "/assets/images/real-4.jpeg",
        "/assets/images/dev-2.jpeg",
        "/assets/images/Anime-2.jpg",
        "/assets/images/dev-13.jpeg",
        "/assets/images/real-1.jpeg",
    ];

    let currentIndex = 0;
    const sliderImg = document.getElementById("slider-img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImg.src = images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        sliderImg.src = images[currentIndex];
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    setInterval(nextImage, 7000); // Auto-slide every 7 seconds


    document.addEventListener("DOMContentLoaded", function() {
        const menuBtn = document.querySelector(".menu-btn");
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector(".close-btn");
    
        menuBtn.addEventListener("click", function() {
            sidebar.style.left = "0"; // Show sidebar
        });
    
        closeBtn.addEventListener("click", function() {
            sidebar.style.left = "-250px"; // Hide sidebar
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Hamburger Menu Functionality
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');
        
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    
        // Image Slider Functionality
        const images = [
           
        "/assets/images/Anime-4.jpg",
        "/assets/images/real-4.jpeg",
        "/assets/images/dev-2.jpeg",
        "/assets/images/Anime-2.jpg",
        "/assets/images/dev-13.jpeg",
        "/assets/images/real-1.jpeg",
        ];
    
        let currentIndex = 0;
        const sliderImg = document.getElementById('slider-img');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
    
        function updateImage() {
            sliderImg.src = images[currentIndex];
            sliderImg.alt = `Artwork ${currentIndex + 1}`;
        }
    
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });
    
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });
    
        // Initialize slider with first image
        updateImage();
    });