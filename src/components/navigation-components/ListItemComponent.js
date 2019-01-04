import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/Inbox';

class ListItemComponent extends React.Component {

  render() {
    return (
      <div>
      <a href={this.props.url} target="_blank">
        <ListItem button>
          <Avatar>
            <InboxIcon />
          </Avatar>
          <ListItemText primary={this.props.pdfName}  secondary={this.props.timestamp}></ListItemText>
        </ListItem>
      </a>
      </div>
    );
  }
};

export default (ListItemComponent);
