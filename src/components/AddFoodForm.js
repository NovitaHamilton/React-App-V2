import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import '../css/AddFoodForm.css';
import { foodDataMap } from '../food.js';

function AddFoodForm({ addFood }) {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    let cerealPromise, vegetablePromise, fruitPromise, dairyPromise, meatPromise, oilPromise, sugarPromise;

    const cereals = {
      oatmeal: foodDataMap.oatmeal,
      rice: foodDataMap.oatmeal,
      integralRice: foodDataMap.integralRice,
      noodles: foodDataMap.noodles,
      bread: foodDataMap.bread,
      wholemealBread: foodDataMap.wholemealBread,
      cookedCorn: foodDataMap.cookedCorn,
      cookedPotato: foodDataMap.cookedPotato,
      cornFlakes: foodDataMap.cornFlakes,
    }
    
    const vegetables = {
      beet: foodDataMap.beet,
      broccoli: foodDataMap.broccoli,
      mushrooms: foodDataMap.mushrooms,
      cauliflower: foodDataMap.cauliflower,
      asparagus: foodDataMap.asparagus,
      spinach: foodDataMap.spinach,
      pickles: foodDataMap.pickles,
      greenBeans: foodDataMap.greenBeans,
      tomatoSauce: foodDataMap.tomatoSauce,
      carrot: foodDataMap.carrot,
      pumpkin: foodDataMap.pumpkin,
      celery: foodDataMap.celery,
      lettuce: foodDataMap.lettuce,
      redPaprika: foodDataMap.redPaprika,
      greenPaprika: foodDataMap.greenPaprika,
      cabbage: foodDataMap.cabbage,
    }

    const fruits = {
      olives: foodDataMap.olives,
      cherries: foodDataMap.cherries,
      custardApple: foodDataMap.custardApple,
      plums: foodDataMap.plums,
      peach: foodDataMap.peach,
      strawberries: foodDataMap.strawberries,
      apple: foodDataMap.apple,
      melon: foodDataMap.melon,
      orange: foodDataMap.orange,
      pear: foodDataMap.pear,
      pineapple: foodDataMap.pineapple,
      waterMelon: foodDataMap.waterMelon,
      grapes: foodDataMap.grapes,
    }

    const dairys = {
      wholeMilk: foodDataMap.wholeMilk,
      yogurt: foodDataMap.yogurt,
      butteryCheese: foodDataMap.butteryCheese,
      cheddarCheese: foodDataMap.cheddarCheese,
      goatCheese: foodDataMap.goatCheese,
      parmesanCheese: foodDataMap.parmesanCheese,
      swissCheese: foodDataMap.swissCheese,
      creamCheese: foodDataMap.creamCheese,
      curdCheese: foodDataMap.curdCheese,
      yogurtFruit: foodDataMap.yogurtFruit,
      custard: foodDataMap.custard,
    }

    const meats = {
      beef: foodDataMap.beef,
      mutton: foodDataMap.mutton,
      pork: foodDataMap.pork,
      lambLiver: foodDataMap.lambLiver,
      ham: foodDataMap.ham,
      sausage: foodDataMap.sausage,
      salami: foodDataMap.salami,
      turkeySausage: foodDataMap.turkeySausage,
      trout: foodDataMap.trout,
      tuna: foodDataMap.tuna,
      mackerel: foodDataMap.mackerel,
      sardine: foodDataMap.sardine,
      salmon: foodDataMap.salmon,
      chickenLeg: foodDataMap.chikenLeg,
      chickenBreast: foodDataMap.chickenBreast,
      turkeyLeg: foodDataMap.turkeyLeg,
      eggs: foodDataMap.eggs,
      shrimp: foodDataMap.shrimp,
      oysters: foodDataMap.oysters,
      clams: foodDataMap.clams,
      lentils: foodDataMap.lentils,
    }

    const oils = {
      wonderOil: foodDataMap.wonderOil,
      soyOil: foodDataMap.soyOil,
      oliveOil: foodDataMap.oliveOil,
      canolaOil: foodDataMap.canolaOil,
      lard: foodDataMap.lard,
      vegetableShortening: foodDataMap.vegetableShortening,
      butter: foodDataMap.butter,
      margarine: foodDataMap.margarine,
      mayonnaise: foodDataMap.mayonnaise,
      bacon: foodDataMap.bacon,
      poultryPate: foodDataMap.poultryPate,
      almonds: foodDataMap.almonds,
      saltyAlmonds: foodDataMap.saltyAlmonds,
      peanut: foodDataMap.peanut,
      saltyPeanut: foodDataMap.saltyPeanut,
      nut: foodDataMap.nut,
      pistachio: foodDataMap.pistachio,
      avocado: foodDataMap.avocado,
    }
    
    const sugars= {
      sugar: foodDataMap.sugar,
      honeyBee: foodDataMap.honeyBee,
      jam: foodDataMap.jam,
      jelly: foodDataMap.jelly,
      lemonPie: foodDataMap.lemonPie,
      coke: foodDataMap.coke,
      fanta: foodDataMap.fanta,
      gingerAle: foodDataMap.gingerAle,
      sprite: foodDataMap.sprite,
      beer: foodDataMap.beer,
      whiteWine: foodDataMap.whiteWine,
      blackWine: foodDataMap.blackWine,
      whisky: foodDataMap.whisky,
    }

    const selectedCereal = cereals[data.cereal];
    const selectedVegetable = vegetables[data.vegetable];
    const selectedFruit = fruits[data.fruit];
    const selectedDairy = dairys[data.dairy];
    const selectedMeat = meats[data.meat];
    const selectedOil = oils[data.oil];
    const selectedSugar = sugars[data.sugar];

    cerealPromise = selectedCereal ? fetchFoodData(selectedCereal) : Promise.resolve([]);
    vegetablePromise = selectedVegetable ? fetchFoodData(selectedVegetable) : Promise.resolve([]);
    fruitPromise = selectedFruit ? fetchFoodData(selectedFruit) : Promise.resolve([]);
    dairyPromise = selectedDairy ? fetchFoodData(selectedDairy) : Promise.resolve([]);
    meatPromise = selectedMeat ? fetchFoodData(selectedMeat) : Promise.resolve([]);
    oilPromise = selectedOil ? fetchFoodData(selectedOil) : Promise.resolve([]);
    sugarPromise = selectedSugar ? fetchFoodData(selectedSugar) : Promise.resolve([]);


    Promise.all([cerealPromise, vegetablePromise, fruitPromise, dairyPromise, meatPromise, oilPromise, sugarPromise])
      .then(([cerealResult, vegetableResult, fruitResult, dairyResult, meatResult, oilResult, sugarResult]) => {
        const portion1 = parseInt(data.portion1) || 1;
        const portion2 = parseInt(data.portion2) || 1;
        const portion3 = parseInt(data.portion3) || 1;
        const portion4 = parseInt(data.portion4) || 1;
        const portion5 = parseInt(data.portion5) || 1;
        const portion6 = parseInt(data.portion6) || 1;
        const portion7 = parseInt(data.portion7) || 1;

        const sumArrays = (...arrays) => {
          const maxLength = Math.max(...arrays.map((arr) => arr.length));
          const result = new Array(maxLength).fill(0);
          for (let i = 0; i < maxLength; i++) {
            for (let j = 0; j < arrays.length; j++) {
              result[i] += arrays[j][i] || 0;
            }
          }
        
          return {
            totalPortion: result[0],
            totalCalories: result[1],
            totalProtein: result[2],
            totalFat: result[3],
            totalCarbohydrates: result[4],
          };
        };
        
        const totalResults = sumArrays(
          cerealResult.map((value) => value * portion1),
          vegetableResult.map((value) => value * portion2),
          fruitResult.map((value) => value * portion3),
          dairyResult.map((value) => value * portion4),
          meatResult.map((value) => value * portion5),
          oilResult.map((value) => value * portion6),
          sugarResult.map((value) => value * portion7)
        );
        
        const newFood = {
          id: uuidv4(),
          date: data.date,
          cerealName: data.cereal,
          cerealArray: cerealResult.map((value) => value * portion1),
          vegetableName: data.vegetable,
          vegetableArray: vegetableResult.map((value) => value * portion2),
          fruitName: data.fruit,
          fruitArray: fruitResult.map((value) => value * portion3),
          dairyName: data.dairy,
          dairyArray: dairyResult.map((value) => value * portion4),
          meatName: data.meat,
          meatArray: meatResult.map((value) => value * portion5),
          oilName: data.oil,
          oilArray: oilResult.map((value) => value * portion6),
          sugarName: data.sugar,
          sugarArray: sugarResult.map((value) => value * portion7),
          total: totalResults,
        };
        
        console.log(newFood);

        addFood(newFood);
        reset(); // Reset all form fields
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    const portionInputs = document.querySelectorAll(".portion");
    portionInputs.forEach((input) => {
      input.addEventListener("change", handlePortionChange);
    });

    return () => {
      portionInputs.forEach((input) => {
        input.removeEventListener("change", handlePortionChange);
      });
    };
  }, []);

  const handlePortionChange = (event) => {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
  };

  const fetchFoodData = (food) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(food);
      }, 300);
    });
  };

  return (
    <form className="contentForm" onSubmit={onSubmit}>
      <h1>Nutrition log</h1>
      <div id='dateContent'>
        <label>Select a date</label>
        <input type="date" id='date' {...register('date')} />
      </div>
      
      <div id='cereal'>
        <select {...register('cereal')}>
          <option value="empty">Select a Cereal</option>
          <option value="oatmeal">Oatmeal</option>
          <option value="integralRice">Integral Rice</option>
          <option value="rice">Rice</option>
          <option value="noodles">Noodles</option>
          <option value="bread">Bread</option>
          <option value="wholemealBread">Wholemeal Bread</option>
          <option value="cookedCorn">Cooked Corn</option>
          <option value="cookedPotato">Cooked Potato</option>
          <option value="cornFlakes">Corn Flakes</option>
        </select>
        <input type="number" {...register('portion1')} defaultValue="1" className="portion" id='quantity' />
      </div>
     
      <div id='vegetable'>
        <select {...register('vegetable')}>
          <option value="empty">Select a Vegetable</option>
          <option value="beet">Beet</option>
          <option value="broccoli">Broccoli</option>
          <option value="mushrooms">Mushrooms</option>
          <option value="cauliflower">Cauliflower</option>
          <option value="asparagus">Asparagus</option>
          <option value="spinach">Spinach</option>
          <option value="pickles">Pickles</option>
          <option value="greenBeans">Green Beans</option>
          <option value="tomatoSauce">Tomato Sauce</option>
          <option value="carrot">Carrot</option>
          <option value="pumpkin">Pumpkin</option>
          <option value="celery">Celery</option>
          <option value="lettuce">Lettuce</option>
          <option value="redPaprika">Red Paprika</option>
          <option value="greenPaprika">Green Paprika</option>
          <option value="cabbage">Cabbage</option>
        </select>
        <input type="number" {...register('portion2')} defaultValue="1" className="portion" id='quantity' />
      </div>
      
      <div id='fruit'>
        <select {...register('fruit')}>
          <option value="empty">Select a Fruit</option>
          <option value="olives">Olives</option>
          <option value="cherries">Cherries</option>
          <option value="custardApple">Custard Apple</option>
          <option value="plums">Plums</option>
          <option value="peach">Peach</option>
          <option value="strawberries">Strawberries</option>
          <option value="apple">Apple</option>
          <option value="melon">Melon</option>
          <option value="orange">Orange</option>
          <option value="pear">Pear</option>
          <option value="pineapple">Pinapple</option>
          <option value="waterMelon">Watermelon</option>
          <option value="grapes">Grapes</option>
        </select>
        <input type="number" {...register('portion3')} defaultValue="1" className="portion" id='quantity' />
      </div>

      <div id='dairy'>
        <select {...register('dairy')}>
          <option value="empty">Select a Dairy</option>
          <option value="wholeMilk">Whole Milk</option>
          <option value="yogurt">Yogurt</option>
          <option value="butteryCheese">Buttery Cheese</option>
          <option value="cheddarCheese">Cheddar Cheese</option>
          <option value="goatCheese">Goat Cheese</option>
          <option value="parmesanCheese">Parmesan Cheese</option>
          <option value="swissCheese">Swiss Cheese</option>
          <option value="creamCheese">Cream Cheese</option>
          <option value="curdCheese">Curd Cheese</option>
          <option value="yogurtFruit">Yogurt Fruit</option>
          <option value="custard">Custard</option>
        </select>
        <input type="number" {...register('portion4')} defaultValue="1" className="portion" id='quantity' />
      </div>

      <div id='meat'>
        <select {...register('meat')}>
          <option value="empty">Select a Meat</option>
          <option value="beef">Beef</option>
          <option value="mutton">Mutton</option>
          <option value="pork">Pork</option>
          <option value="lambLiver">Lamb Liver</option>
          <option value="ham">Ham</option>
          <option value="sausage">Sausage</option>
          <option value="salami">Salami</option>
          <option value="turkeySausage">Turkey Sausage</option>
          <option value="trout">Trout</option>
          <option value="tuna">Tuna</option>
          <option value="mackerel">Mackerel</option>
          <option value="sardine">Sardine</option>
          <option value="salmon">Salmon</option>
          <option value="chickenLeg">Chicken Leg</option>
          <option value="chickenBreast">Chicken Breast</option>
          <option value="turkeyLeg">Turkey Leg</option>
          <option value="eggs">Eggs</option>
          <option value="shrimp">Shrimp</option>
          <option value="oysters">Oysters</option>
          <option value="clams">Clams</option>
          <option value="lentils">Lentils</option>
        </select>
        <input type="number" {...register('portion5')} defaultValue="1" className="portion" id='quantity' />
      </div>

      <div id='oil'>
        <select {...register('oil')}>
          <option value="empty">Select an Oil</option>
          <option value="wonderOil">Wonder Oil</option>
          <option value="soyOil">Soy Oil</option>
          <option value="oliveOil">Olive Oil</option>
          <option value="lard">Lard</option>
          <option value="vegetableShortening">Vegetable Shortening</option>
          <option value="butter">Butter</option>
          <option value="margarine">Margarine</option>
          <option value="mayonnaise">Mayonnaise</option>
          <option value="bacon">Bacon</option>
          <option value="poultryPate">Poultry Pate</option>
          <option value="almonds">Almonds</option>
          <option value="saltyAlmonds">Salty Almonds</option>
          <option value="peanut">Peanut</option>
          <option value="saltyPeanut">Salty Peanut</option>
          <option value="nut">Nuts</option>
          <option value="pistachio">Pistachio</option>
          <option value="avocado">Avocado</option>
        </select>
        <input type="number" {...register('portion6')} defaultValue="1" className="portion" id='quantity' />
      </div>

      <div id='sugar'>
        <select {...register('sugar')}>
          <option value="empty">Select a Sugar</option>
          <option value="sugar">Sugar</option>
          <option value="honeyBee">Honey Bee</option>
          <option value="jam">Jam</option>
          <option value="jelly">Jelly</option>
          <option value="lemonPie">Lemon Pie</option>
          <option value="coke">Coke</option>
          <option value="fanta">Fanta</option>
          <option value="gingerAle">Ginger Ale</option>
          <option value="sprite">Sprite</option>
          <option value="beer">Beer</option>
          <option value="whiteWine">White Wine</option>
          <option value="blackWine">Black Wine</option>
          <option value="whisky">Whisky</option>
        </select>
        <input type="number" {...register('portion7')} defaultValue="1" className="portion" id='quantity' />
      </div>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddFoodForm;
