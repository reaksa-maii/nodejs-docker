create database if not exists node_docker;

create table if not exists node_docker.user(
    user_id int unique auto_increment,
    user_name varchar(255) not null,
    age char(10) not null,
    primary key(user_id)
);

create table if not exists nodejs.depart(
    user_id int unique auto_increment,
    user_name varchar(255) not null,
    age char(10) not null,
    primary key(user_id)
);

create table if not exists node_docker.category(
    category_id int unique auto_increment,
    category_name varchar(255) not null,
    primary key(category_id)
);

select user_name from nodejs.user where user_id >=1;