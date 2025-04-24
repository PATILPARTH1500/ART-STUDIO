// Image slider functionality
const images = [
    "/assets/images/real-4.jpeg",
    "/assets/images/Anime-2.jpg", // Add more image paths here
    "/assets/images/Anime-3.jpg",
    "/assets/images/dev-1.jpeg",
    "/assets/images/dev-3.jpeg",
    "/assets/images/real-2.jpeg",
    "/assets/images/dev-3.jpeg",
  ];
  
  let currentImageIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function changeImage() {
    sliderImage.src = images[currentImageIndex];
  }
  
  // Automatic image change every second
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage();
  }, 3000);
  
  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeImage();
  });
  
  // Next button click
  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage();
  });
  