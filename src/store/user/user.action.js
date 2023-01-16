import userActionTypes from './user.types';
import createAction from '../../utilities/reducer/reducer.utils';

const setCurrentUser = (user) =>
	createAction(userActionTypes.setCurrentUser, user);

export default setCurrentUser;
