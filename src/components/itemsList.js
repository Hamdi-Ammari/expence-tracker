import React ,{useContext} from 'react';
import Item from './item';
import {GlobalContext} from '../context/globalState';


 const ItemsList = () => {

    const {transactions} = useContext(GlobalContext);

    return(
        <div className='history'>
            <div className='history-p mb-3'>
                <span className='header-span'>history</span>
            </div>
            <div className='history-ul'>
                <ul className="list-group">
                    {transactions.map(transaction => (
                        <Item key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            </div> 
        </div>
    )
}

export default ItemsList;