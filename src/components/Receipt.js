import ReceiptItem from "./ReceiptItem";
import React, { useState } from 'react';

let receipts = [ 
  { 
    person: 'Karolin', 
    order: { 
        main: 'Burrito', 
        protein: 'Organic Tofu', 
        rice: 'Purple Rice', 
        sauce: 'Green Crack', 
        toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], 
        drink: 'Korchata', 
        cost: 22 
    }, 
    paid: false,
    id: crypto.randomUUID() 
  }, 
  { 
    person: 'Mark', 
    order: { 
        main: 'Rice Bowl', 
        protein: 'Ginger Soy Chix', 
        rice: 'Sticky Rice', 
        sauce: 'Korilla', 
        toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], 
        drink: 'Korchata', 
        cost: 19 
    }, 
    paid: false,
    id: crypto.randomUUID()
  }, 
    { 
        person: 'Matt', 
        order: { 
            main: 'Salad Bowl', 
            protein: 'Organic Tofu', 
            rice: 'none', 
            sauce: "K'lla", 
            toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
            drink: 'Sparkling Blood Orange Soda', 
            cost: 20 
        }, 
        paid: false,
        id: crypto.randomUUID()
       } ]


function Receipt(props){
  let [receipt, setReceipts] = useState(receipts);


  function alreadyPaid(id){
   
   
    let newReceipts = [...receipts]
    let index = newReceipts.findIndex((item) => item.id === id)
    
    console.log(index)
    console.log(id)

    newReceipts[index].paid = true;
    setReceipts(newReceipts)

}



    let receiptComponents = receipts.map((item, index) => {

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
                key={item.id}
                id={item.id}
                hasPaid={alreadyPaid}
            /> 
           
        );
    });

    return <div className="receiptFullList">{receiptComponents}</div>;

}

export default Receipt;
