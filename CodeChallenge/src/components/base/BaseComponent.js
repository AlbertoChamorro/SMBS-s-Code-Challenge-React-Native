// Native Components
import React from 'react';
import { Alert, Share } from 'react-native';

class BaseComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    createDialog(title, message, options = {}) {
        let actions = [];
        let showOkButton = options.showOkButton || false;
        let showCancelButton = options.showCancelButton || false;

        showOkButton == true && actions.push({ text: "OK", onPress: () => options.onPressOkButton || {} });

        showCancelButton == true && actions.push({
            text: "Cancel",
            onPress: () => options.onPressCancelButton || {},
            style: "cancel"
        });

        return Alert.alert(
            title,
            message,
            actions,
            { cancelable: false }
        );
    }

    async shareData(message) {
        try {
            const result = await Share.share({
                message,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

export default BaseComponent;