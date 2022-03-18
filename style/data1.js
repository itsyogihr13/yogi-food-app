async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let alldata = data.meals;
    return alldata;
  } catch (e) {
    console.log("e:", e);
  }
}

function appendData(data, location) {
  location.innerHTML = "";
  data.forEach(({ strMealThumb, strMeal }) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.textContent = strMeal;
    img.src = strMealThumb;
    div.append(img, p);
    location.append(div);
  });
}
export { getData, appendData };
