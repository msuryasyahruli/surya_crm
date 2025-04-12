const initialState = {
  listCustomer: {
    data: [],
    loading: false,
    error: false,
    pagination: [],
  },
  detailCustomer: {
    data: [],
    loading: false,
    error: false,
  },
};

const customerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CUSTOMER_ALL":
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          data: payload.data,
          pagination: payload.pagination,
          loading: false,
          error: false,
        },
      };

    case "GET_CUSTOMER_ALL_LOADING":
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          loading: true,
          error: false,
        },
      };

    case "GET_CUSTOMER_ALL_FAILED":
      return {
        ...state,
        listCustomer: {
          ...state.listCustomer,
          loading: false,
          error: payload,
        },
      };

    case "GET_CUSTOMER_DETAIL":
      return {
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          data: payload,
          loading: false,
          error: false,
        },
      };

    case "GET_CUSTOMER_DETAIL_LOADING":
      return {
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          loading: true,
          error: false,
        },
      };

    case "GET_CUSTOMER_DETAIL_FAILED":
      return {
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default customerReducer;
