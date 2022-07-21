    
const button=document.getElementById('clickBtn');
const divList=document.getElementById('newrecipe');

//functions
function getrecipe() {
    let i=0
    const submit = document.getElementById('submit')
    const brec=document.getElementById('brec');
    submit.addEventListener('click', () => {   
        let newrec = document.getElementById('title')
        const ul = document.getElementById('brec_ul')
        const li = document.createElement('li')
        li.innerHTML=newrec.value;
        ul.appendChild(li); 

                

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

