"use client"
import Image from 'next/image'
import { useState } from 'react';

const YearSelector = (props) => {
  //const [selectedYear, setSelectedYear] = useState('');
  const {setSelectedYear,setSelectedId}=props
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleInputChange=(event)=>{
    setSelectedId(event.target.value)
  }
   const options=[1,2,3,4,5];
  return (
    <div className="flex items-center justify-between">
      <select className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleYearChange}>
      {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
      ))}
      </select>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

const Table = (props) => {
  const {selectedId,selectedYear}=props
  const data = [
    {
      id:"1",
      name: 'John Doe',
      address: 'john.doe@example.com',
      money:123,
      moneyPayed:100,
      note:" ",
      year:1
    },
    {
      id:"2",
      name: 'John Doe',
      address: 'john.doe@example.com',
      money:100,
      moneyPayed:100,
      note:"Thu đủ ",
      year:2    },
  ];

  return (
    <table className="border-collapse border min-w-full bg-white border border-gray-300">
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
        {data.map((row, index) => (
          row.year==selectedYear?(row.id.includes(selectedId)?
          < tr key={index}>
            <td className="border py-2 px-4 border-b">{row.id}</td>
            <td className="border py-2 px-4 border-b">{row.name}</td>
            <td className="border py-2 px-4 border-b">{row.address}</td>
            <td className="border py-2 px-4 border-b">{row.moneyPayed}</td>
            <td className="border py-2 px-4 border-b"><a href="./thuPhi/1">Thu</a>{row.note}</td>
          </tr>:""):""

        ))}
      </tbody>
    </table>
  );
};


export default function Home() {
  const [selectedYear,setSelectedYear]=useState(1)
  const [selectedId,setSelectedId]=useState("")
  return (
    <div>
    <YearSelector setSelectedYear={setSelectedYear} setSelectedId={setSelectedId} />
    <Table selectedYear={selectedYear} selectedId={selectedId} />
    </div>
  )
}
