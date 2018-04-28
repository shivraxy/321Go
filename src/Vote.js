import React from "react";
//import Groups from "./Groups";
//import from others.............

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '', 
          groupName: '',
          eventOne: '', eventTwo: '', eventThree: '',
          eventOneVotes: 0, eventTwoVotes: 0, eventThreeVotes: 0
        };
    }
    
    resetVotes = () => {  
        this.setState({  
            eventOneVotes: 0, eventTwoVotes: 0, eventThreeVotes: 0
        })
    }
        
    handleClick = event => {
        event.preventDefault();
        console.log(event);

        const {name} = event.target;

        switch(event) {
            case "1":
                //CAN'T GET THIS COUNTER THING TO WOOOOOOORK
                this.setState({eventOneVotes: this.state.eventOneVotes + 1});
                break;
            case "2":
                this.setState({eventTwoVotes: this.state.eventTwoVotes + 1});
                break;
            case "3":
                this.setState({eventThreeVotes: this.state.eventThreeVotes + 1});
                break;
            default: 
                break;
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <br /><br />
                Current User: USER {this.state.userName}
                <br /><br />
                Member of: GROUP {this.state.groupName}
                <br /><br /><br /><br />

                Event 1:  {this.state.eventOne}
                <br />
                <button name="1" onClick={this.handleClick}>VOTE</button>
                <br /><br />
                Votes:  {this.state.eventOneVotes}
                <br /><br /><br /><br />

                Event 2:  {this.state.eventTwo}
                <br />
                <button name="2" onClick={this.handleClick}>VOTE</button>
                <br /><br />
                Votes:  {this.state.eventTwoVotes}
                <br /><br /><br /><br />

                Event 3:  {this.state.eventOne}
                <br />
                <button name="3" onClick={this.handleClick}>VOTE</button>
                <br /><br />
                Votes:  {this.state.eventThreeVotes}
                <br /><br /><br /><br />

                <button onClick={this.resetVotes}>reset</button>
            </div>
        )
    }
}

export default Vote;