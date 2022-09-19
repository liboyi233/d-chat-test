/**
 * Sets flags on messages, depending on global settings. The flags are used in databaser middleware.
 */

const globalSettings = store => next => action => {
	let ignoredUsers;

	switch (action.type) {
		case 'chat/RECEIVE_MESSAGE':
		case 'chat/RECEIVE_REACTION':
			ignoredUsers = store.getState().globalSettings.muted;
			// includes() 判断一个数组是否包含一个指定值
			if (ignoredUsers.includes(action.payload.message.addr)) {
				action.payload.message.ignored = true;
			}
			break;
		// globalSetting 和 chatSetting 有何区别？
	}
	next(action);
};

export default globalSettings;
