import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

const styles = {
  card: {
    maxWidth: 320
  },
  media: {
    height: '140',
    objectFit: 'cover'
  }
}


class Profile extends Component {
  generateProfiles = () => {
    const displaySections = _.map(this.props.echipa, (membru) => {
      console.log(membru)
      return (
        <div>

          <Card style={{width: 260}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                style={styles.media}
                image={membru['linkAvatar']}
                title='Membru'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {membru['nume']}
                </Typography>
                <Typography component='p'>
                  {membru['descriere']}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )
    })
    return displaySections
  }

  render() {
    return (
      <div>
        <Grid
          item xs={12}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          style={{padding: '3rem'}}
          spacing={40}>
          {this.generateProfiles()}
        </Grid>
      </div>
    );
  }
}

export default (Profile)
