async function getResponce(){
    let responce =  await fetch('https://ec2-18-184-156-205.eu-central-1.compute.amazonaws.com/')
    let content = await responce.json()

    let pack = document.querySelector('.pack');


    let i;
    
        pack.innerHTML +=`
        <div class="title">
            <h2 class="name">${content.name}</h2>
            <p class="desc">${content.description} </p>
            </div>
            <div class="info">
                <div class="basic_info">
                    <div class="installing">
                    <img  class="icon" src="images/icons/icon-installing.png" alt="icon">
                    <p class=" parag install">${content.downloads}</p>
                    </div>
                    <div class="data-time">
                    <img class="icon" src="images/icons/icon-clock.png" alt="icon">
                    <p class=" parag data">${content.date}</p>
                    </div>
                </div>
                <div class="btn_pack">
                    <a href="${content.link}" class="btn" target="_blank">Go to package</a>
                </div>
            </div>
        `
    }

getResponce()




           
