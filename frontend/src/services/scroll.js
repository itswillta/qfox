const getWindowViewportHeight = () => window.visualViewport.height;

const scrollToTop = (top, behavior = 'smooth') => window.scrollTo({ top, behavior });

const scrollToBottomOfElement = (element, offset = 0, behavior = 'smooth') =>
  scrollToTop(
    element.offsetTop + element.scrollHeight - getWindowViewportHeight() + offset,
    behavior
  );

const getMaxScrollHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;

window.getMaxScrollHeight = getMaxScrollHeight;

export { scrollToBottomOfElement, scrollToTop, getMaxScrollHeight };
