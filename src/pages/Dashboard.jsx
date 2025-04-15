import React from "react";

const Dashboard = () => {
  const data = [
    {
      title: "Pelanggan Baru Bulan Ini",
      quantity: 8,
      trend: "+2%",
    },
    {
      title: "Total Pelanggan Berlangganan",
      quantity: 65,
      trend: "+5%",
    },
    {
      title: "Pelanggan Aktif Bulan Ini",
      quantity: 100,
      trend: "-1%",
    },
    {
      title: "Tingkat Retensi Pelanggan",
      quantity: "95%",
      trend: "+0.5%",
    },
    {
      title: "Rata-rata Pendapatan per Pelanggan (ARPU)",
      quantity: "Rp 150.000",
      trend: "+3%",
    },
    {
      title: "Pelanggan dengan Paket Premium",
      quantity: 25,
      trend: "+7%",
    },
    {
      title: "Pelanggan yang Melakukan Pembelian Ulang",
      quantity: 40,
      trend: "+4%",
    },
  ];

  return (
    <>
      <p className="text-2xl font-bold mb-4">Dashboard</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="dashboard-item bg-white rounded-xl p-4 aspect-square flex flex-col justify-center items-center text-center shadow-md"
          >
            <p className="item-title font-bold text-xl text-gray-700">
              {item.title}
            </p>
            <p className="item-quantity font-bold text-4xl text-indigo-600">
              {item.quantity}
            </p>
            {item.trend && (
              <p
                className={`item-trend text-sm ${
                  item.trend.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.trend}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
