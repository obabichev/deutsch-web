import React, {Component} from 'react';
import './GlossaryCardComponent.css';
import {Button} from '../../core/components/Button';

export class GlossaryCardComponent extends Component {

    onClick = () => {
        const {onClick} = this.props;
        if (onClick) {
            onClick();
        }
    };

    countString = () => {
        const {count} = this.props;
        if (count === 1) {
            return '1 word';
        }
        if (count === 0 || count > 1) {
            return `${count} words`;
        }
        return '';
    };

    onDeleteIconClick = (event) => {
        console.log('[obabichev] on delete icon click', event);
        event.stopPropagation();
        // event.preventDefault();
        const {onDeleteClick} = this.props;
        console.log('[obabichev] onDeleteClick', onDeleteClick);
        if (onDeleteClick) {
            onDeleteClick();
        }
    };

    render() {
        return <div>
            <a className="gloss-card"
               onClick={this.onClick}>
                <span className="gloss-card-remove tooltip">
                    <img src="/icons/garbage.png"
                        onClick={this.onDeleteIconClick}/>
                    <span className="tooltiptext">Remove</span>
                </span>
                <div className="gloss-card-present">
                </div>
                <div className="gloss-card-content">
                    <div className="gloss-card-content-title">
                        {this.props.title}
                    </div>
                    <div className="gloss-card-content-amount">
                        {this.countString()}
                    </div>
                    <div className="gloss-card-content-learn">
                        <Button title="LEARN"
                                onClick={this.props.onLearnClick}
                                blue/>
                    </div>
                </div>
            </a>
        </div>
    }

}
