import { Property } from './commonModels';

interface HeaderMeta {
  name: string;
  description: string;
}

interface CardMeta {
  id: number;
  name: string;
  description: string;
  url_image: string;
}

interface CardsMeta {
  elements: CardMeta[];
}

interface FinderMeta {
  options: string[];
}

interface PropertiesShowerMeta {
  properties: Property[];
}
interface PropertiesEditorMeta {
  properties: EditProperty[];
}

export interface EditProperty {
  name: string;
  value: string;
  validate_rule: (value: string) => boolean;
}

export {
  HeaderMeta,
  CardMeta,
  CardsMeta,
  FinderMeta,
  PropertiesShowerMeta,
  PropertiesEditorMeta,
};
