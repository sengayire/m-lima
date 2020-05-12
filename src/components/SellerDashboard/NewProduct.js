import React from 'react';
import { Form } from 'semantic-ui-react';
import { FormInput, FormButton, TextEditor } from '../commons';

const NewProduct = () => (
  <div className="new-product-container">
    <div className="seller-dashboard-header">
      <h1>New Products</h1>
    </div>
    <div className="new-product-description">
      <Form>
        <div className="product-form-inputs-container">
          <div className="form-inputs">
            <div>
              <FormInput bordered label="Product name" icon="search" />
              <FormInput bordered label="Quantity available" />
              <FormInput bordered label="Unit price" />
            </div>
            <div>
              <FormInput bordered label="Product types" />
              <FormInput bordered label="Unit of measure" />
            </div>
          </div>
          <div>
            <span>Description</span>
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
                <FormButton background="#2090ff" title="Publish" color="white" />
              </div>
            </div>
          </div>
        </div>
        x
      </Form>
    </div>
  </div>
);

export default NewProduct;
