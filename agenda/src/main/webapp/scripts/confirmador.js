/**
 * CONFIRMAÇÃO DE EXCLUSÃO DE UM CONTATO ...
 * @author José de Assis
 * param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("confirma a exclusão deste contato ?")
	 if (resposta === true){
		// alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	 }
 }