import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%'
  },
  chip: {
    textDecoration: 'none',
    '&:hover': {
      color: 'black'
    },
    marginRight: theme.spacing.unit
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 1
  },
  section3: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
  }
})


function MiddleDividers (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {props.pdfName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary">
          {props.descrieere}
          Proiect finantat de Agentia de Finantare a Investitiilor Rurale Masura 125A
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <div>
          <Chip className={classes.chip} label='Valoarea Sprijinului 654.606' />
          <Chip className={classes.chip} label='Data finalizarii 03/09/2014' />
          <Chip className={classes.chip} label='Numar contract C125A011142700012' />
        </div>
      </div>
    </div>
  );
}

MiddleDividers.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MiddleDividers)
