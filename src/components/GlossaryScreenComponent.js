import React, {Component} from 'react';
import {history} from '../helpers/history';

export class GlossaryScreenComponent extends Component {

    componentDidMount() {
        const {updateGlossaries} = this.props;
        updateGlossaries();
    }

    render() {
        return <div>
            <h1>Glossaries</h1>

            {this.renderGlossaries()}
        </div>;
    }

    onGlossaryClick = glossaryId => (event) => {
        event.preventDefault();
        history.push(`/glossary/${glossaryId}/`);
    };

    renderGlossaries = () => {
        return this.props.glossaries.map(this.renderGlossary);
    };

    renderGlossary = (glossary) => {
        return <div style={{backgroundColor: 'lightgray', margin: '10px', padding: '5px'}}
                    key={glossary.id}
                    onClick={this.onGlossaryClick(glossary.id)}>
            <p>{glossary.title}</p>
            <p>Terms: {glossary.cards.length}</p>
        </div>;
    };
}