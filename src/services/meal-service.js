const headers = {
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
  }

export async function getMeals() {
  return fetch('menuData.json', headers)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error('error', error);
    });
}

export async function getLunchs() {
  return fetch('menuData.json', headers)
    .then((res) => res.json())
    .then((data) => data.items.filter((meal) => meal.type.includes('lunch')))
    .catch((error) => {
      console.error('error', error);
    });
}

export async function getDinners() {
  return fetch('menuData.json', headers)
    .then((res) => res.json())
    .then((data) => data.items.filter((meal) => meal.type.includes('dinner')))
    .catch((error) => {
      console.error('error', error);
    });
}

