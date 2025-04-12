import React from "react";
import { useFetchDetailCustomer } from "../../config/redux/hooks/customerHook";

const DetailCustomer = ({ id }) => {
  const { data } = useFetchDetailCustomer(id);

  return (
    <div>
      <p>Nama pelanggan: {data?.customer_name}</p>
      <p>Alamat email: {data?.email}</p>
      <p>Nomor telepon: {data?.phone_number}</p>
      <p>Status pengguna: {data?.status}</p>
      <p>Jenis layanan: {data?.service_name}</p>
      <p>Aktif sejak: {data?.start_date}</p>
      <p>Aktif sampai: {data?.end_date}</p>
      <p>Tanggal mendaftar: {data?.created_at}</p>
    </div>
  );
};

export default DetailCustomer;
