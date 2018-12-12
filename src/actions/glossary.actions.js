import {generateAction} from '../util/generateAction';
import {
    ACTION_GLOSSARY_CREATED,
    ACTION_GLOSSARY_GET_ITEM, ACTION_GLOSSARY_GET_LIST, GLOSSARY_CARD_CREATED,
    GLOSSARY_CARD_DELETED
} from './glossary.constants';

export const glossariesListAction = (glossaries) => generateAction(
    ACTION_GLOSSARY_GET_LIST,
    {glossaries}
);

export const glossaryItemAction = (glossary) => generateAction(
    ACTION_GLOSSARY_GET_ITEM,
    {glossary}
);

export const glossaryCreatedAction = (glossary) => generateAction(
    ACTION_GLOSSARY_CREATED,
    {glossary}
);

export const glossarycardCreateAction = (glossaryCard) => generateAction(
    GLOSSARY_CARD_CREATED,
    {glossaryCard}
);

export const glossaryCardDeletedAction = (glossaryCardId) => generateAction(
    GLOSSARY_CARD_DELETED,
    {glossaryCardId}
);
