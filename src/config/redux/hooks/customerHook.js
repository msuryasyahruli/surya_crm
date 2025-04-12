import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailCustomer,
  fetchListCustomer,
} from "../actions/customerAction";

export const useFetchListCustomer = (params, refetchKey) => {
  const dispatch = useDispatch();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.customer.listCustomer
  );
  useEffect(() => {
    dispatch(fetchListCustomer(params));
    // eslint-disable-next-line
  }, [dispatch, JSON.stringify(params), refetchKey]);
  return { data, loading, error, pagination };
};

export const useFetchDetailCustomer = (id) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.customer.detailCustomer
  );
  useEffect(() => {
    dispatch(fetchDetailCustomer(id));
  }, [dispatch, id]);
  return { data, loading, error };
};
