const catalog = [
    {
        img: 'https://i.pinimg.com/originals/8b/38/ff/8b38ffaa72dda4c1de41ea4a1cdaee2f.jpg',
        h3: 'Simplest Salad Recipe ever',
        p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nulla repellendus deleniti!',
        b: '🕒 6 mins ago',
        b2: '💬 39 comments'
    },

    {
        img: 'https://disgustingmen.com/wp-content/uploads/2021/09/fastfood-map-2.jpg',
        h3: 'Best Fast Food Ideas (Yummy)',
        p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nulla repellendus deleniti!',
        b: '🕒 10 days ago',
        b2: '💬 0 comments'
    },

    {
        img: 'https://img.inmyroom.ru/inmyroom/thumb/1240x796/jpg:60/uploads/food_post/teaser/8e/8e19/jpg_2000_8e19fff7-4f7d-4114-939a-8d1487e81fe9.png?sign=1e5fa78c61c0386361f27f566efacca532abe6fc5c13dc006b1a5307fa32c73c',
        h3: 'Who to eat salad',
        p: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nulla repellendus deleniti!',
        b: '🕒 16 hours ago',
        b2: '💬 9 comments'
    }
]
const wrapper = document.querySelector('.wrapper')

catalog.forEach(card => {
    wrapper.innerHTML += `
        <div class="card">
            <div class="img">
                <img src="${card.img}" alt="">
                <button>Cooking</button>
            </div>

            <h3>${card.h3}</h3>
            <p>${card.p}</p>
            <div class="title">
                <b>${card.b}</b>
                <b>${card.b2}</b>
            </div>
        </div>
    `
})

