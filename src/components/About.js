import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const About = () => (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Word of the Day {this.props}
          </Typography>
          <Typography variant="headline" component="h2">
            benevolent
          </Typography>
          <Typography  color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    );

    export default About