export function Profile ({username,tag,location,avatar,stats}) {
    return <div className=''>
  <div className=''>
    <img
      src={avatar}
      alt={username}
      className=''
    />
            <p className=''>{username}</p>
            <p className=''>{tag}</p>
            <p className=''>{location}</p>
  </div>

  <ul className=''>
    <li>
      <span className=''>Followers</span>
                <span className=''>{stats.followers}</span>
    </li>
    <li>
      <span className=''>Views</span>
      <span className=''>{stats.views}</span>
    </li>
    <li>
      <span className=''>Likes</span>
      <span className=''>{stats.likes}</span>
    </li>
  </ul>
</div>
   
};