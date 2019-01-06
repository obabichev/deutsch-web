import React, {Component} from 'react';

export class Icon extends Component {

    render() {
        const {icon} = this.props;
        return <div>
            <img src={`/icons/${icon}.png`}/>
        </div>;
    }

}
