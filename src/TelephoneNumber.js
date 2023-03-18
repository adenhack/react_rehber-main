


function TelephoneNumber(props){
    const myStyle = {
        width: "20rem",
        height:"2.5rem",
        borderTop:"none",
        borderRight:"none",
        borderLeft:"none"
    }

    return(
        <div>
            <input placeholder="Telefon Numarası Giriniz..." name="telNo" onChange={props.onChangeName} style={myStyle} className="mt-3" />
        </div>
    )
}

export default TelephoneNumber;