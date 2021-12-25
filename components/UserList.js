import React from 'react'
import { View, Text } from 'react-native'
import User from './User';

function UserList({users}) {
    return (
        <View>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </View>
    )
}

export default React.memo(UserList);
