import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { TextareaAutosize } from '@material-ui/core';
import { Send, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton, Header } from '../commons';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import './MarketDemand.scss';

const manageMenu = () => {
  return (
    <div className="market-demand-container">
      <FormCard
        header="Demand details"
        contents={
          <Form>
            <div className="form-content no-bg">
              <div className="form-input-container">
                <FormInput label="Product name" bordered />
                <FormInput label="Quantity" bordered />
                <FormInput label="Unit of measure" bordered />
                <FormInput label="Total price" bordered />
                <FormInput icon="calendar alternate outline" label="expected date" bordered />
              </div>
              <div className="form-input-container">
                <label>Terms and conditions</label>
                <TextareaAutosize style={{ height: '100%', borderRadius: 10 }} />
              </div>
              <div />
            </div>
            <div className="form-bottom-container">
              <div />
              <div className="form-button-container">
                <FormButton
                  icon={<Send className="publish-icon" />}
                  background="#1e90ff"
                  title="Publish"
                  color="white"
                />
                <FormButton icon={<Close />} background="#a4b0be" color="white" title="Cancel" />
              </div>
            </div>
          </Form>
        }
      />
    </div>
  );
};

class Marketdemand extends Component {
  state = { profile: {}, isAuth: false };

  componentDidMount() {
    const { profile, isAuth } = this.props;
    this.setState({ profile, isAuth });
  }

  render() {
    const { profile, isAuth } = this.state;
    return (
      <Container
        header={<Header profile={profile} isAuth={isAuth} />}
        content={<DashboardContainer manageMenu={manageMenu} />}
      />
    );
  }
}
const mapStateToProps = ({ signin: { profile, isAuth } }) => ({
  isAuth,
  profile,
});

export default connect(mapStateToProps, null)(Marketdemand);
