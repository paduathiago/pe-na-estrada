/* Codigo para criar o banco de dados */

CREATE TABLE Usuario(
    UsuarioID INTEGER PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Login VARCHAR(50) NOT NULL,
    SenhaHash TEXT NOT NULL, /*Nao sei que tamanho deveria ter, por isso pus TEXT*/
    SenhaSalt TEXT NOT NULL,
    IsAdmin BOOLEAN NOT NULL,
    Introducao TEXT);


CREATE TABLE Viagem(
    ViagemID INTEGER PRIMARY KEY, 
    ImagemURL VARCHAR(50), 
    Localizacao VARCHAR(50), 
    Descricao TEXT, Inicio DATE, Fim DATE);

CREATE TABLE UsuarioParticipaViagem(
    UsuarioID INTEGER NOT NULL, 
    ViagemID INTEGER  NOT NULL, 
    FOREIGN KEY(UsuarioID) REFERENCES Usuario(UsuarioID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ViagemID) REFERENCES Viagem(ViagemID)    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(UsuarioID,ViagemID)
);
