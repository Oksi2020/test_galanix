let table = document.querySelector('.table');
let sendUrl = document.querySelector('.send__url');
let cast = document.querySelector('.cast');
let country = document.querySelector('.country');
let error = document.querySelector('.error');

const fillingList = url => {
    fetch(url)
        .then(response=> {
            return response.json();
        })
        .then(data=> {
            persCollection = data.results;
            date = data;
            return date;
        })
        .then(() => {
            if(date.length>0) {
                let index = 1;
                date.map(item => {
                    for (let key in item) {
                        table.innerHTML += `
                        <tr>
                           <td>${index}</td>
                           <td>${key}</td>
                           <td>${(key == 'web_pages') ? `<a href=${item[key]} target="_blank"> ${item[key]}</a>` : item[key] ? item[key] : '-'}</td>
                        </tr>
                      
                    `
                        index++;
                    }
                })
            } else {
                error.innerHTML = 'Write correct country!';
            }
        })
}

const createList = () => {
    let value = country.value;
    returnBack();
    if(value.length>0) {
        fillingList(`http://universities.hipolabs.com/search?name=middle&country=${value}`);
    }
}

const returnBack = () => {
    table.innerHTML = '';
    country.value = '';
    error.innerHTML='';
}

sendUrl.addEventListener('click', createList);
cast.addEventListener('click', returnBack);