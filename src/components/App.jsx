import { Profile } from "./profile/Profile.jsx";
import { Statistics } from "./statistics/Statistics.jsx";
import { FriendList } from "./friendList/FriendList.jsx";
import { TransactionHistory } from "./transactionHistory/TransactionHistory.jsx";

import user from "../data/user.json";
import stats from "../data/stats.json"
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import './style.css'

export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title='Upload stats' data={stats}/>
      <FriendList friends={friends}/>
      <TransactionHistory data={transactions}/>
    </div>
  );
};
