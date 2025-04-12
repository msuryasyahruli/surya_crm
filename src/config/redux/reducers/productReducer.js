const initialState = {
  listProduct: {
    data: [],
    loading: false,
    error: false,
    pagination: [],
  },
  detailProduct: {
    data: [],
    loading: false,
    error: false,
  },
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT_ALL":
      return {
        ...state,
        listProduct: {
          ...state.listProduct,
          data: payload.data,
          pagination: payload.pagination,
          loading: false,
          error: false,
        },
      };

    case "GET_PRODUCT_ALL_LOADING":
      return {
        ...state,
        listProduct: {
          ...state.listProduct,
          loading: true,
          error: false,
        },
      };

    case "GET_PRODUCT_ALL_FAILED":
      return {
        ...state,
        listProduct: {
          ...state.listProduct,
          loading: false,
          error: payload,
        },
      };

    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        detailProduct: {
          ...state.detailProduct,
          data: payload,
          loading: false,
          error: false,
        },
      };

    case "GET_PRODUCT_DETAIL_LOADING":
      return {
        ...state,
        detailProduct: {
          ...state.detailProduct,
          loading: true,
          error: false,
        },
      };

    case "GET_PRODUCT_DETAIL_FAILED":
      return {
        ...state,
        detailProduct: {
          ...state.detailProduct,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default productReducer;
