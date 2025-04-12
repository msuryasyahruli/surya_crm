import React, { useState } from "react";
import Modals from "../components/Modals";
import { deleteCustomer } from "../config/redux/actions/customerAction";

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [refetchKey, setRefetchKey] = useState(Date.now());
  const data = [
    {
      customer_name: "Jhon Doe",
      email: "jhon@gmail.com",
      phone_number: "081223344556",
      status: "Berlangganan",
      service: "Internet Basic",
      start_date: "2025-04-10",
      end_date: "2025-05-09",
    },
    {
      customer_name: "Emma Watson",
      email: "emma.watson@gmail.com",
      phone_number: "082334455667",
      status: "Berlangganan",
      service: "Internet Basic",
      start_date: "2025-04-11",
      end_date: "2025-05-10",
    },
    {
      customer_name: "Carlos Mendoza",
      email: "carlos.mendoza@gmail.com",
      phone_number: "085566778899",
      status: "Berlangganan",
      service: "Internet Gaming",
      start_date: "2025-04-09",
      end_date: "2025-07-08",
    },
    {
      customer_name: "Hiro Tanaka",
      email: "hiro.tanaka@gmail.com",
      phone_number: "089912345678",
      status: "Berlangganan",
      service: "Internet Premium",
      start_date: "2025-04-08",
      end_date: "2025-05-07",
    },
    {
      customer_name: "Amina Yusuf",
      email: "amina.yusuf@gmail.com",
      phone_number: "081234567890",
      status: "Berlangganan",
      service: "Internet Family",
      start_date: "2025-04-07",
      end_date: "2026-04-06",
    },
  ];

  const handleConfirm = () => {
    alert("Confirmed!");
    setIsModalOpen(false);
  };

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
      <div className="bg-white p-3 rounded-t-xl">
        <button
          className="bg-blue-600 text-white rounded-md py-2 px-4"
          onClick={() => setIsModalOpen(true)}
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
                <td>{item.customer_name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
                <td>{item.status}</td>
                <td>{item.service}</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
                <td className="space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Menu
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Konfirmasi Aksi"
        onConfirm={handleConfirm}
        confirmText="Ya"
        cancelText="Tidak"
      >
        <p>Apakah kamu yakin ingin melanjutkan?</p>
      </Modals>
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
    </>
  );
};

export default Customers;
