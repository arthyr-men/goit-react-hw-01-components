import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

export function TransactionHistory({items}){
return(
    <table className={css.table}>
   
        <thead className={css.table_thead}>
            <tr>
            <th className={css.table_cell}>Type</th>
            <th className={css.table_cell}>Amount</th>
            <th className={css.table_cell}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item =>(
           <thead key ={item.id} className={css.table_thead}>
                <tr>
                <th className={css.table_cell}>{item.type}</th>
                <th className={css.table_cell}>{item.amount}</th>
                <th className={css.table_cell}>{item.currency}</th>
                </tr>
            </thead>
            ))}
     
        </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

//----------------------- перший спосіб -----------------------
//----------------------- другий спосиб -----------------------
// export function TransactionTitle({children}){
//     return(
//         <table className={css.transactionhistory}>
       
//             <thead className={css.transactionTitle}>
//                 <tr className={css.transactionTR}>
//                 <th className={css.typeth}>Type</th>
//                 <th className={css.amountth}>Amount</th>
//                 <th className={css.currencyth}>Currency</th>
//                 </tr>
//             </thead>
//                 <tbody className={css.transactionTbody} >
//                 {children}
//                 </tbody>
//     </table>
//     )
//     }

// export function TransactionHistory({items}){
//     return(
//         <thead className={css.transactionTitle}>
//             {items.map(item =>(
//                 <tr key ={item.id} className={css.transactionTR}>
//                 <th className={css.typeth}>{item.type}</th>
//                 <th className={css.amountth}>{item.amount}</th>
//                 <th className={css.currencyth}>{item.currency}</th>
//                 </tr>
              
//             ))}
     
//      </thead>
//     )
//     }

//----------------------- другий спосиб -----------------------
