"use client";
import Image from "next/image";
import { useState } from "react";

const YearSelector = (props) => {
  //const [selectedYear, setSelectedYear] = useState('');
  const { setSelectedYear, setSelectedId } = props;
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleInputChange = (event) => {
    setSelectedId(event.target.value);
  };
  const options = ["12/2023", "11/2023", "10/2023", "09/2023", "08/2023"];
  // api tất cả những đợt nộp đã diễn ra
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <span className="mr-2">Chọn đợt:</span>
        <select
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleYearChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

const Table = (props) => {
  const { selectedId, selectedYear } = props;
  const data = [
    {
      id: "1",
      name: "John Doe",
      address: "john.doe@example.com",
      money: 200,
      moneyPayed: 100,
      note: " ",
      year: 1,
    },
    {
      id: "2",
      name: "John Doe",
      address: "john.doe@example.com",
      money: 100,
      moneyPayed: 100,
      note: "Thu đủ ",
      year: 2,
    },
  ];
  //api
  return (
    <table className="border-collapse  min-w-full bg-white border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border py-2 px-4 border-b">Mã hộ</th>
          <th className="border py-2 px-4 border-b">Tên chủ hộ</th>
          <th className="border py-2 px-4 border-b">Địa chỉ</th>
          <th className="border py-2 px-4 border-b">Số tiền đã đóng</th>
          <th className="border py-2 px-4 border-b">Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) =>
          row.year == selectedYear ? (
            row.id.includes(selectedId) ? (
              <tr key={index}>
                <td className="border py-2 px-4 border-b">{row.id}</td>
                <td className="border py-2 px-4 border-b">{row.name}</td>
                <td className="border py-2 px-4 border-b">{row.address}</td>
                <td className="border py-2 px-4 border-b">{row.money}</td>
                <td className="border py-2 px-4 border-b">
                  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    <a href="./dongGop/1">Chi tiết</a>
                  </button>
                </td>
              </tr>
            ) : (
              ""
            )
          ) : (
            ""
          )
        )}
      </tbody>
    </table>
  );
};

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedId, setSelectedId] = useState("");
  return (
    <div class="w-full max-w-screen-xl mx-auto ">
      <YearSelector
        setSelectedYear={setSelectedYear}
        setSelectedId={setSelectedId}
      />
      <Table selectedYear={selectedYear} selectedId={selectedId} />
    </div>
  );
}
