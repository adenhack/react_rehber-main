
function FilterButton(props) {
    const myStyle = {
        width: "20rem",
        height: "2.5rem",
        borderTop:"none",
        borderRight:"none",
        borderLeft:"none"
    }

    return (
        <div>
            <input placeholder="Filtrele" value={props.filterText} onChange={(e)=>props.setFilterText(e.target.value)} style={myStyle} className="mt-3" />

        </div>
    )
}

export default FilterButton;