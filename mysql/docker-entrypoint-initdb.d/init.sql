create database if not exists tododb;

drop table if exists tododb.todos;

create table tododb.todos (
    id int not null auto_increment,
    title varchar(100) not null,
    done boolean default false,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp on update current_timestamp,
    primary key (id)
);

insert into tododb.todos (title) values ('asmple todo1');
insert into tododb.todos (title) values ('asmple todo2');
insert into tododb.todos (title) values ('asmple todo3');
