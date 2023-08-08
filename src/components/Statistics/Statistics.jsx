import css from "./data.module.css"
export function Statistics({ data, title }) {
  return <section className={css.stats}>
    {title ? <h2 className={css.title}>{title}</h2>: <></>}
      <ul className={css.list}>
        {data.map((item, id) => {
      return <li className={css.listItem} key={id}>
        <span className=''>{item.label} </span>
        <span className=''>{item.percentage}%</span>
    </li> })}
  </ul>
</section> 
}