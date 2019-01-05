import React, {Component} from 'react';
import './GlossaryCardComponent.css';

export class GlossaryCardComponent extends Component {

    render() {
        return <div>
            <a className="gloss-card">
                <span className="gloss-card-remove tooltip">
                    <img src="/icons/garbage.png"/>
                    <span className="tooltiptext">Remove</span>
                </span>
                <div className="gloss-card-present">
                </div>
                <div className="gloss-card-content">
                    <div className="gloss-card-content-title">
                        {this.props.title}
                    </div>
                    <div className="gloss-card-content-amount">
                        5 words
                    </div>
                    <div className="gloss-card-content-learn">
                        <button className="gloss-card-content-learn-button">LEARN</button>
                    </div>
                </div>
            </a>
        </div>
    }

}
