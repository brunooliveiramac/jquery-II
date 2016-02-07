		var umaPropaganda = function(){
		    var propagandas = ["O que acha de comprar uma motocicleta?",
		               "O que acha de comprar uma lancha?",
		               "O que acha de comprar uma bicicleta?",
		               "O que acha de comprar uma carro?"
		               ];
		    var posicao = Math.floor(propagandas.length * Math.random());
		    var texto = propagandas[posicao];
		    var tr =$("<tr>").addClass("propaganda").append($("<td>"));
		    tr.find("td").attr("colspan", 6).text(texto);
		    return tr;
		}


        var removeItem = function(event){
			var self = $(this); //transforma em javascript
			//self.parent().parent().remove(); //link <a> - pai do link <td> - pai do pai do link -- <tr>
			self.closest("tr").hide();
			event.preventDefault(); //Não segue o ling
			var atual = parseInt($(".quantidade-items").text());
			var novaQuantidade = atual - 1;
			$(".quantidade-items").text(novaQuantidade);

			var precoAtual = parseFloat($(".valor-total").text());
			//var preco = parseFloat(self.parent().prev().text());//td acima
			var preco = parseFloat(self.closest("tr").find(".item-total").text());
			var precoFinal = precoAtual - preco;

			$(".valor-total").text(precoFinal);

			atualizaDados();

		};





		var atualizaDados = function(){

				var carrinhos = $(".carrinho");
				carrinhos.each(function (){
						var carrinho = $(this);
						var total = 0;
						var items = carrinho.find(".item-total:visible");
					    for(var i=0; i < items.length; i++) {
					        var conteudo = $(items[i]).text();
					        var preco = parseFloat(conteudo);
					        total += preco;
					    }

						carrinho.find(".valor-total").text(total);
						carrinho.find(".quantidade-items").text(items.length);
				});

				

		};



		var undo = function(){

			var carrinho = $(this).closest(".carrinho");
			carrinho.find("tr:visible").removeClass("recuperado");
			var trs = carrinho.find("tr:hidden");
			trs.addClass("recuperado");
			trs.show();
			atualizaDados(); 

		};

		var daDestaque = function(){
			$(this).addClass("hovering");
		};

		var tiraDestaque = function(){
			$(this).removeClass("hovering");
		};

		var aposinicializado = function (){
			
			atualizaDados();
			$(".undo").click(undo);
			$(".remove-item").click(removeItem); 
			$(".carrinho").each(function() {
			  var carrinho = $(this);
				  	carrinho.find("tr:nth-child(3n)").each(function(){
				  			umaPropaganda().insertAfter($(this));
					});
			});



		};

 
		var alternaPropagandas = function(event) {
		event.preventDefault();
		$(".propaganda").fadeToggle();
		$(".alterna-propaganda").toggle();
		};

		//$("tr").on("mouseenter", daDestaque);
		//$("tr").on("mouseleave", tiraDestaque);

		$("tbody tr").hover(daDestaque, tiraDestaque);


		$(aposinicializado);





