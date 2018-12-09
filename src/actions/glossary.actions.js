import {generateAction} from '../util/generateAction';
import {ACTION_GLOSSARY_GET_ITEM, ACTION_GLOSSARY_GET_LIST} from './glossary.constants';

export const glossariesListAction = (glossaries) => generateAction(
    ACTION_GLOSSARY_GET_LIST,
    {glossaries}
);

export const glossaryItemAction = (glossary) => generateAction(
    ACTION_GLOSSARY_GET_ITEM,
    {glossary}
);
