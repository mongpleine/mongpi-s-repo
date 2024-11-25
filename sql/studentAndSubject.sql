create schema class;

use class;

create table subject_table
(
    sub_id int auto_increment,
    subject_name varchar(20) not null,
    teacher_name varchar(20) not null,
    constraint subject_table_pk
        primary key (sub_id)
);

create index subject_table_sub_id_index
    on subject_table (sub_id);

create table student_table
(
    stu_id int auto_increment,
    stu_name varchar(20) not null,
    tel varchar(20) not null,
    email varchar(20) not null,
    birth date not null,
    class_one int null,
    class_two int null,
    parents varchar(20) null,
    parents_tel varchar(20) null,
    school varchar(20) null,
    hobby varchar(50) null,
    constraint student_table_pk
        primary key (stu_id),
    constraint stu_sub_one_fk
        foreign key (class_one) references subject_table (sub_id),
    constraint stu_sub_two_fk
        foreign key (class_two) references subject_table (sub_id)
);

create index student_table_stu_id_index
    on student_table (stu_id);

