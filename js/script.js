// Calculadora para praticar factory functions. Criar como se fosse um objeto. Como se tem só uma calculadora, não faz sentido criar uma função. A calculadora vai ser um objeto em específico.

function criaCalculadora(){
	return{ // vai retornar um objeto
		display: document.querySelector('.display'), // atributo

		inicia: function(){ // método
			this.cliqueBotoes(); // this -> calculadora
			this.pressionaEnter();
		},

		pressionaEnter(){
		this.display.addEventListener('keyup', e => { // Quando soltar a tecla libera o evento.
			if (e.keyCode === 13) {
				this.realizaConta();
			}
			});
		},

		clearDisplay(){
			this.display.value = '';
		},

		apagaUm(){
			this.display.value = this.display.value.slice(0, -1);
		},

		realizaConta(){
			let conta = this.display.value;

			try{
				conta = eval(conta);
				if (!conta) { // Se a conta for NaN ou qualquer valor falso
					alert('Conta inválida');
					return;
				}
				this.display.value = String(conta);

			} catch(e){
				alert('Conta inválida');
				return;
			}
		},


		cliqueBotoes(){ // método
			document.addEventListener('click', function(e){
				const el = e.target; // O que estou clicando na página.
				if (el.classList.contains('btn-num')) { // Se a class contem a class btn-num
					this.btnParaDisplay(el.innerText); // método dentro de outro método. Precisa do this. this está apontando para o document.innerText está enviando para o valor.
				}

				if (el.classList.contains('btn-clear')) {
					this.clearDisplay();	
				}

				if (el.classList.contains('btn-del')) {
					this.apagaUm();
				}

				if (el.classList.contains('btn-eq')) {
					this.realizaConta();
				}

			}.bind(this)); // Para o this apontar para calculadora e não para o document.
		},

		btnParaDisplay(valor){
			this.display.value += valor; // O this é a calculadora
		}		

	};
}

const calculadora = criaCalculadora();
calculadora.inicia();



















































