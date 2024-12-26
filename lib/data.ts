import { ESGCategory } from './types';

export const esgData: ESGCategory[] = [
  {
    id: 'Normes_ESRS',
    title: 'Normes ESRS',
    description: 'Préparez-vous aux nouvelles exigences réglementaires',
    icon: 'Leaf',
    color: 'bg-emerald-500',
    link:"/pages/Normes_ESRS",
    subcategories: [
      {
        id: 'Cross-Cutting_Standards',
        title: 'Normes européennes de reporting ESG',
        description: 'Strategies and initiatives to combat climate change',
        icon: 'ThermometerSun',
        color: 'bg-amber-500',
        link:"/pages/Normes_ESRS/CrossCutting#comp",
        subcategories: [
          {
            id: 'Exigences_générales',
            title: 'Exigences générales',
            description: 'Understanding global climate patterns and impacts',
            icon: 'Cloud',
            color: 'bg-sky-500'
          },
          {
            id: 'Divulgations_générales',
            title: 'Divulgations générales',
            description: 'Adapting to environmental transformations',
            icon: 'RefreshCw',
            color: 'bg-violet-500'
          }
        ]
      },
      {
        id: 'Enviromental',
        title: 'Enviromental',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500',
        
        subcategories: [
          {
            id: 'ESRS_E1',
            title: 'ESRS E1',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                    {
            id: 'ESRS_E2',
            title: 'ESRS E2',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                              {
            id: 'ESRS_E3',
            title: 'ESRS E3',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                                        {
            id: 'ESRS_E4',
            title: 'ESRS E4',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                                                  {
            id: 'ESRS_E5',
            title: 'ESRS E5',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
        ]
      },
      {
        id: 'Social',
        title: 'Social',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500'
      },
      {
        id: 'Governance',
        title: 'Governance',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500'
      }
    ]
  },
  {
    id: 'Normes_CSDDD',
    title: 'Normes CSDDD',
    description: 'Découvrez comment intégrer la diligence raisonnable dans votre stratégie.',
    icon: 'Users',
    color: 'bg-indigo-500',
    subcategories: [
      {
        id: 'diversity-inclusion',
        title: 'Diversity & Inclusion',
        description: 'Building an inclusive workplace and society',
        icon: 'Heart',
        color: 'bg-pink-500'
      },
      {
        id: 'human-rights',
        title: 'Human Rights',
        description: 'Protecting and promoting human rights globally',
        icon: 'Shield',
        color: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'ODD',
    title: 'ODD (Objectifs de Développement Durable)',
    description: 'Explorez les 17 Objectifs de Développement Durable',
    icon: 'Building2',
    color: 'bg-slate-500',
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
  ,
  {
    id: 'Principes_du_Global_Compact',
    title: 'Principes du Global Compact',
    description: 'Adoptez les 10 principes fondamentaux pour un monde meilleur',
    icon: 'Building2',
    color: 'bg-slate-500',
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
  ,
  {
    id: 'ISO_26000',
    title: 'ISO 26000',
    description: 'Découvrez les lignes directrices pour une responsabilité sociétale',
    icon: 'Building2',
    color: 'bg-slate-500',
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
];