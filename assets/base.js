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
    console.log(categoryCards, activeButton, activeButtonId)
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

    console.log("foi")
    // Remove a classe 'active' de todos os elementos 'btn-category'
    for (const button of categoryButtons) {
      button.classList.remove('active');
    }
  
    // Adiciona a classe 'active' ao elemento clicado
    event.target.classList.add('active');
    toggleCategoryCards();
  }

  const categoryCards = document.querySelectorAll('.category-card');

for (const card of categoryCards) {
  card.addEventListener('click', activateCategoryButton);
}
  
  // Adiciona um event listener aos elementos com a classe 'btn-category'
  const categoryButtons = document.querySelectorAll('.btn-category');
  for (const button of categoryButtons) {
    button.addEventListener('click', activateCategoryButton);
  }


  const addToCart = document.querySelector('#add_to_card');
  const addButton = document.querySelector('button[name="add"]');
  
  addToCart.addEventListener('click', function(event) {
    event.preventDefault();
    addButton.click();
  });



  // Solicita que o usuário insira as duas datas


  // Função para executar quando o documento estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  // 1. Pegue a data da propriedade "date" do span com id="timezone" que estão no formato DD-MM-YYYY-HH:MM TMZ.
  const spanTimezone = document.getElementById("timezone");

  const dataEventoStr = spanTimezone.getAttribute("date");
  console.log(dataEventoStr);
  const duracaoEventoStr = spanTimezone.getAttribute("duration");
  const duracaoEvento = parseInt(duracaoEventoStr, 10);

  // 3. Faça um script para consultar o timezone do visitante.
  const visitorTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // 4. Converta a data para a timezone do visitante.
  const formato = "DD-MM-YYYY-HH:mm";
  const formatoUTC = moment.tz(dataEventoStr, formato, "America/New_York");
  const dataEvento = moment.tz(formatoUTC, visitorTimezone);
  console.log(dataEvento)

  // 5. Crie uma nova data que adicione a duração do evento.
  const dataFimEventoVisitante = dataEvento.clone().add(duracaoEvento, "minutes");

  // 6. Faça um output que mostre o hora de inicio e final como o formato HH-HH"h" + timezone do visitante
  const horaInicio = dataEvento.format("HH");
  const horaFim = dataFimEventoVisitante.format("HH");
  const timezoneAbreviado = dataFimEventoVisitante.format("z");

  const output = `${horaInicio}-${horaFim}h ${"("+visitorTimezone+")"}`;

  // 7. Coloque o output dentro do span com id="timezone"
  spanTimezone.textContent = output;
});