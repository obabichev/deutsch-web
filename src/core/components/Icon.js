import React, {Component} from 'react';

export class Icon extends Component {

    render() {
        const {icon, width = 16, height = 16} = this.props;
        return <div style={{width, height}}>
            <img width={width} height={height} src={`/icons/${icon}.png`}/>
        </div>;
    }

}
