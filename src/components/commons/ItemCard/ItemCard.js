import React from 'react';
import { Card, Label, Image, Grid, Rating } from 'semantic-ui-react';

const ItemCard = () => {
  return (
    <div>
      <Card>
        <Card.Content extra>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Label attached='bottom right' style={{ backgroundColor: 'transparent' }}>
                  <Rating maxRating={5} clearable />
                </Label>
              </Grid.Column>

              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Label attached='bottom right' style={{ backgroundColor: 'transparent' }}>
                  <Rating maxRating={5} clearable />
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemCard;
