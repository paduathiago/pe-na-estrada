/* Codigo para inserir alguns elementos no banco de dados (fins de teste) */
INSERT INTO Usuario (Nome, Sobrenome, Login, SubSenha, IsAdmin, Introducao) VALUES 
                    ("Ash","Ketchum", "AK",  1234,     FALSE,   "Ola! Eu sou Ash Ketchum da cidade de Pallet!");  

INSERT INTO Viagem (ImagemURL, Localizacao, Descricao, Inicio, Fim) VALUES
                   ("https://robohash.org/ForaDaMatrix","ForaDaMatrix","Uma bela viagem até a lua.","1980-12-17", "2021-06-17");

INSERT INTO UsuarioParticipaViagem (UsuarioID, ViagemID) VALUES
                                   (1,         1);