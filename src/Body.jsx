import { useState } from "react";
import Footer from "./Footer";

export default function Body(props) {
  const { defaultItems } = props;
  const [datas, setDatas] = useState(defaultItems);
  const [qty, setQty] = useState(1);
  const [input, setInput] = useState("");


  const tambahData = () => {
    if (input == "") return;

    let getId;
    if (datas.length === 0) {
      getId = 1;
    } else {
      getId = datas[datas.length - 1].id + 1;
    }

    const newData = {
      id: getId,
      name: input,
      quantity: parseInt(qty),
      checked: false,
    };

    const newDataArray = [...datas];
    newDataArray.push(newData);
    setDatas(newDataArray);

    setInput("");
    setQty(1);
  };

  const hapusData = (index) => {
    datas.splice(index, 1);
    setDatas([...datas]);
  };

  const checkOrNot = (id) => {
    const data = datas.find((data) => data.id === id);
    if (data.checked) {
      data.checked = false;
    } else {
      data.checked = true;
    }
    setDatas([...datas]);
  };

  const urutan = (event) => {
    const urut = event.target.value;
    if (urut == "input") {
      datas.sort((a, b) => a.id - b.id);
      setDatas([...datas]);
    } else if (urut == "nama") {
      datas.sort((a, b) => a.name.localeCompare(b.name));
      setDatas([...datas]);
    } else if (urut == "ceklis") {
      datas.sort((a, b) => b.checked - a.checked);
      setDatas([...datas]);
    }
  };

  return (
    <>
      <form className="add-form">
        <h3>Hari ini belanja apa kita?</h3>
        <div style={{ display: "flex" }}>
          <div>
            <select
              onChange={(e) => {
                const value = e.target.value;
                setQty(value);
              }}
              value={qty}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input
              type="text"
              placeholder="nama barang..."
              onChange={(e) => {
                const value = e.target.value;
                setInput(value);
                setInput(e.target.value);
              }}
              value={input}
            />
          </div>
          <button
            style={{
              fontSize: 1.5 + "rem",
              marginLeft: 10 + "px",
            }}
            onClick={tambahData}
            type="button"
          >
            Tambah
          </button>
        </div>
      </form>
      <div className="list">
        <ul>
          {Array.isArray(datas) &&
            datas.map((data, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={data.checked}
                    onChange={() => checkOrNot(data.id)}
                  />
                  <span
                    style={
                      data.checked ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {data.quantity} {data.name}
                  </span>
                  <button onClick={() => hapusData(index)}>
                    &times;
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="actions">
        <select onChange={(event) => urutan(event)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="nama">Urutkan berdasarkan nama barang</option>
          <option value="ceklis">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          onClick={() => {
            setDatas([]);
          }}
        >
          Bersihkan Daftar
        </button>
      </div>
      <Footer datas={datas} />
    </>
  );
}
