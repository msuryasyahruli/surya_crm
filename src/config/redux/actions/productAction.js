import fetch, { BASE_URL } from "../../fetch";

export const fetchListProduct = (params) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_ALL_LOADING" });
  const url = BASE_URL + `/service`;
  try {
    const { data } = await fetch.get(url, { params });
    dispatch({
      type: "GET_PRODUCT_ALL",
      payload: {
        data: data.data,
        pagination: data.pagination,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_ALL_FAILED",
      payload: error.message,
    });
  }
};

export const fetchDetailProduct = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_DETAIL_LOADING" });
  const url = BASE_URL + `/service/${id}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_DETAIL_FAILED",
      payload: error.message,
    });
  }
};

export const createProduct = async (payload) => {
  const url = BASE_URL + "/service";
  try {
    const { data } = await fetch.post(url, payload);
    alert("Layanan berhasil ditambahkan");
    return data;
  } catch (error) {
    alert("Error server");
    throw error;
  }
};

export const updateProduct = async (id, payload) => {
  const url = BASE_URL + `/service/${id}`;
  try {
    const { data } = await fetch.put(url, payload);
    alert("Layanan berhasil diubah");
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  const url = BASE_URL + `/service/${id}`;
  try {
    const { data } = await fetch.delete(url);
    alert("Layanan berhasil dihapus");
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
