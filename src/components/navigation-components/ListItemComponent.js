import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import InboxIcon from '@material-ui/icons/Inbox'
import Typography from '@material-ui/core/Typography';

class ListItemComponent extends Component {
  render () {
    return (
      <div>
        <a href={this.props.url} target='_blank'>
          <ListItem button>
            <Avatar>
              <InboxIcon />
            </Avatar>
            <ListItemText primary={this.props.pdfName} secondary={
              <React.Fragment>
                <Typography component='span' color='textPrimary'>
                  {this.props.timestamp}
                </Typography>
                <Typography component='span'color='textPrimary'>
                  {'Data finalizarii:'} {'03/09/2014'}
                </Typography>
                <Typography component='span'color='textPrimary'>
                  {'Numar Contract:'} {'C125A011142700012'}
                </Typography>
                <Typography component='span' color='textPrimary'>
                  {'Valoarea sprijinului in euro:'} {'654606'}
                </Typography>
                {'Proiect finantat de Agentia de Finantare a Investitiilor Rurale Masura 125A'}
              </React.Fragment>
            }
            />
          </ListItem>
        </a>
      </div>
    )
  }
};

export default (ListItemComponent)
