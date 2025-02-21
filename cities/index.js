
//массив городов
const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];

//пустой массив температур
let temperatures = [];


//вывод вопросов с температурой
for (let i=0; i<cities.length; i +=1)
{
  let answer;
  do {
    answer = prompt(`Температура в г.${cities[i]} (введите числовое значение):`); 
      
  } while (answer.replace(/\s/g, "").length === 0 || isNaN(answer))
  
  //сохраняем ответ в массив
  temperatures.push(answer);
}
//проверка
console.log(temperatures);

//список для городов и и температур
const tempList = document.querySelector(".tempList");
// console.log(tempList);


//выводим текст с температурой на экран
for (let a=0; a<cities.length; a +=1)
{
  const tempPhrase = document.createElement("li");
  tempList.append(tempPhrase);
  tempPhrase.innerText = `Температура в г.${cities[a]}: ` + temperatures[a] + `°C`;
}

//находим мин температуру
const minTemp = Math.min(...temperatures);
const minTempPhrase = document.createElement("p");
minTempPhrase.setAttribute("class", "minmaxTemp");
tempList.after(minTempPhrase);
minTempPhrase.innerText = `Минимальная температура: ${minTemp}°C`;

//находим макс температуру
const maxTemp = Math.max(...temperatures);
const maxTempPhrase = document.createElement("p");
maxTempPhrase.setAttribute("class", "minmaxTemp");
tempList.after(maxTempPhrase);
maxTempPhrase.innerText = `Максимальная температура: ${maxTemp}°C`;