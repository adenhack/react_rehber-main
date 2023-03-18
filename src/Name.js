

function Name(props) {

    const myStyle = {
        width: "20rem",
        height: "2.5rem",
        borderTop:"none",
        borderRight:"none",
        borderLeft:"none"
    }

    return (
        <div>
            <input placeholder="İsim Giriniz..." name="isimSoyisim" onChange={props.onChangeName} style={myStyle} className="mt-3" />
        </div>
    )
}

export default Name;