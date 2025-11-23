CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table classe(
idClasse int primary key auto_increment,
nome varchar(45),
forca int,
destreza int,
vigor int,
resitencia int,
inteligencia int,
fe int,
arcano int,
mente int
);