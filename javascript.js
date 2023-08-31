document.getElementById("gerarArquivo").addEventListener("click", function(event) {
    event.preventDefault();

    const nomeSocial = document.getElementById("nomeSocial").value;
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const idade = document.getElementById("idade").value;
    const profissao = document.getElementById("profissao").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const telefone = document.getElementById("nomeSocial").value;
    const sexo = document.getElementById("sexo").value;
    const estadoCivil = document.getElementById("estadoCivil").value;

    /* NÃO SEI SE É NECESSÁRIO ISSO, E SE FOR, QUAIS OPÇÕES SAO ESSENCIAIS?
    /*if (nome === "" || idade === "" || genero === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }*/

    const data = `Nome Social: ${nomeSocial}\nNome Completo: ${nomeCompleto}\nRG: ${rg}\nCPF: ${cpf}\nData de nascimento: ${dataNascimento}
    \nIdade: ${idade}\nProfissão: ${profissao}\nEndereço: ${endereco}\nBairro: ${bairro}\nTelefone: ${telefone}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_paciente.txt";
    a.textContent = "Clique para baixar o arquivo do paciente";
    a.classList.add("linkDeDownload");

    document.body.appendChild(a);
  });