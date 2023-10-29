//Arrow function as async

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
