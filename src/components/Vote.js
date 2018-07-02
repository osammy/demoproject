import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Contestant from './Contestant';
import { addContestant } from '../actions/index.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar'


const mapStateToProps = state => {
    return {
        contestants: state.contestants.contestants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addContestant: contestant => dispatch(addContestant(contestant))
    }
}
class VoteList extends Component {
    constructor(props) {

        super(props)
        this.contestants = this.props.contestants;
        console.log(this.contestants)
        // this.state = {
        //     name: "",
        //     completed: 40,
        //     contestants: [{ name: "Nnamdi", decription: "This is a very gentle man", votes: 0, votePercent: 0 }, { name: "dafe", votes: 0, decription: "This is the king of javascript in NESA", votePercent: 0 },
        //     { name: "Bukola", votes: 0, decription: "She is determined to get better at javascript", votePercent: 0 }, { name: "Lucky", votes: 0, decription: "This guy is very knowledgeaable about a lot of things, especially in the tech ecosystem", votePercent: 0 }, { name: "Pelumi", decription: "The latest addition to the nesa family", votes: 0, votePercent: 0 }
        //     ]
        // }
    }
    HandleAddContestant = (e) => {
        e.preventDefault();
        const name = "It works";
        const votes = 0;
        const votePercent = 0;
        const description = "This is a dummy ddescription"
        console.log(this.props);
        this.props.addContestant({ name, description, votes, votePercent })
    }


    // addContestant = () => {

    //     let name = this.state.name;
    //     let description = this.state.description;
    //     if (!name) alert('please add a valid name')

    //     let contestant = {
    //         name,
    //         decription: description || "No description provided yet",
    //         votes: 0,
    //         votePercent: 0

    //     };
    //     console.log('contestants', this.contestants)

    //     let contestants = this.contestants.concat(contestant);
    //     // console.log('contestants',this.contestants)
    //     contestants = this.modifyProgress(contestants);
    //     console.log(contestants)
    //     // contestants = this.sortContestants(contestants)

    //     this.setState({ contestants }, function () {
    //         this.setState({ name: "" })
    //     });
    // }

    handleNameInput = (e) => {
        let name = e.target.value;
        this.setState({ name })
    }

    sortContestants = (contestants) => (contestants.sort((a, b) =>
    { return b.votes - a.votes; }
    ))

    upVote = (i) => {
        let contestants = JSON.parse(JSON.stringify(this.contestants));
        contestants[i].votes = contestants[i].votes + 1;

        contestants = this.modifyProgress(contestants);
        contestants = this.sortContestants(contestants)
        this.setState({ contestants });


    }

    downVote = (i) => {
        let contestants = JSON.parse(JSON.stringify(this.contestants));
        contestants[i].votes = contestants[i].votes - 1;
        contestants = this.modifyProgress(contestants);
        contestants = this.sortContestants(contestants);
        this.setState({ contestants });
    }

    addContestantRedux = () => {

    }



    modifyProgress = (contestants, i) => {
        if (contestants.lenght === 0) return contestants;
        let arr = contestants.map(val => val.votes);
        let sumVotes = arr.reduce((a, b) => a + b, 0);

        for (var j = 0; j < contestants.length; j++) {
            if (sumVotes === 0) break;
            contestants[j].votePercent = (contestants[j].votes / sumVotes) * 100;
        }

        return contestants;

    }


    render() {
        return (
            <div>
                <Navbar />
                <div style={{
                    "width": "95%",
                    "margin": "0 auto"
                }}>

                    <br />
                    <Card className="animated slideInUp" style={{
                        "borderTop": "3px solid #3f51b5"
                    }}>
                        <CardContent>
                            <TextField style={{ padding: 24 }}
                                id="searchInput"
                                placeholder="Search Contestants"
                                margin="normal"
                            />
                            {/*<Button color="secondary" variant="raised" onClick={this.addContestant} size="small">add</Button>*/}
                            <Button color="secondary" variant="raised" onClick={this.HandleAddContestant} size="small">add</Button>
                            <List>
                                {this.contestants.map((val, i) =>
                                    <Contestant key={i} votes={val.votes} contestantName={val.name} votePercent={val.votePercent} upVote={e => { e.preventDefault(); this.upVote(i) }} downVote={e => { e.preventDefault(); this.downVote(i) }} />
                                )}
                            </List>
                        </CardContent>
                        <CardActions>
                            {/*<Button size="small">Learn More</Button>*/}
                        </CardActions>
                    </Card>
                </div>
            </div>

        );
    }
}

const Vote = withRouter(connect(mapStateToProps, mapDispatchToProps)(VoteList));

export default Vote;


