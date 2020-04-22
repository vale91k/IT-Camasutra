export const getDialogs = (state) => {
	return state.dialogsPage.dialogs;
};
export const getMessages = (state) => {
	return state.dialogsPage.messagesHistory;
};
export const getnewMessageText = (state) => {
	return state.dialogsPage.newMessageText;
};