import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct, fetchListProduct } from "../actions/productAction";

export const useFetchListProduct = (params, refetchKey) => {
  const dispatch = useDispatch();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.product.listProduct
  );
  useEffect(() => {
    dispatch(fetchListProduct(params));
    // eslint-disable-next-line
  }, [dispatch, JSON.stringify(params), refetchKey]);
  return { data, loading, error, pagination };
};

export const useFetchDetailProduct = (id) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.product.detailProduct
  );
  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);
  return { data, loading, error };
};
