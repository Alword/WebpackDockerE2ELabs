//@ts-check
async function component() {
  const element = document.createElement('div');

  let url = "https://api.kanye.rest/";
  let response = await fetch(url);

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let json = await response.json();
    
    element.innerHTML = json.quote;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  
  
  return element;
}

component().then(e=> document.body.appendChild(e))