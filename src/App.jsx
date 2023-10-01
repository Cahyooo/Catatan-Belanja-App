import Header from "./Header";
import Body from "./Body";

const Latihan2 = () => {
  const defaultItems = [
    {
      id: 1,
      name: "Kopi Bubuk",
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: "Gula Pasir",
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: "Air Mineral",
      quantity: 3,
      checked: false,
    },
  ];

  return (
    <>
      <div className="app">
        <Header></Header>
        <Body defaultItems={defaultItems}></Body>
      </div>
    </>
  );
};

export default Latihan2;
