import React, { useState } from "react";
import Modals from "../components/Modals";
import DetailCustomer from "../components/Customer/DetailCustomer";
import { deleteCustomer } from "../config/redux/actions/customerAction";
import { useFetchListCustomer } from "../config/redux/hooks/customerHook";

const Customers = () => {
  const [modalDetail, setModalDetail] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [refetchKey, setRefetchKey] = useState(Date.now());

  const params = {
    page: 1,
    limit: 10,
  };

  const { data } = useFetchListCustomer(params, refetchKey);

  const handleConfirmDelete = async () => {
    try {
      await deleteCustomer(selectedId);
      setModalDelete(false);
      setRefetchKey(Date.now());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="text-2xl font-bold mb-4">Daftar pelanggan</p>
      <div className="overflow-x-auto bg-white rounded-xl">
        <table className="w-full min-w-fit rounded-2xl">
          <thead className="bg-gray-300">
            <tr>
              <th>No</th>
              <th>Nama Customer</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Status</th>
              <th>Layanan</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Berakhir</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.customer_name}</td>
                <td>{item?.email}</td>
                <td>{item?.phone_number}</td>
                <td>{item?.status}</td>
                <td>{item?.service_name}</td>
                <td>{item?.start_date?.slice(0, 10)}</td>
                <td>{item?.end_date?.slice(0, 10)}</td>
                <td className="space-x-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      setModalDetail(true), setSelectedId(item?.customer_id);
                    }}
                  >
                    Detail
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => {
                      setModalDelete(true), setSelectedId(item?.customer_id);
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modals
        isOpen={modalDelete}
        onClose={() => setModalDelete(false)}
        title="Konfirmasi Hapus"
        onConfirm={handleConfirmDelete}
        confirmText="Ya, Hapus"
        cancelText="Batal"
      >
        <p>Apakah anda yakin ingin menghapus pelanggan?</p>
      </Modals>
      <Modals
        isOpen={modalDetail}
        onClose={() => setModalDetail(false)}
        title="Detail pelanggan"
        cancelText="Tutup"
      >
        <DetailCustomer id={selectedId} />
      </Modals>
    </>
  );
};

export default Customers;
