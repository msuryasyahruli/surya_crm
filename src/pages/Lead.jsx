import React, { useState } from "react";
import Modals from "../components/Modals";
import FormCustomer from "../components/Form/FormCustomer";
import DetailCustomer from "../components/Customer/DetailCustomer";
import { useFetchListCustomer } from "../config/redux/hooks/customerHook";
import {
  createCustomer,
  updateCustomer,
} from "../config/redux/actions/customerAction";

const Lead = () => {
  const [modalAction, setModalAction] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [isType, setIsType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [refetchKey, setRefetchKey] = useState(Date.now());
  const [payload, setPayload] = useState({
    customer_name: "",
    email: "",
    phone_number: null,
    status: "",
    service_id: "",
    start_date: "",
    end_date: "",
  });

  const params = {
    page: 1,
    limit: 10,
  };

  const { data } = useFetchListCustomer(params, refetchKey);

  const handleClickAction = (type, data) => {
    if (type === "tambah") {
      setPayload({});
    } else if (type === "ubah") {
      setPayload({
        customer_name: data?.customer_name,
        email: data?.email,
        phone_number: data?.phone_number,
        status: data?.status,
        service_id: data?.service_id,
        start_date: data?.start_date,
        end_date: data?.end_date,
      });
    }
    setModalAction(true);
    setIsType(type);
    setSelectedId(data?.customer_id);
  };

  const handleConfirmAction = async () => {
    try {
      if (isType === "tambah") {
        await createCustomer(payload);
      } else if (isType === "ubah") {
        await updateCustomer(selectedId, payload);
      }

      setPayload({});
      setModalAction(false);
      setRefetchKey(Date.now());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="text-2xl font-bold mb-4">Calon pelanggan</p>
      <div className="bg-white p-3 rounded-t-xl">
        <button
          className="bg-blue-600 text-white rounded-md py-2 px-4"
          onClick={() => handleClickAction("tambah")}
        >
          Tambah
        </button>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="w-full min-w-fit rounded-2xl">
          <thead className="bg-gray-300">
            <tr>
              <th>No</th>
              <th>Nama Customer</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Status</th>
              <th>Tanggal</th>
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
                <td>{item?.created_at?.slice(0, 10)}</td>
                <td className="space-x-2">
                  <button
                    className="text-green-600 hover:underline"
                    onClick={() => {
                      setModalDetail(true), setSelectedId(item?.customer_id);
                    }}
                  >
                    Detail
                  </button>
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleClickAction("ubah", item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modals
        isOpen={modalAction}
        onClose={() => setModalAction(false)}
        title={isType === "tambah" ? "Tambah Pelanggan Baru" : "Edit Pelanggan"}
        onConfirm={handleConfirmAction}
        confirmText={isType === "tambah" ? "Tambahkan" : "Ubah"}
        cancelText="Tidak"
      >
        <FormCustomer data={payload} onSetData={setPayload} />
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

export default Lead;
