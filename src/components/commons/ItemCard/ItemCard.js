import React from 'react';
import { Card, Label, Image, Rating, Grid, Icon } from 'semantic-ui-react';
import './ItemCard.scss';

const ItemCard = () => (
    <div>
      <Card.Group stackable itemsPerRow={4} className='card-group-container' widths='2'>
        <Grid>
          <Grid.Row style={{ marginTop: 20, marginLeft: 30 }}>
            <Label attached='top left' className='group-label'>
              <span>
                <Icon name='question circle' size='large' color='red' />
                Flash deals
              </span>
            </Label>
            <Label className='group-label' attached='top right'>
              <span className='label-view-more'>View more</span>
            </Label>
          </Grid.Row>
          <Grid.Row style={{ marginTop: -40 }}>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>
      </Card.Group>

      <Card.Group stackable itemsPerRow={4} className='card-group-container' widths='2'>
        <Grid>
          <Grid.Row style={{ marginTop: 20, marginLeft: 30 }}>
            <Label attached='top left' className='group-label'>
              <span>
                <Icon name='question circle' size='large' color='green' />
                New on the market
              </span>
            </Label>
            <Label className='group-label' attached='top right'>
              <span className='label-view-more'>View more</span>
            </Label>
          </Grid.Row>
          <Grid.Row style={{ marginTop: -40 }}>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className='card-container'>
              <Card.Content>
                <Image
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{ borderRadius: '15px' }}
                />
                <Label attached='bottom right' className='rating-label'>
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached='bottom left' className='price'>
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>
      </Card.Group>
    </div>
);

export default ItemCard;
