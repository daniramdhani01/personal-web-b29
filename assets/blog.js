// // let name1 = 'udin'
// // let name2 = 'dani'
// // let name3 = 'jejen'
// // let name4 = 'zenal'
// // let name5 = 'arifin'

// // let names = ['udin', 'dani', 'jejen', 'zenal', 'arifin']

// // console.log(names[1])

// let dataOrang1 = {
//     name: 'dani',
//     address: 'ciamis',
//     'email address': 'dani@gmail.com'
// }

// let dataOrang2 = {
//     name: 'udin',
//     address: 'banjar',
//     email: 'udin@gmail.com'
// }

// let dataOrang3 = {
//     name: 'jajang',
//     address: 'tasikmalaya',
//     email: 'jajang@gmail.com'
// }

// console.log(dataOrang1.address)
// console.log(dataOrang1['email address'])
function handleChange() {
    let image = document.getElementById('input-blog-image')
    const source = URL.createObjectURL(image.files[0]);
    const previewElement = document.getElementById('preview-thumbnail');
    previewElement.innerHTML = `<img src="${source}" style="width: 50%;min-width: 150px; border-radius: 10px; box-shadow: 0px 0px 10px grey" class="mb-3"/>`
}

let blogs = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    // console.log(typeof image)
    // console.log(image)
    // console.log(image.value)
    // console.log(image.files[0])

    if (title == '') {
        alert(`please input title`)
    } else if (content == '') {
        alert(`please input content`)
    } else if (image.value == '') {
        alert(`please insert image`)
    }
    else {

        image = URL.createObjectURL(image.files[0])

        let blog = {
            title: title,
            content: content,
            image: image,
            author: 'dani',
            postAt: new Date()
        }

        blogs.push(blog)

        console.log(blogs)

        renderBlog()

        document.getElementById('input-blog-title').value = ''
        document.getElementById('input-blog-content').value = ''
        document.getElementById('input-blog-image').value = ''
        const previewElement = document.getElementById('preview-thumbnail');
        previewElement.innerHTML = ``
    }
}

function renderBlog() {
    let contentContainer = document.getElementById('contents')
    contentContainer.innerHTML = ''
    for (let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML += `  
                                    <div class="blog-list-item">
                                    <div class="blog-image">
                                    <img src="${blogs[i].image}" alt="" />
                                    </div>
                                    <div class="blog-content">
                                    <div class="btn-group">
                                        <button class="btn-edit">Edit Post</button>
                                        <button class="btn-post">Post Blog</button>
                                    </div>
                                    <h1>
                                        <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
                                    </h1>
                                    <div class="detail-blog-content">
                                        ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
                                    </div>
                                    <p>${blogs[i].content} </p>
                                    <div style="text-align: right; color: grey; font-size: 15px">${getDistanceTime(blogs[i].postAt)}</div>
                                    </div>
                                </div>`
    }

}

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} - ${hours} : ${minutes} WIB`

    return fullTime
}

function getDistanceTime(time) {
    let timePost = time
    let timeNow = new Date()
    // console.log(typeof timePost)
    // console.log(timePost)
    // console.log(timeNow)

    let distance = timeNow - timePost // result in milisecound

    // convert to day => milisecound in one day
    let milisecound = 1000
    let secoundInHours = 3600
    let hoursInDay = 23 //hours in one day

    let distanceDay = Math.floor(distance / (milisecound * secoundInHours * hoursInDay))

    if (distanceDay >= 1) {
        return `${distanceDay} day ago`
    } else {
        //convert to hour
        let distanceHour = Math.floor(distance / (1000 * 60 * 60))
        if (distanceHour >= 1) {
            return `${distanceHour} hours ago`
        } else {
            //convert to minute
            let distanceMinute = Math.floor(distance / (1000 * 60))
            if (distanceMinute <= 0) {
                distanceSecound = Math.floor(distance / 1000)
                return `${distanceSecound} secound ago`
            } else {
                return `${distanceMinute} minute ago`
            }
        }
    }
}

setInterval(() => {
    renderBlog()
}, 1000); 