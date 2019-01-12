import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import {searchWords} from '../../service/word';
import {searchTranslation} from '../../service/translation';
import './CreateCardComponent.css';
import {Button} from '../../core/components/Button';

export class CreateCardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wordInput: '',
            word: null,
            wordSearch: [],
            translationInput: '',
            translation: null,
            translationSearch: []
        };

        this.wordInputRef = null;
        this.translationInputRef = null;
    }

    componentDidMount() {
        if (this.wordInputRef) {
            this.wordInputRef.focus();
        }
    }

    onWordChange = (event) => {
        const value = event.target.value;
        this.setState({wordInput: value});

        searchWords(value)
            .then(words => {
                this.setState({
                    wordSearch: words
                });
            });
    };

    onWordSelect = (value) => {
        this.setState({wordInput: value});
        this.state.wordSearch.forEach(word => {
            if (word.val === value) {
                this.setState({
                    word,
                    translationInput: '',
                    translation: null,
                    translationSearch: []
                }, () => {
                    this.focusTranslationInput();
                    this.onSearchTranslation('');
                });
            }
        });
    };

    onSearchTranslation = (val) => {
        const wordId = this.state.word && this.state.word.id;
        if (!wordId) {
            return;
        }

        searchTranslation(wordId, val)
            .then(translations => {
                this.setState({
                    translationSearch: translations
                });
            });
    };

    focusTranslationInput = () => {
        if (this.translationInputRef) {
            this.translationInputRef.focus();
        }
    };

    onTranslationChange = (event) => {
        const value = event.target.value;
        this.setState({translationInput: value});

        this.onSearchTranslation(value);
    };

    onTranslationSelect = (value) => {
        this.setState({translationInput: value});
        this.state.translationSearch.forEach(translation => {
            if (translation.val === value) {
                this.setState({
                    translation
                });
            }
        })
    };

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.word, this.state.translation);
        }
    };

    render() {
        return <div style={{margin: '10px'}}>
            <form name="form" onSubmit={this.onSubmit}
                  className="create-card-form">
                {this.renderWordSearch()}
                {this.state.word && this.renderTranslationSearch()}

                <div>
                    {this.state.word && this.state.translation && <Button title="Save" green/>}
                </div>
            </form>
        </div>;
    }

    renderWordSearch = () => {
        return <div className="create-card-input-container">
            <label
                className="create-card-input-label">
                Word
            </label>
            <Autocomplete
                renderInput={(props) => <input className="create-card-input" {...props} />}
                ref={(input) => this.wordInputRef = input}
                getItemValue={(item) => item.val}
                renderItem={(item, isHighlighted) =>
                    <div style={{padding: '5px', background: isHighlighted ? 'lightgray' : 'white'}} key={item.id}>
                        {item.val}
                    </div>
                }
                value={this.state.wordInput}
                onChange={this.onWordChange}
                onSelect={this.onWordSelect}
                items={this.state.wordSearch}/>
        </div>
    };

    renderTranslationSearch = () => {
        return <div className="create-card-input-container">
            <label
                className="create-card-input-label">
                Translation
            </label>
            <Autocomplete
                ref={(input) => this.translationInputRef = input}
                renderInput={(props) => <input className="create-card-input" {...props} />}
                getItemValue={(item) => item.val}
                renderItem={(item, isHighlighted) =>
                    <div style={{padding: '5px', background: isHighlighted ? 'lightgray' : 'white'}} key={item.id}>
                        {item.val}
                    </div>
                }
                value={this.state.translationInput}
                onChange={this.onTranslationChange}
                onSelect={this.onTranslationSelect}
                items={this.state.translationSearch}/>
        </div>
    }
}
