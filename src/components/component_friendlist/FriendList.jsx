import PropTypes from 'prop-types';
import css from "./FriendList.module.css";
import { FriendListItem } from './FriendListItem';

export function FriendList({friends}){
    return(
         <section className={css.friend_section}>
                <ul className={css.friend_list}>
              {friends.map(({id, avatar, name, isOnline}) => {
               return (
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name} 
                isOnline={isOnline}
               />
               );
               })
               }
                </ul>
        </section>
    )  
}

FriendListItem.propTypes = {
    key: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
//----------------------- перший спосіб -----------------------
// export function FriendList({friends}){
//     return(
      
//          <section className={css.friend_section}>

//          <ul className={css.friend_list}>
//          {friends.map(friend => (
//              <li key={friend.id} className={css.friend_item}>
//                  {friend.isOnline === true ?
//             <span className={css.true}>{friend.isOnline}</span> : 
//             <span className={css.false}>{friend.isOnline}</span>
//             }
//              <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
//              <p className={css.name}>{friend.name}</p>
           
//          </li> 
//          ))
            
//      }
//       </ul> 
//      </section>
//     )  
// }

// FriendList.propTypes = {
//     id: PropTypes.number,
//     isOnline: PropTypes.bool,
//     name: PropTypes.string,

// }

// `
//----------------------- перший спосіб -----------------------
//----------------------- другий спосиб -----------------------

// export function FriendList({children}){
//     return(
//          <section className={css.friend_section}>
//             {children}
//         </section>
//     )  
// }

// export function FriendListItem({friends}){
  
//     return(
//         <ul className={css.friend_list}>
//         {friends.map(friend => (
//             <li key={friend.id} className={css.friend_item}>
//                 {friend.isOnline === true ?
//            <span className={css.true}>{friend.isOnline}</span> : 
//            <span className={css.false}>{friend.isOnline}</span>
//            }
//             <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
//             <p className={css.name}>{friend.name}</p>
          
//         </li> 
//         ))
           
//     }
//      </ul> 
//     )
  
// }
// FriendList.propTypes = {
//     children: PropTypes.node,
// }
//----------------------- другий спосиб -----------------------




