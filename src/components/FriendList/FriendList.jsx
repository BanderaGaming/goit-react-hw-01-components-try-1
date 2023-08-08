import css from "./FriendList.module.css";
import { FriendListItem } from "components/FriendListItem/FriendListItem.jsx";
import PropTypes from "prop-types";

FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.object),
}

export function FriendList({ friends }) {
    return <ul className={css.list}>
        {friends.map((item) => {
            return <FriendListItem key={item.id} friend={item}/>
        })
    }
    </ul>
};