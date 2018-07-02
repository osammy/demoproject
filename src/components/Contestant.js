import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';






const Contestant = (props) => (
    <div>
        <NavLink style={{"textDecoration": "none"}} exact activeClassName="current" to='/about'>
            <ListItem dense button>
                &nbsp;  <Avatar alt="Remy Sharp" src="http://via.placeholder.com/50x50" />
                &nbsp;&nbsp;&nbsp; <p>{props.votes}</p>
                <ListItemText primary={props.contestantName} />

                <ListItemSecondaryAction>
                    <Button size="small"
                        onClick={props.upVote}>+</Button>
                    <Button size="small"
                        onClick={ props.downVote }>-</Button>
                    <LinearProgress color="primary" variant="determinate" value={props.votePercent} />
                </ListItemSecondaryAction>
            </ListItem>
        </NavLink><Divider inset />
    </div>
)

export default Contestant