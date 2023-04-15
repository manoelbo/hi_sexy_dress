/*
    © 2022 KondaSoft.com
    https://www.kondasoft.com
*/


// Init Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach((el) => new bootstrap.Tooltip(el))

// Init Bootstrap popovers
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach((el) => new bootstrap.Popover(el))

// Shopify's callenge page - Add BS classes
document.querySelector('.btn.shopify-challenge__button')
    ?.classList.add('btn-primary')

// Shopify's errors messages - Add BS classes
const errors = document.querySelector('.errors')
if (errors) {
    errors.classList.add('alert', 'alert-danger')
}


async function toggleCategoryCards() {
    // Seleciona todos os elementos com a classe 'category-card'
    const categoryCards = document.querySelectorAll('.category-card');
  
    // Seleciona o elemento com as classes 'btn-category' e 'active'
    const activeButton = document.querySelector('.btn-category.active');
  
    // Obtém o valor do atributo 'id' do botão ativo
    const activeButtonId = activeButton ? activeButton.id : null;
  
    // Percorre todos os elementos com a classe 'category-card'
    for (const card of categoryCards) {
      // Verifica se o id do elemento 'category-card' é igual ao id do botão ativo
      if (card.id === activeButtonId) {
        // Se sim, define o estilo 'display' como 'none' para ocultar o elemento
        card.style.display = 'block';
        card.style.opacity = '0';

        setTimeout(() => {
            card.style.opacity = '1';
          }, 100);

      } else {
        // Se não, define o estilo 'display' como '' (vazio) para manter o elemento visível
      
        card.style.display = 'none';

        // card.style.display = 'none';
       
        

      }
    
    }
  }
  
  // Chame a função toggleCategoryCards() sempre que for necessário
  toggleCategoryCards();


  function activateCategoryButton(event) {
    // Seleciona todos os elementos com a classe 'btn-category'
    const categoryButtons = document.querySelectorAll('.btn-category');
  
    // Remove a classe 'active' de todos os elementos 'btn-category'
    for (const button of categoryButtons) {
      button.classList.remove('active');
    }
  
    // Adiciona a classe 'active' ao elemento clicado
    event.target.classList.add('active');
    toggleCategoryCards();
  }
  
  // Adiciona um event listener aos elementos com a classe 'btn-category'
  const categoryButtons = document.querySelectorAll('.btn-category');
  for (const button of categoryButtons) {
    button.addEventListener('click', activateCategoryButton);
  }