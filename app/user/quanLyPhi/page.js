"use client";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const GreenModel = (props) => {
  const { data, setData, id, setData2 } = props;
  const newData = [
    {
      id: "1",
      name: "John Doe",
      type: "Nước",
      money: 100,
      moneyPayed: 100,
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
    {
      id: "1",
      name: "John Doe",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
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
    setData2([1000, 700]);
    setData([
      {
        id: "1",
        type: "Điện",
        money: 300,
        moneyPayed: 100,
        year: "12/2023",
        rate: "100%",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Vệ sinh",
        money: 200,
        moneyPayed: 100,
        rate: "50%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Rác",
        money: 300,
        moneyPayed: 300,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Quỹ chung",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Điện",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
    ]);
    setOpen(false);

    // Handle form submission logic here
  };

  return (
    <div>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-70 rounded-md ml-2"
        onClick={handleOpen}
      >
        Cập nhật
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
                  Loại phí
                </label>
                <input
                  id="type"
                  type="text"
                  value="Điện"
                  disabled
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="money"
                >
                  Đợt thu
                </label>
                <input
                  //id="money"
                  type="text"
                  placeholder="12/2023"
                  disabled
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="money"
                >
                  Số tiền thu
                </label>
                <input
                  //id="money"
                  type="text"
                  placeholder="100"
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

const BlueModel = (props) => {
  const { data, setData, id, setData2 } = props;
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
    setData([
      {
        id: "1",
        type: "Điện",
        money: 300,
        moneyPayed: 100,
        year: "12/2023",
        rate: "100%",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Vệ sinh",
        money: 200,
        moneyPayed: 100,
        rate: "50%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Rác",
        money: 300,
        moneyPayed: 300,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Quỹ chung",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Điện",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        type: "Môi trường",
        money: 200,
        moneyPayed: 0,
        year: "12/2023",
        rate: "100%",
      },
    ]);
    setData2[(1200, 700)];
    setOpen(false);

    // Handle form submission logic here
  };

  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-70 rounded-md ml-2"
        onClick={handleOpen}
      >
        Thêm khoản thu
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
                  Loại phí
                </label>
                <input
                  id="type"
                  type="text"
                  placeholder="Môi trường"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="money"
                >
                  Đợt thu
                </label>
                <input
                  //id="money"
                  type="text"
                  placeholder="12/2023"
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
  const { setSelectedYear, setSelectedId, setData, setData2 } = props;
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

        <BlueModel setData={setData} setData2={setData2}></BlueModel>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { data2 } = props;
  return (
    <div className="flex justify-center mt-4">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tổng số tiền cần thu
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data2[0]}
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
          Tổng số tiền thu được
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data2[1]}
        </p>
      </a>
    </div>
  );
};

const Table = (props) => {
  const { selectedId, selectedYear, data, setData, setData2 } = props;
  const Confirm = () => {
    confirm("Bạn có muốn xóa khoản phí này không ?");
    setData2([800, 700]);
    setData([
      {
        id: "1",
        type: "Điện",
        money: 100,
        moneyPayed: 100,
        year: "12/2023",
        rate: "100%",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Vệ sinh",
        money: 200,
        moneyPayed: 100,
        rate: "50%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Rác",
        money: 300,
        moneyPayed: 300,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Quỹ chung",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
      {
        id: "1",
        name: "John Doe",
        type: "Điện",
        money: 100,
        moneyPayed: 100,
        rate: "100%",
        year: "12/2023",
      },
    ]);
  };
  //api
  return (
    <table className="border-collapse table-auto min-w-full bg-white border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border py-2 px-4 border-b">Loại phí</th>
          <th className="border py-2 px-4 border-b">Số tiền cần đóng</th>
          <th className="border py-2 px-4 border-b">Đã thu</th>
          <th className="border py-2 px-4 border-b">Tỷ lệ</th>
          <th className="border py-2 px-4 border-b">Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) =>
          row.year == selectedYear ? (
            row.id.includes(selectedId) ? (
              <tr key={index}>
                <td className=" border py-2 px-4 border-b">{row.type}</td>
                <td className=" border py-2 px-4 border-b">{row.money}</td>
                <td className=" border py-2 px-4 border-b">{row.moneyPayed}</td>
                <td className=" border py-2 px-4 border-b">{row.rate}</td>
                <td className=" border py-2 px-4  flex justify-center">
                  <a
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    href="./quanLyPhi/1"
                  >
                    Chi tiết
                  </a>

                  <GreenModel
                    data={data}
                    setData={setData}
                    id={index}
                    setData2={setData2}
                  ></GreenModel>

                  {row.moneyPayed == 0 ? (
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-70 rounded-md ml-2"
                      onClick={Confirm}
                    >
                      Xoá
                    </button>
                  ) : (
                    <button class="bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed rounded-md ml-2">
                      Xóa
                    </button>
                  )}
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
  const [selectedYear, setSelectedYear] = useState("12/2023");
  const [selectedId, setSelectedId] = useState("");
  const [data2, setData2] = useState([900, 700]);
  const [data, setData] = useState([
    {
      id: "1",
      type: "Nước",
      money: 100,
      moneyPayed: 0,
      year: "12/2023",
      rate: "0%",
    },
    {
      id: "1",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
      year: "12/2023",
      rate: "100%",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Vệ sinh",
      money: 200,
      moneyPayed: 100,
      rate: "50%",
      year: "12/2023",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Rác",
      money: 300,
      moneyPayed: 300,
      rate: "100%",
      year: "12/2023",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Quỹ chung",
      money: 100,
      moneyPayed: 100,
      rate: "100%",
      year: "12/2023",
    },
    {
      id: "1",
      name: "John Doe",
      type: "Điện",
      money: 100,
      moneyPayed: 100,
      rate: "100%",
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
        setData2={setData2}
      />
      <Card data2={data2}></Card>
      <Table
        selectedYear={selectedYear}
        selectedId={selectedId}
        data={data}
        setData={setData}
        setData2={setData2}
      />
    </div>
  );
}
