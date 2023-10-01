export default function Footer({ datas }) {
  console.log(datas);
  const qty = datas.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  const checked = datas.filter(data => data.checked);
  const sudahBeli = checked.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  const persentase = Math.round(checked.length/datas.length * 100);

  return (
    <footer className="stats">
      Ada {qty} barang di daftar belanjaan, {sudahBeli} barang sudah dibeli ({persentase}%)
    </footer>
  );
}

