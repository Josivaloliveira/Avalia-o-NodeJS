// Definindo o objeto User
const User = {
  nome: '',
  dataNascimento: '',
  email: '',
  senha: '',
  
  // Métodos getter
  getNome() {
    return this.nome;
  },
  
  getDataNascimento() {
    return this.dataNascimento;
  },
  
  getEmail() {
    return this.email;
  },
  
  getSenha() {
    return this.senha;
  },
  
  // Métodos setter
  setNome(novoNome) {
    this.nome = novoNome;
  },
  
  setDataNascimento(novaData) {
    this.dataNascimento = novaData;
  },
  
  setEmail(novoEmail) {
    this.email = novoEmail;
  },
  
  setSenha(novaSenha) {
    this.senha = novaSenha;
  }
};

// Exemplo de uso:
const usuario = Object.create(User);
usuario.setNome('João');
usuario.setDataNascimento('01/01/2000');
usuario.setEmail('joao@email.com');
usuario.setSenha('123456');
console.log(usuario.getNome()); // Saída: João
console.log(usuario.getDataNascimento()); // Saída: 01/01/2000
console.log(usuario.getEmail()); // Saída: joao@email.com
console.log(usuario.getSenha()); // Saída: 123456
