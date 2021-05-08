import React ,{useContext} from 'react';
import {GlobalContext} from '../context/globalState';


const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const balance = amounts.reduce((a,b) => a += b, 0);

    return(
        <div className='balance-div'>
            <span className='header-span'>your balance</span>
            <h4>{balance}$</h4>
        </div>
    )
};
export default Balance;