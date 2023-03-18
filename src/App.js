import Baslik from "./Baslik";
import FilterButton from "./FilterButton";
import NumaraSiralama from "./NumaraSiralama";
import Name from "./Name";
import TelephoneNumber from "./TelephoneNumber";
import AddButton from "./AddButton";
import { useState } from "react";
import alertify from "alertifyjs";
import { MdConnectWithoutContact } from "react-icons/md";

function App() {
  const [rehber, setRehber] = useState({ isimSoyisim: "", telNo: "" });
  const [list, setList] = useState([]);
  const [filterText, setFilterText] = useState(``);

  const onChangeName = (e) => {
    setRehber({ ...rehber, [e.target.name]: e.target.value });
  };

  const onClickAdd = (e) => {
    if (!rehber.isimSoyisim === true || !rehber.telNo === true) {
      alertify.set("notifier", "position", "bottom-left");
      alertify.error(`Lütfen Formu Doldurunuz!`);
    } else {
      alertify.set("notifier", "position", "bottom-left");
      alertify.success("Kayıt Başarılı.");
      setList([...list, rehber]);
    }
  };

  const filtered = list.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div
      className="Container d-flex justify-content-center"
      style={{
        marginTop: "5%",
      }}
    >
      <div className="text-center">
        <Baslik />
        <MdConnectWithoutContact style={{ width: "50px", height: "50px" }} />
        <FilterButton
          filterText={filterText}
          setFilterText={setFilterText}
          list={list}
        />
        <NumaraSiralama filtered={filtered} list={list} />
        <Name onChangeName={onChangeName}/>
        <TelephoneNumber onChangeName={onChangeName}/>
        <AddButton onClickAdd={onClickAdd} />
      </div>
    </div>
  );
}

export default App;
