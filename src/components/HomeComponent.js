import React, {Component} from 'react';
import {GlossariesListContainer} from '../glossaries/containers/GlossariesListContainer';

export class HomeComponent extends Component {

    componentDidMount() {
        this.props.getWordsToRepeat();
    }

    render() {
        return <div>
            <GlossariesListContainer/>
        </div>
    }
}
