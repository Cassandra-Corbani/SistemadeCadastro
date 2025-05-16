function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tabela = document.getElementById('tabelaUsuarios');
    tabela.innerHTML = '';
  
    usuarios.forEach(usuario => {
      const linha = document.createElement('tr');
      linha.innerHTML = `<td>${usuario.nome}</td><td>${usuario.email}</td>`;
      tabela.appendChild(linha);
    });
  }
  
  // Função para salvar um novo usuário
  function salvarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    if (!nome || !email || !senha) return alert('Preencha todos os campos.');
  
    const novoUsuario = { nome, email, senha };
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    document.getElementById('formCadastro').reset();
    carregarUsuarios();
  }
  
  // Inicializar
  document.getElementById('formCadastro').addEventListener('submit', salvarUsuario);
  window.addEventListener('load', carregarUsuarios);