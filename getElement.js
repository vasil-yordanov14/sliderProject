const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  else {
    console.log(`No element selected`);
  }
};

export default getElement;
