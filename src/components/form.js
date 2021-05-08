import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/globalState';


const TransactionForm = () => {

    const {addTransaction} = useContext(GlobalContext);
  
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const onChangeText = e => {
        setText(e.target.value);
    }

    const onChangeAmount = e => {
        setAmount(e.target.value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.random() * 9000000,
            text,
            amount: +amount
        }
        
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return(
        <div className='new-transaction mt-4'>
            <div className='newTran-header mb-3'>
                <span className='header-span'>add new transaction</span>
            </div>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="text" className="form-label">Text</label>
                    <input value={text} onChange={onChangeText} type="text" placeholder='Enter Text' className="form-control"/>
                    <label htmlFor="amount" className="form-label">Amount <span className='details'>(positive for income,negative for expence)</span></label>
                    <input value={amount} onChange={onChangeAmount} type="number" className="form-control"/>
                    <button type="submit" className="btn btn-primary mt-3">ADD TRANSACTION</button>
                </form>
        </div>
    )
}
export default TransactionForm;