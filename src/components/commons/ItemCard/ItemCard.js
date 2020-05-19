import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Label, Image, Rating, Grid, Placeholder } from 'semantic-ui-react';
import { OfflineBolt, Toys } from '@material-ui/icons/';
import './ItemCard.scss';

const ItemCard = ({ loading, products }) => {
  const history = useHistory();

  return (
    <div>
      <Card.Group stackable itemsPerRow={4} className="card-group-container" widths="2">
        <Grid>
          <Grid.Row style={{ marginTop: 20, marginLeft: 30 }}>
            <Label attached="top left" className="group-label">
              <div>
                <OfflineBolt
                  className="flash-deals"
                  style={{ color: 'red', fontSize: 25, marginRight: 5 }}
                />
                <span>flash deals</span>
              </div>
            </Label>
            <Label className="group-label" attached="top right">
              <span className="label-view-more">View more</span>
            </Label>
          </Grid.Row>
          <Grid.Row style={{ marginTop: -40 }}>
            {products.map((product) => {
              return (
                <Card fluid className="card-container">
                  <Card.Content>
                    {loading ? (
                      <Placeholder>
                        <Placeholder.Image rectangular />
                      </Placeholder>
                    ) : (
                      <Image
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        style={{ borderRadius: '15px' }}
                        onClick={() => {
                          history.push('/item');
                        }}
                      />
                    )}
                    <Label attached="bottom right" className="rating-label">
                      {!loading && <Rating maxRating={5} clearable />}
                    </Label>
                    <Label attached="bottom left" className="price">
                      {!loading && <span>Rwf {product.unitPrice}</span>}
                    </Label>
                  </Card.Content>
                </Card>
              );
            })}
          </Grid.Row>
        </Grid>
      </Card.Group>

      <Card.Group stackable itemsPerRow={4} className="card-group-container" widths="2">
        <Grid>
          <Grid.Row style={{ marginTop: 20, marginLeft: 30 }}>
            <Label attached="top left" className="group-label">
              <div>
                <Toys className="new-on-market" />
                <span>New on the market</span>
              </div>
            </Label>
            <Label className="group-label" attached="top right">
              <span className="label-view-more">View more</span>
            </Label>
          </Grid.Row>
          <Grid.Row style={{ marginTop: -40 }}>
            <Card fluid className="card-container">
              <Card.Content>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  style={{ borderRadius: '15px' }}
                />
                <Label attached="bottom right" className="rating-label">
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached="bottom left" className="price">
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className="card-container">
              <Card.Content>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  style={{ borderRadius: '15px' }}
                />
                <Label attached="bottom right" className="rating-label">
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached="bottom left" className="price">
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className="card-container">
              <Card.Content>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  style={{ borderRadius: '15px' }}
                />
                <Label attached="bottom right" className="rating-label">
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached="bottom left" className="price">
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
            <Card fluid className="card-container">
              <Card.Content>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  style={{ borderRadius: '15px' }}
                />
                <Label attached="bottom right" className="rating-label">
                  <Rating maxRating={5} clearable />
                </Label>
                <Label attached="bottom left" className="price">
                  <span>Rwf 3, 000</span>
                </Label>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>
      </Card.Group>
    </div>
  );
};

export default ItemCard;
