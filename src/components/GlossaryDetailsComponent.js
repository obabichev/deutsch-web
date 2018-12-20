import React, {Component} from 'react';
import {CreateCardComponent} from './CreateCardComponent';
import {Link} from 'react-router-dom';

export class GlossaryDetailsComponent extends Component {

    state = {
        addingCard: false,
        editingTitle: false,
        titleInput: ''
    };

    titleInputRef = null;

    componentDidMount() {
        this.props.downloadGlossary(this.props.match.params.glossaryId);
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
            {this.renderTitle()}
            <div onClick={() => this.props.removeGlossary(glossary.id)}
                 style={{backgroundColor: 'red', margin: '10px', padding: '5px', width: "100px"}}>
                DELETE
            </div>

            <div style={{margin: '10px'}}>
                <Link to={`/learn/glossary/${glossary.id}`} className="btn btn-link">Learn</Link>
            </div>

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

    renderTitle = () => {
        const {glossary} = this.props;
        if (this.state.editingTitle) {
            return <div style={{margin: '10px', padding: '5px'}}>
                <form name="form"
                      onSubmit={this.onTitleSubmit}>
                    <input value={this.state.titleInput}
                           onChange={this.onTitleChange}
                           ref={(input) => this.titleInputRef = input}/>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>;
        }
        return <div style={{margin: '10px', padding: '5px'}}
                    onClick={this.onTitleClick}>
            <h2>{glossary.title}</h2>
        </div>;
    };

    onTitleChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        this.setState({
            titleInput: value
        });
    };

    onTitleSubmit = (event) => {
        event.preventDefault();
        this.props.updateGlossary({
            id: this.props.glossary.id,
            title: this.state.titleInput
        });
        this.setState({
            editingTitle: false,
            titleInput: ''
        });
    };

    onTitleClick = () => {
        this.setState({
            editingTitle: true,
            titleInput: this.props.glossary.title
        }, () => this.focusTitleInput());
    };

    focusTitleInput = () => {
        if (this.titleInputRef) {
            this.titleInputRef.focus();
        }
    };

    onCardCreate = (word, translation) => {

        const {addCardToGlossary, glossary} = this.props;

        addCardToGlossary(glossary.id, word.id, translation.id);
        this.setState({addingCard: false});
    };

    renderCard = (card) => {
        return <div style={{"flex-flow": "row wrap", display: "flex"}}>
            <div key={card.id} style={{backgroundColor: 'lightgray', margin: '10px', padding: '5px', width: "300px"}}>
                <p>{card.word.val}</p>
                <p>{card.translation.val}</p>
            </div>
            <div style={{backgroundColor: 'red', margin: '10px', padding: '5px', width: "50px"}}
                 onClick={this.onDeleteClick(card.id)}>
                DEL
            </div>
        </div>
    };

    renderAddButton = () => {
        return <div style={{margin: 10, padding: 5, backgroundColor: 'lightgray'}}
                    onClick={this.onAddClick}>
            Add
        </div>
    };

    onAddClick = () => {
        this.setState({addingCard: true})
    };

    onDeleteClick = (glossaryCardId) => () => {
        this.props.removeGlossaryCard(glossaryCardId);
    }
}
