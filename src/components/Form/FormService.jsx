import React from "react";

const FormService = ({ data, onSetData }) => {
  return (
    <form>
      <div className="flex flex-col mb-4">
        <label htmlFor="service" className="mb-2 text-gray-500">
          Nama layanan
        </label>
        <input
          type="text"
          id="service"
          placeholder="Masukkan nama layanan"
          className="border border-gray-400 rounded-md p-2"
          value={data.service_name}
          onChange={(e) => onSetData({ ...data, service_name: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="speed" className="mb-2 text-gray-500">
            Kecepatan internet (Mbps)
          </label>
          <input
            type="number"
            id="speed"
            placeholder="Masukkan kecepatan"
            className="border border-gray-400 rounded-md p-2"
            value={data.speed}
            onChange={(e) => onSetData({ ...data, speed: e.target.value })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="quota" className="mb-2 text-gray-500">
            Kuota (FUP)
          </label>
          <input
            type="text"
            id="quota"
            placeholder="Masukkan kuota"
            className="border border-gray-400 rounded-md p-2"
            value={data.quota}
            onChange={(e) => onSetData({ ...data, quota: e.target.value })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="price" className="mb-2 text-gray-500">
            Harga/Bulan
          </label>
          <input
            type="number"
            id="price"
            placeholder="Masukkan harga"
            className="border border-gray-400 rounded-md p-2"
            value={data.price}
            onChange={(e) => onSetData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="status" className="mb-2 text-gray-500">
            Status
          </label>
          <select
            id="status"
            className="border border-gray-400 rounded-md p-2"
            value={data.status}
            onChange={(e) => onSetData({ ...data, status: e.target.value })}
          >
            <option value="" className="text-[#acb2be]">
              Pilih status
            </option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default FormService;
