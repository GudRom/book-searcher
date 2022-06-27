export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
};

export const getBooks = (title, category, order, count) => {
  return fetch(`${BASE_URL}?q=intitle:${title}+subject:${category}&orderBy=${order}&startIndex=${count}&maxResults=30`, {
    method: "GET",
    headers: {
      ...HEADERS
    },
  })
  .then(checkResult);
};
