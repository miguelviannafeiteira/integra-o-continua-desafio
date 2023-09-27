export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'], // Adicione aqui o caminho para seus arquivos de código-fonte
};