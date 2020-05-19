import React, { Component } from 'react';
import { Form, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { FormInput, FormButton, TextEditor } from '../commons';
import { newProduct } from '../../redux/actions';

class NewProduct extends Component {
  state = {
    form: {
      description: 'description here',
      discountPercantage: 0,
      measurementUnit: 'string',
      name: 'string',
      productCategory: 0,
      quantityInStock: 0,
      seller: 0,
      status: 'ACTIVE',
      unitPrice: 0,
    },
    loading: false,
  };

  componentDidMount() {
    const {
      profile: { orgID },
      loading,
    } = this.props;

    const { form } = this.state;
    this.setState({ form: { ...form, seller: orgID }, loading });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    this.setState({ loading });
  }

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
    });
  };

  handleSubmit = () => {
    const { form } = this.state;
    const { createProduct } = this.props;
    const url = '/products';
    console.log('form', form);

    createProduct({ form, url });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="new-product-container">
        {loading && (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
        <div className="seller-dashboard-header">
          <h1>New Products</h1>
        </div>
        <div className="new-product-description">
          <Form>
            <div className="product-form-inputs-container">
              <div className="form-inputs">
                <div>
                  <FormInput
                    name="name"
                    bordered
                    label="Product name"
                    icon="search"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="quantityInStock"
                    bordered
                    label="Quantity available"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="unitPrice"
                    bordered
                    label="Unit price"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <FormInput
                    name="productCategory"
                    bordered
                    label="Product types"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="measurementUnit"
                    bordered
                    label="Unit of measure"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <span>Description</span>
                <div style={{ background: 'red' }}>Here</div>
                <TextEditor />
              </div>
            </div>
            <div className="product-form-image-container">
              <div className="form-product-image">
                <span className="product-form-edit">
                  <a>Edit</a>
                </span>
                <div className="product-image">
                  <div className="product-image-box">Image Here</div>
                  <span className="upload-product-image">
                    <a>Set featured image</a>
                  </span>
                  <div className="product-form-btn">
                    <FormButton
                      background="transparent"
                      title="Save as draft"
                      color="#2090ff"
                      border="#2090ff"
                    />
                    <FormButton
                      background="#2090ff"
                      title="Publish"
                      color="white"
                      onClick={this.handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ signin: { profile }, seller: { loading } }) => ({
  profile,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  createProduct: (payload) => dispatch(newProduct(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
