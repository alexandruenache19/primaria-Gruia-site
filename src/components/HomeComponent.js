import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from './navigation-components/NavBar';
import { init } from 'ityped';
import $ from 'jquery';

const sections = {
  'Guvernanta': {
    'imagine': "http://www.gds.ro/wp-content/uploads/2017/09/primarie-municipiului-Craiova.jpg",
    'descriere': 'Asta e descrierea'
  },
  'Comuna': {
    'imagine': "http://www.comune.ro/files/comuna-dubova.jpg",
    'descriere': 'Asta e descrierea'
  },
  'Localnici': {
    'imagine': "https://fundatia-adept.org/wp-content/uploads/2018/04/Poza-localnici-1.jpg",
    'descriere': 'Asta e descrierea'
  }
};

class HomeComponent extends Component {

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });

    console.log(this.props.auth);

    const fadingText = document.querySelector('#fading-text');
    init(fadingText, { showCursor: false, strings: ['Transparenta.', 'Traditii.', 'Biodiversitate.', 'Viziune europeana.'] });
  }

  renderSections = () => {
    const displaySections = _.map(sections, (value, sectionTitle) => {
      return (
        <Grid key={sectionTitle} item xs={4}>
          <Card>
            <CardMedia
              component="img"
              style={{objectFit: 'cover'}}
              height="140"
              image={value['imagine']}
              title={sectionTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {sectionTitle}
              </Typography>
              <Typography component="p">
                {value['descriere']}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="inherit">
                Afla mai multe
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return displaySections;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div style={{
          width: '100%',
          height: '50vh',
          backgroundSize: 'cover',
          background: "url('https://romaniatourstore.com/wp-content/uploads/2016/05/Pestera-Village-Romania.jpg') no-repeat center center fixed",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '3rem'
        }}>
          <h1 className="header-title" style={{fontSize: '2.5rem'}}>
            Descopera Comuna Gruia
            <p style={{position:'absolute', fontSize: '1.5rem'}} id="fading-text"></p>
          </h1>
        </div>

        <Grid container style={{flexGrow: 1}} spacing={16} style={{padding: '3rem'}}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {this.renderSections()}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { })(HomeComponent);
