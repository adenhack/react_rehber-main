import {Button} from "reactstrap";


function AddButton(props){
    return(
        <div className="mt-3">
            <Button style={{width:"10rem"}} onClick={props.onClickAdd}>Add</Button>
        </div>
    )
}

export default AddButton;