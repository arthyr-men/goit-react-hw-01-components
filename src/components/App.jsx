
import { UserProfile }  from './component_prifile/Profile.jsx';
import user from '../path/user.json';

import { Statistics } from './component_statistics/Statistics.jsx';
import { StatisticsList } from './component_statistics/Statistics.jsx';
import data from '../path/data.json';

import { FriendList } from './component_friendlist/FriendList.jsx';
import friends from '../path/friends.json';

import { TransactionHistory } from './component_transactionhistory/TransactionHistory.jsx';
import transactions from '../path/transactions.json';

export const App = () => {
  return (
    <>
       <UserProfile  
      username={user.username}
      tag ={user.tag} 
      location ={user.location}
      imgUrl={user.avatar} 
      followers={user.stats.followers} 
      views={user.stats.views} 
      likes={user.stats.likes} 
   />
   <>
      <Statistics title="Upload stats" stats={data} >
            <StatisticsList stats={data} />
        </Statistics>
    </>
    <>
        <FriendList  friends={friends} /> 
    </>
    <>
    <TransactionHistory items={transactions} />
    </>
    </>
   
  );
};



