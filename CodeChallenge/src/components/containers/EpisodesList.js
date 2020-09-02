// Native Components
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

// Components
import Episode from '../Episode';

class Episodes extends React.Component {
    render() {
        return (
            <View>
                {
                    this.props.list.map((item, key) => (
                        <ListItem key={key} bottomDivider>
                            <Episode episode={item} />
                        </ListItem>
                    ))
                }
            </View>
        );
    }
}

export default Episodes;
