

 function ReceiptItem(props){
//    let [receipts, setReceipts]
   



    // if (props.paid === false ){
        return( 
            (props.paid === false ) ?
            <div className="receiptItem">
                <h2 className="name">{props.person}</h2>
                <h3>Main: {props.main}</h3>
                <h3>Protein: {props.protein}</h3>
                <h3>Rice: {props.rice}</h3>
                <h3>Sauce: {props.sauce}</h3>
                <h3>Drink: {props.drink}</h3>
                <h3>Cost: {props.cost}</h3>
                <input
                    type="checkbox" 
                    value={props.id} 
                    onChange={() => props.hasPaid(props.id)}
                    />
            
            </div> 
            :
            null
        )
    // } else {
    //     return null
    // }
}

export default ReceiptItem;