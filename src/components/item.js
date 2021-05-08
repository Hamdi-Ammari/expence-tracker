import React , {useContext} from 'react';
import {GlobalContext} from '../context/globalState';

const Item = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <li className={transaction.amount <0 ? 'list-group-item mb-1 red':'list-group-item mb-1 green' }>
            <button onClick={() =>deleteTransaction(transaction.id)} type="button" className="btn btn-outline-danger">x</button>
            <span className='item-name'>{transaction.text}</span>
            <span className='item-price'>{transaction.amount} $</span>
        </li>
    )
}

export default Item;