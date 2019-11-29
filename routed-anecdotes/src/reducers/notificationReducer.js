const initialState = '';

export const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'NOTIFY':
            const newNotification = action.content;            
            return newNotification;

        case 'EMPTY':
            return '';

        default: return state;

    }
}

export const notificationCreation = (input) => {
    return {
        type: 'NOTIFY',
        content: input
    }
}

export const emptyNotificationCreation = () => {
    return {
        type: 'EMPTY',
        content: ''
    }
}

export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch ({
            type: 'NOTIFY',
            content: message
        });

        setTimeout(() => {
            dispatch({
                type: 'EMPTY',
                content: ''
            })
        }, duration);
    }
}