
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('.main'),
    //   smooth: true,
    // });   
  
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
    
        const target = document.querySelector(this.getAttribute('href'));
        scroll.scrollTo(target);
      });
    });
    
 
  //  -------------------------------loader-------------------------
// page loded
let pageContent = document.querySelector(".hero-section");
let loaderContainer = document.querySelector(".loader-container");

window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
  pageContent.classList.add("visible"); 
}); 
  