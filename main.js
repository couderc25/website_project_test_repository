
const button=document.getElementById('clickBtn');
const divList=document.getElementById('newrecipe');

//functions
function getrecipe() {
    let i=0
    const submit = document.getElementById('submit')
    const brec=document.getElementById('brec');
    submit.addEventListener('click', () => {   
        let rectitle = document.getElementById('title')
        let recbody = document.getElementById('recipe')
        let reccategory = document.getElementById('category')
        const ul = document.getElementById(`${recipe.reccategory}`)
        const li = document.createElement('li')
        // li.innerHTML=rectitle.value;
        // ul.appendChild(li); 
        console.log(reccategory)
        let body= {title:rectitle.value, body:recbody.value, category: reccategory.value}
        console.log(body)
        console.log(JSON.stringify(body))
        fetch('https://cedric-couder.npkn.net/nsxoqpnncs/',{
            method:'POST',
             body:JSON.stringify(body), 
            headers: {'Content-Type': 'application/json'}
        }

        ).then(getdata)

                

   });

}


//show/hide input form 
button.addEventListener('click', function ()  {
    if (divList.style.display === 'none') {     
        divList.style.display = 'block';
        
    } else {
        divList.style.display = 'none';
    }
});

//function to get title text from new recipe form

getrecipe();
function getdata(){
    fetch('https://cedric-couder.npkn.net/nsxoqpnncs/').then((res) => {
        return res.json();
    }).then((data) => {
        let catbin = document.getElementsByClassName('categorybin')
        for (let index=0; index<catbin.length; index++){
            while (catbin[index].firstChild){
                catbin[index].removeChild(catbin[index].firstChild)
            }
        }
        
        for (let recipe of data.data) {
            

            
            let li = document.createElement('li');
            li.innerHTML = `<a href="#${recipe.title}">${recipe.title}</a>`;
            console.log(recipe.category)
            document.getElementById(recipe.category).appendChild(li);

            let div = document.createElement('div');
            div.innerHTML = `<h3 id="${recipe.title}">${recipe.title}</h3>
            <p class="insturction"><pre>
            ${recipe.body}
            </pre></p>`;
            document.getElementById(`${recipe.category}-recipes`).appendChild(div);

        }
    });
}
getdata();