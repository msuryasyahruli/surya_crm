import React, { useState } from "react";
import Modals from "../components/Modals";
import FormService from "../components/Form/FormService";
import { useFetchListProduct } from "../config/redux/hooks/productHook";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../config/redux/actions/productAction";

const Products = () => {
  const [modalAction, setModalAction] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [isType, setIsType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [refetchKey, setRefetchKey] = useState(Date.now());
  const [payload, setPayload] = useState({
    service_name: "",
    speed: null,
    quota: "",
    price: null,
    status: "",
  });

  const params = {
    page: 1,
    limit: 10,
    sort: "",
    sortby: "",
  };

  const { data } = useFetchListProduct(params, refetchKey);

  const handleClickAction = (type, data) => {
    if (type === "tambah") {
      setPayload({});
    } else if (type === "ubah") {
      setPayload({
        service_name: data?.service_name,
        speed: data?.speed,
        quota: data?.quota,
        price: data?.price,
        status: data?.status,
      });
    }
    setModalAction(true);
    setIsType(type);
    setSelectedId(data?.service_id);
  };

  const handleConfirmAction = async () => {
    try {
      if (isType === "tambah") {
        await createProduct(payload);
      } else if (isType === "ubah") {
        await updateProduct(selectedId, payload);
      }

      setPayload({});
      setModalAction(false);
      setRefetchKey(Date.now());
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(selectedId);
      setModalDelete(false);
      setRefetchKey(Date.now());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="text-2xl font-bold mb-4">Produk</p>
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
              <th>Nama Layanan</th>
              <th>Kecepatan</th>
              <th>Kuota</th>
              <th>Harga/Bulan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.service_name}</td>
                <td>{item?.speed} Mbps</td>
                <td>{item?.quota}</td>
                <td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "idr",
                  }).format(item?.price)}
                </td>
                <td>{item?.status}</td>
                <td className="space-x-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleClickAction("ubah", item)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => {
                      setModalDelete(true), setSelectedId(item?.service_id);
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
        isOpen={modalAction}
        onClose={() => setModalAction(false)}
        title={isType === "tambah" ? "Tambah layanan" : "Ubah layanan"}
        onConfirm={handleConfirmAction}
        confirmText={isType === "tambah" ? "Tambahkan" : "Ubah"}
        cancelText="Batal"
      >
        <FormService data={payload} onSetData={setPayload} />
      </Modals>
      <Modals
        isOpen={modalDelete}
        onClose={() => setModalDelete(false)}
        title="Konfirmasi Hapus"
        onConfirm={handleConfirmDelete}
        confirmText="Ya, Hapus"
        cancelText="Batal"
      >
        <p>Apakah anda yakin ingin menghapus layanan ini?</p>
      </Modals>
    </>
  );
};

export default Products;
