import { Recipe } from '../../domain/entities/Recipe';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: 'Poêlée de Cabillaud aux Pommes de Terre et Citron',
    description: 'Un plat savoureux et rapide à préparer avec du poisson et du citron frais.',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'facile',
    matchingIngredientsCount: 3,
    totalIngredientsCount: 5,
    ingredients: ['Poisson', 'Pomme de terre', 'Citron', 'Huile', 'Ail'],
    instructions: [
      'Éplucher et couper les pommes de terre en morceaux.',
      'Faire rissoler les pommes de terre dans une poêle avec de l’huile et de l’ail.',
      'Ajouter les filets de poisson en fin de cuisson.',
      'Arroser avec le jus de citron avant de servir.'
    ]
  },
  {
    id: 'r2',
    title: 'Gratin de Pommes de Terre au Citron et Herbes',
    description: 'Une variante acidulée et gourmande du gratin classique.',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: 'facile',
    matchingIngredientsCount: 2,
    totalIngredientsCount: 4,
    ingredients: ['Pomme de terre', 'Citron', 'Crème', 'Beurre'],
    instructions: [
      'Préchauffer le four à 180°C.',
      'Disposer les rondelles de pommes de terre dans un plat à gratin.',
      'Mélanger la crème et le jus de citron, puis verser sur le plat.',
      'Enfourner pendant 40 minutes.'
    ]
  },
  {
    id: 'r3',
    title: 'Poisson Papillote Citronné',
    description: 'Cuisson saine à la vapeur et en papillote conservant tous les arômes.',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'facile',
    matchingIngredientsCount: 2,
    totalIngredientsCount: 3,
    ingredients: ['Poisson', 'Citron', 'Poivre'],
    instructions: [
      'Déposer le poisson sur une feuille de papier cuisson.',
      'Placer des rondelles de citron dessus et assaisonner de poivre.',
      'Fermer la papillote et cuire 15 minutes au four.'
    ]
  }
];
