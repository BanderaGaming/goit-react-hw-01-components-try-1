import css from './friends.module.css'
export function FriendList({ friends }) {
   return <ul className={css.list}>
        {friends.map((item) => {
    return <li className={css.item} key={item.id}> 
        <span className={item.isOnline ? `${css.online} ${css.status}` : `${css.offline} ${css.status}`}></span>
    <img className={css.userIcon} src={item.avatar} alt="User avatar" width="48" />
    <p className={css.username}>{item.name}</p>
</li>}) }
    </ul>
}