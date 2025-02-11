import { Fragment, Component } from 'react';

import Users from './Users';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    // make an http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;