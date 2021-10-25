
function testeCPF(strCPF) {
  var soma;
  var resto;
  soma = 0;
  
  if (strCPF == "00000000000") return false;
  
  for (i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  
  if ((resto == 10) || (resto == 11))  resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;
  
  soma = 0;
  for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  
  if ((resto == 10) || (resto == 11))  resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;
  
  return true;
}
  
function validarCpf() {
  var cpfValor = document.getElementById("cpf").value;
  
  if (testeCPF(cpfValor) == true) {
    document.getElementById("Vcpf").innerHTML = "CPF VÁLIDO";
    document.getElementById("Vcpf").style.fontWeight = "600";
    document.getElementById("Vcpf").style.color = "green";
} 
    
  if (testeCPF(cpfValor) == false) {
    document.getElementById("Vcpf").innerHTML = "CPF INVÁLIDO";
    document.getElementById("Vcpf").style.fontWeight = "600";
    document.getElementById("Vcpf").style.color = "red";
}
  
  if (cpfValor == "") {
    document.getElementById("Vcpf").innerHTML = "CPF <span>*</span>";
    document.getElementById("Vcpf").style.fontWeight = "400";
    document.getElementById("Vcpf").style.color = "black";
  }
}



