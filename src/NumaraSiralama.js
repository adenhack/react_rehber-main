import React from "react";
import { Table } from "reactstrap";
import { MdOutlineContactMail } from "react-icons/md";

function NumaraSiralama(props) {
  const myStyle = {
    width: "40rem",
    height: "450px",
    overflow: "auto",
  };

  const filtrele = () => {
    return props.filtered.map((filtre, index) => (
      <tr key={index}>
        <td></td>
        <td>{filtre.isimSoyisim}</td>
        <td>{filtre.telNo}</td>
      </tr>
    ));
  };

  const tamListe = () => {
    return props.list.map((liste, index) => (
      <tr key={index}>
        <td></td>
        <td>{liste.isimSoyisim}</td>
        <td>{liste.telNo}</td>
      </tr>
    ));
  };

  return (
    <div style={myStyle} className="mt-4">
      <Table>
        <thead>
          <tr>
            <th>{<MdOutlineContactMail style={{width:"20px",height:"20px"}}/>}</th>
            <th style={{ width: "320px" }}>Ad-Soyad</th>
            <th style={{ width: "320px" }}>Numara</th>
          </tr>
        </thead>
        <tbody>{!props.filtered.length ? tamListe() : filtrele()}</tbody>
      </Table>
    </div>
  );
}

export default NumaraSiralama;
