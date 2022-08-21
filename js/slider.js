    const sliders=[...document.querySelectorAll('.testimony__body')];
    const buttonNext= document.querySelector('#next');
    const buttonBefore= document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click',()=>{
        changePossition(1);
    });
    buttonBefore.addEventListener('click',()=>{
        changePossition(-1);
    });
    const changePossition=(add)=>{
        const currentTestominy=document.querySelector('.testimony__body--show').dataset.id;
        value=Number(currentTestominy);
        value+=add;
        sliders[Number(currentTestominy)-1].classList.remove('testimony__body--show');
        console.log(value);
        if(value ===sliders.length+1 || value===0){
            value=value===0? sliders.length:1;
        }
        sliders[value-1].classList.add('testimony__body--show');

    }