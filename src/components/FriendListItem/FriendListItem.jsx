import css from './FriendListItem.module.css';
import PropTypes from "prop-types";

FriendListItem.propTypes = {
    friend:PropTypes.object
}

export default function FriendListItem({ friend }) {
    return <li className={css.item} key={friend.id}> 
        <span className={friend.isOnline ? `${css.online} ${css.status}` : `${css.offline} ${css.status}`}></span>
    <img className={css.userIcon} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.username}>{friend.name}</p>
</li>};