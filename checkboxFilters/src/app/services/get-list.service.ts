import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  constructor() { }

  getProducts(){
    return [
      {
        id : 1,
        category : 'electronics',
        productName : 'earPhones',
        productImage : '../../assets/electronics/earPhones.jpg'
      },
      {
        id : 2,
        category : 'electronics',
        productName : 'homeTheater',
        productImage : '../../assets/electronics/homeTheater.jpg'
      },
      {
        id : 3,
        category : 'electronics',
        productName : 'keyboard',
        productImage : '../../assets/electronics/keyboard.jpg'
      },
      {
        id : 4,
        category : 'electronics',
        productName : 'laptop',
        productImage : '../../assets/electronics/laptop.jpg'
      },
      {
        id : 5,
        category : 'electronics',
        productName : 'mouse',
        productImage : '../../assets/electronics/mouse.jpg'
      },
      {
        id : 6,
        category : 'electronics',
        productName : 'redmiNote',
        productImage : '../../assets/electronics/redmiNote.jpg'
      },
      {
        id : 7,
        category : 'electronics',
        productName : 'watch',
        productImage : '../../assets/electronics/watch.jpg'
      },
      {
        id : 8,
        category : 'drinks',
        productName : 'CiplaProlyteEnergyDrink',
        productImage : '../../assets/drinks/CiplaProlyteEnergyDrink.jpg'
      },
      {
        id : 9,
        category : 'drinks',
        productName : 'complan',
        productImage : '../../assets/drinks/complan.jpg'
      },
      {
        id : 10,
        category : 'drinks',
        productName : 'DaburVita500gJarChocolate',
        productImage : '../../assets/drinks/DaburVita500gJarChocolate.jpg'
      },
      {
        id : 11,
        category : 'drinks',
        productName : 'fanta',
        productImage : '../../assets/drinks/fanta.jpg'
      },
      {
        id : 12,
        category : 'drinks',
        productName : 'HealthfarmNutritionEliteSeries',
        productImage : '../../assets/drinks/HealthfarmNutritionEliteSeries.jpg'
      },
      {
        id : 13,
        category : 'drinks',
        productName : 'hotChocolateMix',
        productImage : '../../assets/drinks/hotChocolateMix.jpg'
      },
      {
        id : 14,
        category : 'drinks',
        productName : 'HustleEnergyDrinkCan250',
        productImage : '../../assets/drinks/HustleEnergyDrinkCan250.jpg'
      },
      {
        id : 15,
        category : 'drinks',
        productName : 'limka',
        productImage : '../../assets/drinks/limka.jpg'
      },
      {
        id : 16,
        category : 'drinks',
        productName : 'mazza',
        productImage : '../../assets/drinks/mazza.jpg'
      },
      {
        id : 17,
        category : 'drinks',
        productName : 'mirinda',
        productImage : '../../assets/drinks/mirinda.jpg'
      },
      {
        id : 18,
        category : 'drinks',
        productName : 'pepsi',
        productImage : '../../assets/drinks/pepsi.jpg'
      },
      {
        id : 19,
        category : 'drinks',
        productName : 'pulpyOrange',
        productImage : '../../assets/drinks/pulpyOrange.jpg'
      },
      {
        id : 20,
        category : 'drinks',
        productName : 'SpriteLemonLimeFlavoured',
        productImage : '../../assets/drinks/SpriteLemonLimeFlavoured.jpg'
      },
      {
        id : 21,
        category : 'drinks',
        productName : 'ThumsUpSoftDrinkPETBottle',
        productImage : '../../assets/drinks/ThumsUpSoftDrinkPETBottle.jpg'
      },
      {
        id : 22,
        category : 'cricketKit',
        productName : 'DikujiEnterpriksePlastic',
        productImage : '../../assets/cricketKit/DikujiEnterpriksePlastic.jpg'
      },
      {
        id : 23,
        category : 'cricketKit',
        productName : 'DSCKashmirWillowCricketBat',
        productImage : '../../assets/cricketKit/DSCKashmirWillowCricketBat.jpg'
      },
      {
        id : 24,
        category : 'cricketKit',
        productName : 'JaspoCricHolicHeavyDuty',
        productImage : '../../assets/cricketKit/JaspoCricHolicHeavyDuty.jpg'
      },
      {
        id : 25,
        category : 'cricketKit',
        productName : 'KlappPopularWillow2',
        productImage : '../../assets/cricketKit/KlappPopularWillow2.jpg'
      },
      {
        id : 26,
        category : 'cricketKit',
        productName : 'KlappPopularWillowCricketKit',
        productImage : '../../assets/cricketKit/KlappPopularWillowCricketKit.jpg'
      },
      {
        id : 27,
        category : 'cricketKit',
        productName : 'SGEconomyCricketKitFullKit',
        productImage : '../../assets/cricketKit/SGEconomyCricketKitFullKit.jpg'
      },
      {
        id : 28,
        category : 'cricketKit',
        productName : 'SMCricketBattingGlovesYouth',
        productImage : '../../assets/cricketKit/SMCricketBattingGlovesYouth.jpg'
      },
      {
        id : 29,
        category : 'cricketKit',
        productName : 'SMCricketBattingGlovesYouthRightHand',
        productImage : '../../assets/cricketKit/SMCricketBattingGlovesYouthRightHand.jpg'
      },
      {
        id : 30,
        category : 'cricketKit',
        productName : 'SQSPORTSGrandEdition',
        productImage : '../../assets/cricketKit/SQSPORTSGrandEdition.jpg'
      },
      {
        id : 30,
        category : 'cricketKit',
        productName : 'UmboCricketKit',
        productImage : '../../assets/cricketKit/UmboCricketKit.jpg'
      },
      {
        id : 31,
        category : 'babyCare',
        productName : 'babyPowders',
        productImage : '../../assets/babyCare/babyPowders.jpg'
      },
      {
        id : 32,
        category : 'babyCare',
        productName : 'babyWalkers',
        productImage : '../../assets/babyCare/babyWalkers.jpg'
      },
      {
        id : 33,
        category : 'babyCare',
        productName : 'beddingAndMattress',
        productImage : '../../assets/babyCare/beddingAndMattress.jpg'
      },
      {
        id : 34,
        category : 'babyCare',
        productName : 'cradles',
        productImage : '../../assets/babyCare/cradles.jpg'
      },
      {
        id : 35,
        category : 'babyCare',
        productName : 'diapers',
        productImage : '../../assets/babyCare/diapers.jpg'
      },
      {
        id : 35,
        category : 'babyCare',
        productName : 'earlyLearning',
        productImage : '../../assets/babyCare/earlyLearning.jpg'
      },
      {
        id : 36,
        category : 'babyCare',
        productName : 'sippyCups',
        productImage : '../../assets/babyCare/sippyCups.jpg'
      },
      {
        id : 37,
        category : 'babyCare',
        productName : 'swings',
        productImage : '../../assets/babyCare/swings.jpg'
      },
    ]
  }
}
