

function ReceiptItem(props){
    return(
        <div className="receiptItem">
            <h2 className="name">{props.person}</h2>
            <h3>Main: {props.main}</h3>
            <h3>Protein: {props.protein}</h3>
            <h3>Rice: {props.rice}</h3>
            <h3>Sauce: {props.sauce}</h3>
            <h3>Drink: {props.drink}</h3>
            <h3>Price: {props.cost}</h3>
        </div>
    )
}

export default ReceiptItem;