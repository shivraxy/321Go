import React, {Component, Children, PropTypes} from 'react';

const cardContainer = document.querySelector('.react-card');

// react cmp for textarea
class CardTextArea extends React.Component {
    render() {
        return(
            <fieldset>
                <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
            </fieldset>
        );
    };
};

// react cmp for front side of the card
// concept allows for a flipping card with front and back sides
class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src='https://images.unsplash.com/photo-1521780372272-bb5e0f455dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca8871f351fa47ea3f969912a157b235&auto=format&fit=crop&w=1033&q=80'/>
                        </div>
                        <div className='col-xs-6 side-front-content'>
                            <h2>Event near you</h2>
                            <h1>Fun time event wow!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

// main component for the card
class Card extends React.Component {
    render() {
        return(
            <div className='card-container'>
                <div className='card-body'>
                    <CardFront />
                </div>
            </div>
        );
    };
};

// render Card component
// ReactDOM.render(<Card />, cardContainer);