"use client"
import Image from 'next/image'
import { useState } from 'react';

const YearSelector = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="year" className="mr-2">Select a year:</label>
      <select
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
        className="border border-gray-300 py-2 px-3 rounded-md"
      >
        <option value="">-- Select Year --</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        {/* Add more options for other years */}
      </select>
      {selectedYear && <p className="ml-2">You selected: {selectedYear}</p>}
    </div>
  );
};

const Table = () => {
  const data = [
    {
      id:"1",
      name: 'John Doe',
      address: 'john.doe@example.com',
      money:123,
      moneyPayed:100,
      note:" "
    },
    {
      id:"2",
      name: 'John Doe',
      address: 'john.doe@example.com',
      money:100,
      moneyPayed:100,
      note:"Thu đủ "    },
  ];

  return (
    <table className="border-collapse border min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border py-2 px-4 border-b">Mã hộ</th>
          <th className="border py-2 px-4 border-b">Tên chủ hộ</th>
          <th className="border py-2 px-4 border-b">Địa chỉ</th>
          <th className="border py-2 px-4 border-b">Số tiền cần đóng</th>
          <th className="border py-2 px-4 border-b">Đã thu</th>
          <th className="border py-2 px-4 border-b">Ghi chú</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          < tr key={index}>
            <td className="border py-2 px-4 border-b">{row.id}</td>
            <td className="border py-2 px-4 border-b">{row.name}</td>
            <td className="border py-2 px-4 border-b">{row.address}</td>
            <td className="border py-2 px-4 border-b">{row.money}</td>
            <td className="border py-2 px-4 border-b">{row.moneyPayed}</td>
            <td className="border py-2 px-4 border-b">{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default function Home() {
  return (
    <div>
    <YearSelector/>
    <Table/>
    </div>
  )
}
