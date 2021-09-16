(function(){
	/*navbar*/
	liProductos = document.getElementById('liProductos');
	liNosotros = document.getElementById('liNosotros');
	liEncuentranos = document.getElementById('liEncuentranos');
	liProductos.addEventListener('click', function(){
		liProductos.classList.add('active');
		liNosotros.classList.remove('active');
		liEncuentranos.classList.remove('active');
	})
	liNosotros.addEventListener('click', function(){
		liProductos.classList.remove('active');
		liNosotros.classList.add('active');
		liEncuentranos.classList.remove('active');
	})
	liEncuentranos.addEventListener('click',function(){
		liProductos.classList.remove('active');
		liNosotros.classList.remove('active');
		liEncuentranos.classList.add('active');
	})
	/*gotop*/
	var permitirGoTop = true;
	if(document.documentElement.scrollTop > 204 && permitirGoTop == true){
		document.querySelector('.go-top-container').classList.add('show');
		liProductos.classList.remove('active');
		liNosotros.classList.remove('active');
		liEncuentranos.classList.remove('active');
	}
	window.onscroll	= function(){
		console.log(document.documentElement.scrollHeight);
		if(document.documentElement.scrollTop > 204  && permitirGoTop == true){
			document.querySelector('.go-top-container').classList.add('show');
			liProductos.classList.remove('active');
			liNosotros.classList.remove('active');
			liEncuentranos.classList.remove('active');
		}else{
			document.querySelector('.go-top-container').classList.remove('show');
		}
	}
	document.querySelector('.go-top-container').addEventListener('click', () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})
}());