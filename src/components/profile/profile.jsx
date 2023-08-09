import css from './Profile.module.css';
import PropTypes from "prop-types";

Profile.propTypes = {
   username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}

export default function Profile({ username, tag, location, avatar, stats }) {
    return <div className={css.profile}>
  <div className={css.desc}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
   
};  