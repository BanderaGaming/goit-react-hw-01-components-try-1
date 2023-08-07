import { Profile } from "./profile/profile.jsx";
import { Statistics } from "./data/data.jsx";
import { FriendList } from "./friends/friends.jsx";
import { TransactionHistory } from "./transactions/transactions.jsx";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json"
import transactions from "../data/transactions.json";
import './style.css'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
  tag={user.tag}
  location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title='Upload stats'
      data={data}
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      data={transactions}
      />
      
    </div>
  );
};
