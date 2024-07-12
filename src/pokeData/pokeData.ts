export type tPokemonTypes  = 'fire' | 'water' | 'grass' | 'poison' | 'normal'

export interface iPokemon {
  name:string,
  imagePath: string
  previewPath: string
  backGroundPath:string
  mainColor: string
  secondaryColor: string
  evolutions: string[]
  types: tPokemonTypes[]
  statusBase: {
    PS: number,
    AT: number,
    DF: number,
    ATE: number,
    DFE: number,
    VL: number,
    TOTAL: number
  }
  initialMoves: {
    name:string,
    type: tPokemonTypes
    totalUses: number
  }[]
  animation: 'fire' | 'water' | 'grass'
}


export const pokemonsGen1:iPokemon[] = [
  {
    name:'Charmander',
    imagePath:'/charmander.png',
    previewPath:'/preview-charmander.gif',
    backGroundPath:'/background-canyon.jpg',
    animation:'fire',
    mainColor: '#FA4533',
    secondaryColor:'#9D271B',
    evolutions: ['Charmander', 'Charmeleon', 'Charizard'],
    types:['fire'],
    statusBase: {
      PS: 39,
      AT: 52,
      DF: 43,
      ATE: 60,
      DFE: 50,
      VL: 65,
      TOTAL: 309
    },
    initialMoves:[
      {
        name:'Scratch',
        type: "normal",
        totalUses: 30
      },
      {
        name:'Growl',
        type: "normal",
        totalUses: 30
      },
      {
        name:'Ember',
        type: "fire",
        totalUses: 30
      },
    ]
  },
  {
    name:'Squirtle',
    imagePath:'/squirtle.png',
    previewPath:'/preview-squirtle.gif',
    backGroundPath:'/background-coast.jpg',
    animation:'water',
    mainColor: '#33AFFA',
    secondaryColor:'#1B71A5',
    evolutions: ['Squirtle', 'Wartortle', 'Blastoise'],
    types:['water'],
    statusBase: {
      PS: 44,
      AT: 48,
      DF: 65,
      ATE: 50,
      DFE: 64,
      VL: 43,
      TOTAL: 314
    },
    initialMoves:[
      {
        name:'Tackle',
        type: "normal",
        totalUses: 30
      },
      {
        name:'Tail Whip',
        type: "normal",
        totalUses: 30
      },
      {
        name:'Water Gun',
        type: "water",
        totalUses: 30
      }
    ]
  },
  {
    name:'Bulbassauro',
    imagePath:'/bulbasour.png',
    previewPath:'/preview-bulbasour.gif',
    backGroundPath:'/background-forest.jpg',
    animation:'grass',
    mainColor:'#33FA8A',
    secondaryColor:'#1DA559',
    evolutions: ['Bulbassauro', 'Ivyssauro', 'Venussauro'],
    types:['grass', 'poison'],
    statusBase: {
      PS: 45,
      AT: 49,
      DF: 49,
      ATE: 65,
      DFE: 65,
      VL: 45,
      TOTAL: 318
    },
    initialMoves:[
      {
        name:'Tackle',
        type: "normal",
        totalUses: 30
      },
      {
        name:'Growl',
        type: "normal",
        totalUses: 30
      },
      {
        name:'vine',
        type: "grass",
        totalUses: 30
      }
    ]
  },
]
