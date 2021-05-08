import React ,{useContext} from 'react';
import {GlobalContext} from '../context/globalState';

const IncomeExpence = () => {

    const {transactions} = useContext(GlobalContext);
    const income = transactions
    .map(transaction => transaction.amount)
    .filter(transaction => transaction > 0)
    .reduce((a,b) => a += b ,0);

    const expence = transactions
    .map(transaction => transaction.amount)
    .filter(transaction => transaction < 0)
    .reduce((a,b) => a -= b,0)
    
    console.log(expence)

    return(
        <div className='income-expence'>
            <div className= 'income'>
                <span>income</span>
                <h5>{income}$</h5>
            </div>
            <div className='expence'>
                <span>expence</span>
                <h5>{expence}$</h5>
            </div>
        </div>
    )
}
export default IncomeExpence;