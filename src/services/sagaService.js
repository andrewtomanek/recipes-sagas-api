const BASE_URL =
  "https://cors-anywhere.herokuapp.com/" +
  `https://cookbook.ack.ee/api/v1/recipes/`;

export const getAllItems = async () => {
  const API_ENDPOINT = BASE_URL;

  try {
    let response = await fetch(API_ENDPOINT);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const getItem = async (request) => {
  const API_ENDPOINT = BASE_URL + request.id;
  try {
    let response = await fetch(API_ENDPOINT);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createItem = async (request) => {
  const API_ENDPOINT = BASE_URL;
  const parameters = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(request.inputData),
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const updateItem = async (request) => {
  const API_ENDPOINT = BASE_URL + request.inputData[1];
  const parameters = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(request.inputData[0]),
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const updateRating = async (request) => {
  const API_ENDPOINT = BASE_URL + request.inputData[1] + `/ratings`;
  const parameters = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ score: request.inputData[0] }),
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteItem = async (request) => {
  const API_ENDPOINT = BASE_URL + request.id;
  const parameters = {
    method: "DELETE",
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};
