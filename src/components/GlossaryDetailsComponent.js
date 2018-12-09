import React, {Component} from 'react';

export class GlossaryDetailsComponent extends Component {

    componentDidMount() {
        this.props.updateGlossary(this.props.match.params.id);
    }

    render() {
        const {glossary} = this.props;
        if (glossary) {
            return this.renderGlossary(glossary);
        }
        return <div>
        </div>;
    }

    renderGlossary = (glossary) => {
        return <div>
            <h2>{glossary.title}</h2>
            <div>
                {glossary.cards.map(this.renderCard)}
            </div>
        </div>
    };

    renderCard = (card) => {
        return <div style={{backgroundColor: 'lightgray', margin: '10px', padding: '5px'}}>
            <p>{card.word.val}</p>
            <p>{card.translation.val}</p>
        </div>;
    };

}
