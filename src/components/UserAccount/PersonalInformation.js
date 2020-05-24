import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import UserAvatar from '../commons/UserAvatar';
import { FormCard, FormInput, FormButton } from '../commons';
import { editSellerInfo } from '../../redux/actions';

class PersonalInformation extends Component {
  state = {
    form: {
      phoneNumber: '',
      district: '',
      cell: '',
      province: '',
      sector: '',
    },
    authority: '',
  };

  componentDidMount() {
    const {
      profile: {
        authorities: [{ authority }],
      },
    } = this.props;
    this.setState({
      authority,
    });
  }

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
    });
  };

  handleSubmit = () => {
    const { authority } = this.state;
    const { form } = this.props;
    const { editSeller } = this.props;
    if (authority === 'COMPANY_SELLER' || 'INDIVIDUAL_SELLER' || 'COOPERATIVE_SELLER') {
      const url = '/signup-company';
      editSeller({ form, url });
    }
  };

  render() {
    return (
      <FormCard
        header="Personal information"
        contents={
          <Form>
            <div className="form-content">
              <div className="form-input-container">
                <FormInput name="phoneNumber" label="Phone No." bordered />
                <FormInput name="district" icon="caret down" label="District" bordered />
                <FormInput name="cell" icon="caret down" label="Cell" bordered />
              </div>
              <div className="form-input-container">
                <FormInput name="province" icon="caret down" label="Province" bordered />
                <FormInput name="sector" icon="caret down" label="Sector" bordered />
                <FormInput name="village" icon="caret down" label="Village" bordered />
              </div>
              <div>
                <UserAvatar size="large" upload="Upload profile picture" />
              </div>
            </div>
            <div className="form-bottom-container">
              <div className="user-info-container">
                <div className="user-info">
                  <span>Full name: LastName FirstName</span>
                  <span>Gender: Male</span>
                  <span>National ID Number: XXXXX </span>
                  <span>District: XXXXX</span>
                  <span>Cell: XXXXXXXX</span>
                </div>
                <div className="user-info">
                  <span>Full name: LastName FirstName</span>
                  <span>Gender: Male</span>
                  <span>National ID Number: XXXXX </span>
                  <span>District: XXXXX</span>
                  <span>Cell: XXXXXXXX</span>
                </div>
              </div>
              <div className="form-button-container">
                <FormButton
                  icon={<Check />}
                  background="#1e90ff"
                  title="Save changes"
                  color="white"
                  onClick={this.handleSubmit}
                />
                <FormButton
                  icon={<Close />}
                  background="#a4b0be"
                  title="Deactivate account"
                  color="white"
                />
              </div>
            </div>
          </Form>
        }
      />
    );
  }
}

const mapStateToProps = ({ signin: { profile } }) => ({
  profile,
});

const mapDispatchToProps = (dispatch) => ({
  editSeller: (payload) => dispatch(editSellerInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation);
