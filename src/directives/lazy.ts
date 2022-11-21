export const vLazy = {
  mounted(el: HTMLImageElement) {
    const imgSrc = el.src;
    el.src = "";
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      //元素出现在可视区或者离开可视区会被触发
      if (isIntersecting) {
        el.src = imgSrc;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
};
