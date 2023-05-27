import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserAccount.scss';

const UserAccount = props => (
	<div>This is a component called UserAccount.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class UserAccount extends React.Component {
//   render() {
//     return <div>This is a component called UserAccount.</div>;
//   }
// }

const UserAccountPropTypes = {
	// always use prop types!
};

UserAccount.propTypes = UserAccountPropTypes;

export default UserAccount;
