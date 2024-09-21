/*
  --------------------------------------------------------------------------------------
  Função para buscar lista de terminais cadastrados no banco de dados via requisição GET
  --------------------------------------------------------------------------------------
*/
const getTerminais = async () => {
    let url = 'http://127.0.0.1:5000/terminais';
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        data.terminais.forEach(item => insertList(item.numero_de_serie, item.modelo_terminal, item.status))
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }
  
  /*
    --------------------------------------------------------------------------------------
    Chamada da função de exibição inicial dos terminais cadastrados
    --------------------------------------------------------------------------------------
  */
    getTerminais()
  
  
  /*
    --------------------------------------------------------------------------------------
    Função para incluir um novo terminal no banco de dados via requisição POST
    --------------------------------------------------------------------------------------
  */
  const postTerminal = async (inputNumeroDeSerie, inputModeloTerminal, inputStatus) => {
    const formData = new FormData();
    formData.append('numero_de_serie', inputNumeroDeSerie);
    formData.append('modelo_terminal', inputModeloTerminal);
    formData.append('status', inputStatus);
  
    let url = 'http://127.0.0.1:5000/terminal';
    fetch(url, {
      method: 'post',
      body: formData
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Erro:', error);
      });
  }
  
  
  /*
    --------------------------------------------------------------------------------------
    Função para criar um botão close para cada item da lista
    --------------------------------------------------------------------------------------
  */
  const insertButton = (parent) => {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    parent.appendChild(span);
  }
  
  
  /*
    --------------------------------------------------------------------------------------
    Função para remover um item da lista de acordo com o click no botão close
    --------------------------------------------------------------------------------------
  */
  const removeElement = () => {
    let close = document.getElementsByClassName("close");
    // var table = document.getElementById('myTable');
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement.parentElement;
        const numeroDeSerie = div.getElementsByTagName('td')[0].innerHTML
        if (confirm("Tem certeza que deseja excluir o terminal?")) {
          div.remove()
          deleteTerminal(numeroDeSerie)
          alert("Terminal excluído com sucesso!")
        }
      }
    }
  }
  
  /*
    --------------------------------------------------------------------------------------
    Função para excluir um terminal cadastrado via requisição DELETE
    --------------------------------------------------------------------------------------
  */
  const deleteTerminal = (terminal) => {
    console.log(terminal)
    let url = 'http://127.0.0.1:5000/terminal?numero_de_serie=' + terminal;
    fetch(url, {
      method: 'delete'
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Erro:', error);
      });
  }
  
  /*
    --------------------------------------------------------------------------------------
    Função para adicionar um novo item com número de série, modelo do terminal e status 
    --------------------------------------------------------------------------------------
  */
  const newItem = () => {
    let inputNumeroDeSerie = document.getElementById("newTerminal").value;
    let inputModeloTerminal = document.getElementById("newModelo").value;
    let inputStatus = document.getElementById("newStatus").value;
  
    if (inputNumeroDeSerie === '') {
      alert("Digite o número de série do terminal!");
    } else if (inputModeloTerminal === '') {
      alert("Selecione o modelo do terminal!");
    } else if (inputStatus === '') {
      alert("Selecione o status do terminal!");
    } else {
      insertList(inputNumeroDeSerie, inputModeloTerminal, inputStatus)
      postTerminal(inputNumeroDeSerie, inputModeloTerminal, inputStatus)
      alert("Terminal incluído com sucesso!")
    }
  }
  
  /*
    --------------------------------------------------------------------------------------
    Função para incluir terminais na tabela apresentada
    --------------------------------------------------------------------------------------
  */
  const insertList = (numeroDeSerie, modeloTerminal, status) => {
    var terminal = [numeroDeSerie, modeloTerminal, status]
    var tabela = document.getElementById('myTable');
    var linha = tabela.insertRow();
  
    for (var i = 0; i < terminal.length; i++) {
      var celula = linha.insertCell(i);
      celula.textContent = terminal[i];
    }
    insertButton(linha.insertCell(-1))
    document.getElementById("newTerminal").value = "";
    document.getElementById("newModelo").value = "Smart POS - P2";
    document.getElementById("newStatus").value = "Em estoque";
  
    removeElement()
  }