import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import InboxIcon from '@material-ui/icons/Inbox'

class ListItemComponent extends Component {
  render () {
    return (
      <div>
        <a href={this.props.url} target='_blank'>
          <ListItem button>
            <Avatar>
              <InboxIcon />
            </Avatar>
            <ListItemText primary={this.props.pdfName} secondary={this.props.timestamp} />
          </ListItem>
        </a>
      </div>
    )
  }
};

export default (ListItemComponent)
