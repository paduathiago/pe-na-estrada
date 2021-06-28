/* Codigo para inserir alguns elementos no banco de dados (fins de teste) */
INSERT INTO Usuario (Nome,Login, SenhaHash, SenhaSalt, IsAdmin, Introducao) VALUES 
                    (
                        "Ash Ketchum", /*Nome*/
                        "AK", /*Login*/  
                        "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",/*SenhaHash*/ 
                        "cb5c4c8179d3de541d8f6e303ad0f58b1176006d96333d4e79e9f87e4a4dfb88",/*SenhaSalt*/
                        FALSE,   /*IsAdmin*/
                        "Ola! Eu sou Ash Ketchum da cidade de Pallet!"/*Introducao*/
                    );  

INSERT INTO Viagem (ImagemURL, Localizacao, Descricao, Inicio, Fim) VALUES
                   (
                       "https://robohash.org/ForaDaMatrix",/*ImagemURL*/
                        "ForaDaMatrix",/*Localizacao*/
                        "Uma bela viagem até a lua.",/*Descricao*/
                        "1980-12-17", /*Inicio*/
                        "2021-06-17"/*Fim*/
                   );

INSERT INTO UsuarioParticipaViagem (UsuarioID, ViagemID) VALUES
                                   (1,         1);