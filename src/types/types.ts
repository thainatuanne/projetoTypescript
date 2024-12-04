// Tipo Pessoa
export type Pessoa = {
    nome: string;
    idade: number;
    email?: string; // Opcional
    telefones?: string[]; // Opcional
};

// Tipo Documento
export type Documento = string | number | boolean;

// Tipo Endereco
export type Endereco = {
    rua: string;
    cidade: string;
};

// Tipo Telefone
export type Telefone = {
    telefones: string[];
};

// Tipo EnderecoTelefone (interseção de Endereco e Telefone)
export type EnderecoTelefone = Endereco & Telefone;