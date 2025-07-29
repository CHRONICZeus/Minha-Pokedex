# 🎮 Pokedex - Projeto de Estudo

Uma aplicação web interativa que consome a [PokéAPI](https://pokeapi.co/) para exibir informações sobre Pokémon. Este projeto foi desenvolvido como parte de estudos sobre JavaScript moderno, APIs REST e desenvolvimento front-end.

## ✨ Funcionalidades

- **Listagem de Pokémon**: Exibe os primeiros 151 Pokémon da primeira geração
- **Carregamento Progressivo**: Botão "Load More" para carregar mais Pokémon
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **Cores por Tipo**: Cada Pokémon é exibido com cores específicas baseadas em seu tipo
- **Imagens em Alta Qualidade**: Utiliza sprites do Dream World para melhor visualização

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com Grid Layout e Flexbox
- **JavaScript ES6+**: 
  - Fetch API para requisições HTTP
  - Promises e async/await
  - Classes ES6
  - Arrow Functions
  - Template Literals
- **PokéAPI**: API REST pública para dados dos Pokémon

## 📁 Estrutura do Projeto

```
Meu Pokedex/
├── assets/
│   ├── css/
│   │   ├── global.css      # Estilos globais
│   │   └── pokedex.css     # Estilos específicos da Pokédex
│   └── js/
│       ├── main.js         # Lógica principal da aplicação
│       ├── poke.api.js     # Configuração e métodos da API
│       └── pokemon-model.js # Classe modelo do Pokémon
├── index.html              # Página principal
└── README.md              # Este arquivo
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/meu-pokedex.git
cd meu-pokedex
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (se tiver o http-server instalado)
npx http-server
```

3. Acesse `http://localhost:8000` no seu navegador

## 📱 Funcionalidades Técnicas

### API Integration
- Consumo da PokéAPI v2
- Tratamento de respostas JSON
- Conversão de dados da API para modelo local

### Interface
- Layout responsivo com CSS Grid
- Cores dinâmicas baseadas no tipo do Pokémon
- Paginação com carregamento sob demanda
- Design moderno e intuitivo

### Performance
- Carregamento lazy de imagens
- Limitação de registros para otimização
- Tratamento de erros de rede

## 🎨 Características Visuais

- **Cores por Tipo**: Cada tipo de Pokémon possui uma cor específica
- **Cards Interativos**: Layout em cards com informações organizadas
- **Tipografia**: Fonte Roboto para melhor legibilidade
- **Responsividade**: Adaptação automática para mobile, tablet e desktop

## 📚 Aprendizados

Este projeto demonstra:
- Consumo de APIs REST
- Manipulação do DOM com JavaScript
- Uso de Promises e Fetch API
- CSS Grid e Flexbox
- Design responsivo
- Organização de código modular

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Otimizar o código

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [Pokémon Database](https://pokemondb.net/)

---

Desenvolvido com ❤️ para estudos de JavaScript e APIs