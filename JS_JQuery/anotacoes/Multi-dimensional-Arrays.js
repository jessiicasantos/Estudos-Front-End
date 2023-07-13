// Multi-dimensional Arrays

let nestedArray = [ // NIVEL 0, Camada 1
  ['deep'], // NIVEL 0, Camada 2
  [ // NIVEL 1, Camada 2
    ['nivel 1, indice 0'] /* nivel 0 */, ['nivel 1, indice 1']  /* nivel 1 */ // Camada 3
  ],
  [ // NIVEL 2, Camada 2
    [ // nivel 0, Ind. 0 Camada 3
      ['nivel 2, indice 0'], /* nivel 0 */ ['nivel 2, indice 1'] /* nivel 1 */ // Camda 4
    ],
    [ // NIVEL 1, IND 1, Camada 3
      [ // nivel 0, Camada 4 
        ['nivel 1, indice 0'] // nivel 0, indice 0, Camada 5 [NIVEL 2][NIVEL 1][ NIVEL 0][ NIVEL 0][INDICE 0]
      ]
    ]
  ]
];

console.log(nestedArray[1][0]);
console.log(nestedArray[2][1][0][0][0]);


// Pense assim:
// O array acima tem 5 camadas
// Acessamos o mesmo pelos "níveis" e índices [nível][[indice]]


// Ex. 2:

let myNestedArray = [ // NIVEL 0, Camada 1
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], // NIVEL 0, Camada 2
    ['loop', 'shift', 6, 7, 1000, 'method'], // NIVEL 1, Camada 2
    ['concat', false, true, 'spread', 'array'], // NIVEL 2, Camada 2
    ['mutate', 1327.98, 'splice', 'slice', 'push'], // NIVEL 3, Camada 2
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', // NIVEL 4, Camada 2
        ['NIVEL 4, Indice 6 da camada 2',  // Camada 3 [4][6]
            ['NVL 0, Ind 1, Camada 4',
                ['LVL 0, Ind 1, Camada 5']
            ]
        ]
    ]
];

console.log(myNestedArray[4][6]);
console.log(myNestedArray[4][6][1][1][0]);
