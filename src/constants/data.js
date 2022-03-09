import images from './images';

const wines = [
  {
    title: 'Trapiche Malbec',
    price: '$235',
    tags: 'ARG | Bottella',
  },
  {
    title: 'Lattitud 33 Malbec',
    price: '$490',
    tags: 'ARG | Bottella',
  },
  {
    title: 'Santa Julia Chenin Dulce',
    price: '$590',
    tags: 'ARG | 750 ml',
  },
  {
    title: 'Santa Julia Sauvignon',
    price: '$530',
    tags: 'ARGca | 750 ml',
  },
  {
    title: 'Zuccardi Cabernet Sauvignon',
    price: '$1,500',
    tags: 'ARG | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Fernet',
    price: '$300',
    tags: 'Fernet | Branca | Coca-Cola ',
  },
  {
    title: "Campari",
    price: '$300',
    tags: 'Campari | Jugo de Naranja ',
  },
  {
    title: 'Daiquiri',
    price: '$450',
    tags: 'Ron | Jugo de Naranja | Azucar',
  },
  {
    title: 'Gancia',
    price: '$300',
    tags: 'Gancia | Sprite | Limon',
  },
  {
    title: 'Cuba Libre',
    price: '$350',
    tags: 'Ron Dorado | Coca-Cola | Limon ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrella en Ascenso',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Excelente Hospitalidad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Increible Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
