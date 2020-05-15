import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import Container from '../../container';
import Contents from '../Contents';
import { Header, ItemCard } from '../commons';
import ItemsContainer from '../ItemsContainer';

class Home extends Component {
  state = {
    isAuth: false,
    profile: {},
  };

  componentDidMount = () => {
    const {
      login: { profile, isAuth },
    } = this.props;
    this.setState({
      isAuth,
      profile,
    });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      login: { loading, isAuth, message, errors, profile },
    } = nextProps;

    this.setState({
      loading,
      isAuth,
      message,
      errors,
      profile,
    });
  };

  render() {
    const { profile, isAuth } = this.state;
    return (
      <LazyLoad>
        <Container
          header={<Header profile={profile} isAuth={isAuth} />}
          content={<Contents isAuth={isAuth} contents={<ItemsContainer items={<ItemCard />} />} />}
        />
      </LazyLoad>
    );
  }
}

const mapStateToProps = ({ signin }) => ({
  login: signin,
});

export default connect(mapStateToProps, null)(Home);
