import fetch, { BASE_URL } from "../../fetch";

export const fetchListCustomer = (params) => async (dispatch) => {
  dispatch({ type: "GET_CUSTOMER_ALL_LOADING" });
  const url = BASE_URL + `/customer`;
  try {
    const { data } = await fetch.get(url, { params });
    dispatch({
      type: "GET_CUSTOMER_ALL",
      payload: {
        data: data.data,
        pagination: data.pagination,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_CUSTOMER_ALL_FAILED",
      payload: error.message,
    });
  }
};

export const fetchDetailCustomer = (id) => async (dispatch) => {
  dispatch({ type: "GET_CUSTOMER_DETAIL_LOADING" });
  const url = BASE_URL + `/customer/${id}`;
  try {
    const { data } = await fetch.get(url);
    dispatch({
      type: "GET_CUSTOMER_DETAIL",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_CUSTOMER_DETAIL_FAILED",
      payload: error.message,
    });
  }
};

export const createCustomer = async (payload) => {
  const url = BASE_URL + "/customer";
  try {
    const { data } = await fetch.post(url, payload);
    alert("Customer baru berhasil ditambahkan");
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export const updateCustomer = async (id, payload) => {
  const url = BASE_URL + `/customer/${id}`;
  try {
    const { data } = await fetch.put(url, payload);
    alert("Data customer berhasil diubah");
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  const url = BASE_URL + `/customer/${id}`;
  try {
    const { data } = await fetch.delete(url);
    alert("Data customer berhasil dihapus");
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
