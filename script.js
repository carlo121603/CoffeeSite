document.addEventListener("DOMContentLoaded", () => {
  // Observer for the text content
  const textObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__slideInLeft",
            "animate__slow"
          );
          textObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__slideInRight",
            "animate__slow"
          );
          imageObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  
  const storyTextObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__zoomIn", 
            "animate__slow"
          );
          storyTextObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const storyImageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__zoomIn", 
            "animate__fast"
          );
          storyImageObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Targeting the elements for 'ourstory' section
  const storyTextEl = document.querySelector(".rightSide");
  if (storyTextEl) storyTextObserver.observe(storyTextEl);

  const storyImageEl = document.querySelector(".storyimgcontainer");
  if (storyImageEl) storyImageObserver.observe(storyImageEl);

  // Targeting the original elements for animation
  const textEl = document.querySelector(".highlight-content");
  if (textEl) textObserver.observe(textEl);

  const imageEl = document.querySelector(".blossomimgcontainer");
  if (imageEl) imageObserver.observe(imageEl);
});











const hamburger = document.getElementById("hamburger");
const navSection = document.getElementById("nav-section");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  navSection.classList.toggle("show");
  hamburger.classList.toggle("open");
  overlay.classList.toggle("show");
  document.body.style.overflow = navSection.classList.contains("show")
    ? "hidden"
    : "auto";
});

overlay.addEventListener("click", () => {
  navSection.classList.remove("show");
  hamburger.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll(".NavContainer ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navSection.classList.remove("show");
    hamburger.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});