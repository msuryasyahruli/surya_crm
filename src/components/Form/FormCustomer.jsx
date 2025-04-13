import React from "react";
import { useFetchListProduct } from "../../config/redux/hooks/productHook";

const FormCustomer = ({ data, onSetData }) => {
  const { data: serviceList } = useFetchListProduct();

  return (
    <form>
      <div className="flex flex-col mb-4">
        <label htmlFor="customer_name" className="mb-2 text-gray-500">
          Nama pelanggan
        </label>
        <input
          type="text"
          id="customer_name"
          placeholder="Masukkan nama pelanggan"
          className="border border-gray-400 rounded-md p-2"
          value={data?.customer_name}
          onChange={(e) =>
            onSetData({ ...data, customer_name: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2 text-gray-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Masukkan email"
          className="border border-gray-400 rounded-md p-2"
          value={data?.email}
          onChange={(e) => onSetData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="phone_number" className="mb-2 text-gray-500">
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone_number"
          placeholder="Masukkan nomor telepon"
          className="border border-gray-400 rounded-md p-2"
          value={data?.phone_number}
          onChange={(e) => onSetData({ ...data, phone_number: e.target.value })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="status" className="mb-2 text-gray-500">
          Status
        </label>
        <select
          id="status"
          className="border border-gray-400 rounded-md p-2"
          value={data?.status}
          onChange={(e) => onSetData({ ...data, status: e.target.value })}
        >
          <option value="" className="text-[#acb2be]">
            Pilih status
          </option>
          <option value="Baru">Baru</option>
          <option value="Tertunda">Tertunda</option>
          <option value="Disetujui">Disetujui</option>
          <option value="Berlangganan">Berlangganan</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="service_id" className="mb-2 text-gray-500">
          Layanan
        </label>
        <select
          id="service_id"
          className="border border-gray-400 rounded-md p-2"
          value={data?.service_id}
          onChange={(e) => onSetData({ ...data, service_id: e.target.value })}
        >
          <option value="" className="text-[#acb2be]">
            Pilih layanan
          </option>
          {serviceList.map((item, index) => (
            <option key={index} value={item.service_id}>
              {item.service_name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="start_date" className="mb-2 text-gray-500">
            Tanggal Mulai
          </label>
          <input
            type="date"
            id="start_date"
            className="border border-gray-400 rounded-md p-2"
            value={data?.start_date}
            onChange={(e) => onSetData({ ...data, start_date: e.target.value })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="end_date" className="mb-2 text-gray-500">
            Tanggal Selesai
          </label>
          <input
            type="date"
            id="end_date"
            className="border border-gray-400 rounded-md p-2"
            value={data?.end_date}
            onChange={(e) => onSetData({ ...data, end_date: e.target.value })}
          />
        </div>
      </div>
    </form>
  );
};

export default FormCustomer;
