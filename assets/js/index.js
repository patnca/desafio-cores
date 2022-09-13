document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', changebg);
});

function changebg(e) {
    let color = e.target.innerHTML;
    
    switch (color) {
        case 'Azul':
            document.querySelector('.board').style.backgroundColor = '#87cefa';            
            break;
        
        case 'Vermelho':
            document.querySelector('.board').style.backgroundColor = '#ff0000';            
            break;

        case 'Verde':
            document.querySelector('.board').style.backgroundColor = '#006400';            
            break;

        case 'Amarelo':
            document.querySelector('.board').style.backgroundColor = '#ffff00';            
            break;

        default:
            break;
    }
}