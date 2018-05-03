import React from 'react';
import UserList from './UserList';
import UserListItem from './UserListItem';

class UsersWhoVote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        group_name: '',
        user_name: '',
        users: [{name: "Jim"}]
      };
    }

    //     // fetch(`/${name}`, {
    //     //   method: 'POST',
    //     //   body: JSON.stringify(queryString),
    //     //   headers: new Headers({
    //     //     'Content-Type': 'application/json'
    //     //   })
    //     // }).then(res => res.json());

  
    render() {
      return (
        <div>
            <br />
            <h3>WELCOME *USERNAME*,</h3>
            {/* {userName = COMES FROM CALL TO DATABASE or UserList.js?} */}
            <br />
            <h3>member of *GROUPNAME*!</h3>
            {/* {groupName = COMES FROM CALL TO DATABASE or GroupList.js?} */}
            <br />
            <h5>*GROUPNAME*'s members: 
                <UserList>
                    {/* DOES THIS LIST ALL MEMBERS? IF NOT... HOW? */}
                    {this.state.users.map((user, index) => {
                        return (
                            <UserListItem
                                key={index}
                                name={user.name}
                            />
                        );
                    })}
                </UserList>
            </h5>
            <br /><br />

        {/* EVENTS DISPLAY */}
        <h3>EVENTS DISPLAY HERE</h3>

        </div>
      )
    }
}

export default UsersWhoVote;