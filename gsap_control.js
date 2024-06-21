function smoothScrollWithGSAP(elementId, offset = 0, duration = 2) {
    const element = document.getElementById(elementId);
    if (element) {
      gsap.to(window, { duration: duration, scrollTo: { y: element, offsetY: offset } });
    }
  }