let arr = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
]

let success = []
let unsuccess = []


for(let item of arr) { 
    item.expensesPerMonth = 0 // создаем новый ключ
    let budgetForMonth = item.budget / 12 // находим месячный юьбджет и сохраняем в переменную 

    for(let itemTwo of item.expensesPerYear) { // раскрываем расходы каждой компании (за год) 
        item.expensesPerMonth += itemTwo.total / 12 // прибавляем каждый расход к общей сумме деленную на 12 
    }
    // ...............................
    // найти сумму алог за месяц 
    // прибавить его к расходам
    // ...............................

    item.percent = Math.round(item.expensesPerMonth * 100 / budgetForMonth) + "%" // создаем новй ключ процент 
    // присваиваем к нему соотношение трат к месячному бьджету и округляем



}
    let budget_arr = []
    for(let item of arr){
        let result = item.expensesPerYear.reduce((a, b) => {
            return a + b.total
        },0) / 12;
        let result2 = item.budget / 100 * 12 
        budget_arr.push(result2)
        console.log(result2);
    }


    let max = Math.max(...budget_arr)
    let min = Math.min(...budget_arr)
    
    max = arr.find(item => item.budget == max * 100 / 12)
    min = arr.find(item => item.budget == min * 100 / 12)

    console.log(max)
    console.log(min);


console.log(arr);




    // 1. Если процент трат больше 70% то в unsuccess если меньше то success
    // 2. Найти того кто больше всех платит налог и того кто меньше всех платит
    // 3. Найти общую сумму всех налогов сол всех компаний Например каждая компания платит по 20 тысяч в итоге сумма 100 000 (если 5 компаний)