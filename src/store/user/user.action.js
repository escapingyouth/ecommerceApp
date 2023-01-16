import userTypes from './user.types';
import createAction from '../../utilities/reducer/reducer.utils';

const setCurrentUser = (user) => createAction(userTypes.setCurrentUser, user);

export default setCurrentUser;
