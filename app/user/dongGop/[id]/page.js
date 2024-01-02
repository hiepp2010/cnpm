"use client";

import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const BlueModel = (props) => {
  const { data, setData, id } = props;
  const css = " ";
  const newData = [
    {
      id: "1",
      name: "John Doe",
      type: "Nước",
      money: 100,
      moneyPayed: 0,
      year: "12/2023",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
      year: "12/2023",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(newData);
    setOpen(false);

    // Handle form submission logic here
  };

  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-70 rounded-md ml-2"
        onClick={handleOpen}
      >
        Thêm khoản đóng góp
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white w-1/2 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Pop-up Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="type"
                >
                  Loại đóng góp
                </label>
                <input
                  id="type"
                  type="text"
                  placeholder="Nước"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="money"
                >
                  Số tiền
                </label>
                <input
                  id="money"
                  type="text"
                  placeholder="$100"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const YearSelector = (props) => {
  //const [selectedYear, setSelectedYear] = useState('');
  const { setSelectedYear, setSelectedId, setData } = props;
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
        <BlueModel setData={setData}></BlueModel>
      </div>
    </div>
  );
};

const Table = (props) => {
  const { selectedId, selectedYear, data, setData } = props;

  //api
  return (
    <table className="border-collapse border min-w-full bg-white border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border py-2 px-4 border-b">Mã hộ</th>
          <th className="border py-2 px-4 border-b">Tên chủ hộ</th>
          <th className="border py-2 px-4 border-b">Loại đóng góp</th>
          <th className="border py-2 px-4 border-b">Số tiền đã đóng</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) =>
          row.year == selectedYear ? (
            row.id.includes(selectedId) ? (
              <tr key={index}>
                <td className="border py-2 px-4 border-b">{row.id}</td>
                <td className="border py-2 px-4 border-b">{row.name}</td>
                <td className="border py-2 px-4 border-b">{row.type}</td>
                <td className="border py-2 px-4 border-b">{row.money}</td>
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
  const searchParams = useSearchParams();
  const [selectedYear, setSelectedYear] = useState("12/2023");
  const [selectedId, setSelectedId] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      name: "John Doe",
      type: "Nước",
      money: 100,
      moneyPayed: 0,
      year: "12/2023",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
      year: "12/2023",
    },
  ]);
  return (
    <div class="w-full max-w-screen-xl mx-auto ">
      <YearSelector
        setSelectedYear={setSelectedYear}
        setSelectedId={setSelectedId}
        selectedYear={selectedYear}
        setData={setData}
      />
      <Table
        selectedYear={selectedYear}
        selectedId={selectedId}
        data={data}
        setData={setData}
      />
    </div>
  );
}
