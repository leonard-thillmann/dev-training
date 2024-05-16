import 'server-only';

interface Dictionary {
    [key: string]: () => Promise<any>;
}

const dictionaries: Dictionary = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    de: () => import('./dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
    // Use the locale dictionary if provided, otherwise use the english
    dictionaries[locale]?.() ?? dictionaries.en();
  