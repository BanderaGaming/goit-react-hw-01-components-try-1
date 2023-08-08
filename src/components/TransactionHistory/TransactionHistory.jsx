import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export function TransactionHistory({ data }) {
    return <table className={css.transactions}>
  <thead >
    <tr className={`${css.title} ${css.item}`}>
      <th className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {data.map((item) => {
        return <tr key={item.id} className={css.transData}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
    </tr>
    })}
  </tbody>
</table>
};