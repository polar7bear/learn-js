//for-in
const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

for(let i in user) {
    console.log(`${i}: ${user[i]}`);
}


//forEach   
const locations = ['서울', '부산', '경기도', '제주도'];

locations.forEach(function (value, idx, array) {
    console.log(`${idx} : ${value}`);
    console.log(array);
})


//map
locations.map(function (value) {
    console.log(value);
})
