import React, {Component} from 'react';
import {CreateCardComponent} from './CreateCardComponent';

export class GlossaryDetailsComponent extends Component {

    state = {
        addingCard: false
    };

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

            {this.state.addingCard
                ? <CreateCardComponent
                    onSubmit={this.onCardCreate}/>
                : this.renderAddButton()}

            <div style={{height: '200px'}}></div>
        </div>;
    };

    onCardCreate = (word, translation) => {
        console.log('[obabichev] word', word);
        console.log('[obabichev] translation', translation);

        const {addCardToGlossary, glossary} = this.props;

        addCardToGlossary(glossary.id, word.id, translation.id);
        this.setState({addingCard: false});
    };

    renderCard = (card) => {
        return <div key={card.id} style={{backgroundColor: 'lightgray', margin: '10px', padding: '5px'}}>
            <p>{card.word.val}</p>
            <p>{card.translation.val}</p>
        </div>;
    };

    renderAddButton = () => {
        return <div style={{margin: 10, padding: 5, backgroundColor: 'lightgray'}}
                    onClick={this.onAddClick}>
            Add
        </div>
    };

    onAddClick = () => {
        this.setState({addingCard: true})
    }
}
