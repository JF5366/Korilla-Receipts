import ReceiptItem from "./ReceiptItem";


function Receipt(props){
    const receipts = [ 
      { 
        person: 'Karolin', 
        index: crypto.randomUUID(),
        order: { 
            main: 'Burrito', 
            protein: 'Organic Tofu', 
            rice: 'Purple Rice', 
            sauce: 'Green Crack', 
            toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], 
            drink: 'Korchata', 
            cost: 22 
        }, 
        paid: false 
      }, 
      { 
        person: 'Mark', 
        index: crypto.randomUUID(),
        order: { 
            main: 'Rice Bowl', 
            protein: 'Ginger Soy Chix', 
            rice: 'Sticky Rice', 
            sauce: 'Korilla', 
            toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], 
            drink: 'Korchata', 
            cost: 19 
        }, 
        paid: false 
      }, 
        { 
            person: 'Matt', 
            index: crypto.randomUUID(),
            order: { 
                main: 'Salad Bowl', 
                protein: 'Organic Tofu', 
                rice: 'none', 
                sauce: "K'lla", 
                toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
                drink: 'Sparkling Blood Orange Soda', 
                cost: 20 
            }, 
            paid: true } ]

  //let [receipts, setReceipts] = useState(receipts); //receipts or receiptComponents?

    let receiptComponents = receipts.map((item) => {
       // let paid = item.paid ? 'true' : 'false';



        return (
            <ReceiptItem
                index={item.index}
                person={item.person}
                main={item.order.main}
                protein={item.order.protein}
                rice={item.order.rice}
                sauce={item.order.sauce}
                drink={item.order.drink}
                cost={item.order.cost}
                paid={item.paid}
            />
        );
    });

    return <div className="receiptFullList">{receiptComponents}</div>;

}

export default Receipt;
