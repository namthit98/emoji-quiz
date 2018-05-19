export const getAns = (image) => {
  const data = JSON.parse(localStorage.getItem("data"));

  const ret = data.filter((el) => {
    return parseInt(el.image) === image;
  });

  return ret[0].answer;
}