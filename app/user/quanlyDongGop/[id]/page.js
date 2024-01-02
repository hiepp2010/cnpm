"use client";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const BasicModal = (props) => {
  const { data, setData, id } = props;
  const css =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-70 rounded-md ";
  const newData = [
    {
      id: "1",
      name: "John Doe",
      type: "Nước",
      money: 100,
      moneyPayed: 100,
      year: 1,
    },
    {
      id: "1",
      name: "John Doe",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
      year: 1,
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    setData(newData);
    e.preventDefault();
    setOpen(false);

    // Handle form submission logic here
  };

  return (
    <div>
      {data[id].money != data[id].moneyPayed ? (
        <button class={css} onClick={handleOpen}>
          Nộp tiền
        </button>
      ) : (
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
          Nộp tiền
        </button>
      )}
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
                  Type
                </label>
                <input
                  id="type"
                  type="text"
                  value="Fixed"
                  disabled
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="money"
                >
                  Money
                </label>
                <input
                  id="money"
                  type="text"
                  value="$100"
                  disabled
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

const Card = () => {
  return (
    <div className="flex justify-center mt-4">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <div className="w-4"></div> {/* Add an empty div for spacing */}
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </div>
  );
};

const Table = (props) => {
  const { selectedId, selectedYear, data, setData } = props;
  const Confirm = () => {
    confirm("Bạn có muốn xóa khoản phí này không ?");
    setData([
      {
        id: "1",
        type: "Nước",
        money: 100,
        moneyPayed: 0,
        year: "12/2023",
        rate: "0%",
      },
    ]);
  };
  //api
  return (
    <table className="border-collapse table-auto min-w-full bg-white border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border py-2 px-4 border-b">Loại đóng góp</th>
          <th className="border py-2 px-4 border-b">Mã hộ</th>
          <th className="border py-2 px-4 border-b">Chủ hộ</th>
          <th className="border py-2 px-4 border-b">Đã đóng góp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) =>
          row.year == selectedYear ? (
            row.id.includes(selectedId) ? (
              <tr key={index}>
                <td className="border py-2 px-4 border-b">{row.type}</td>
                <td className="border py-2 px-4 border-b">{row.id}</td>
                <td className="border py-2 px-4 border-b">{row.name}</td>
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
  const [selectedYear, setSelectedYear] = useState("12/2023");
  const [selectedId, setSelectedId] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      type: "Trung Thu",
      name: "Hoàng",
      money: 50,
      moneyPayed: 0,
      year: "12/2023",
      rate: "0%",
    },
    {
      id: "2",
      name: "Hà",
      type: "Trung Thu",
      money: 50,
      moneyPayed: 100,
      year: "12/2023",
      rate: "100%",
    },
  ]);
  return (
    <div class="w-full max-w-screen-xl mx-auto ">
      <YearSelector
        setSelectedYear={setSelectedYear}
        setSelectedId={setSelectedId}
        selectedYear={selectedYear}
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
