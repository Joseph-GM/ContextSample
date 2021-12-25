import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { UserDispatch} from '../App';


function User({user}) {

    const dispatch = useContext(UserDispatch);
    return (
        <View style={styles.viewStyle}>
            <Text 
                style={{
                    fontSize: 15,
                    color: user.active? 'green' : 'black',
                    fontWeight: user.active? 'bold' : 'normal' 
                }}
                onPress={() => {
                    dispatch({type: 'TOGGLE_USER', id: user.id})
                }}
            >
                {user.username} {user.email}
            </Text>
            <Button 
                title='삭제'
                onPress={() => {
                    dispatch({type: 'REMOVE_USER', id: user.id})
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flexDirection: 'row'
    },
    textStyle : {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default React.memo(User);
