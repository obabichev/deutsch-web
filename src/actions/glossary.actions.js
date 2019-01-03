import {createAction} from '../util/createAction';
import {
    ACTION_GLOSSARY_CREATED, ACTION_GLOSSARY_DELETED,
    ACTION_GLOSSARY_GET_ITEM, ACTION_GLOSSARY_GET_LIST, GLOSSARY_CARD_CREATED,
    GLOSSARY_CARD_DELETED
} from './glossary.constants';

export const glossariesListAction = (glossaries) => createAction(
    ACTION_GLOSSARY_GET_LIST,
    {glossaries}
);

export const glossaryItemAction = (glossary) => createAction(
    ACTION_GLOSSARY_GET_ITEM,
    {glossary}
);

export const glossaryCreatedAction = (glossary) => createAction(
    ACTION_GLOSSARY_CREATED,
    {glossary}
);

export const glossaryDeletedAction = glossaryId => createAction(
    ACTION_GLOSSARY_DELETED,
    {glossaryId}
);

export const glossarycardCreateAction = (glossaryCard) => createAction(
    GLOSSARY_CARD_CREATED,
    {glossaryCard}
);

export const glossaryCardDeletedAction = (glossaryCardId) => createAction(
    GLOSSARY_CARD_DELETED,
    {glossaryCardId}
);
