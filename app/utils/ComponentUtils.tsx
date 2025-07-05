export const handleSmoothScroll = (target: string) => {
    const targetElement = document.querySelector(target) as HTMLElement;
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
};