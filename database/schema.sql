BEGIN;

CREATE TABLE IF NOT EXISTS tasks (
    id integer primary key autoincrement,
    name text,
    description varchar(255),
    task_points integer,
    user_id integer references user(id),
    space_id integer references spaces(id),
    is_done boolean
);

CREATE TABLE IF NOT EXISTS user (
    id integer primary key autoincrement,
    name text,
    email_address varchar(255),
    password varchar(50),
    user_points integer
);

CREATE TABLE IF NOT EXISTS space_members (
    id integer primary key autoincrement,
    space_id integer,
    user_id integer,
    is_admin boolean
);

CREATE TABLE IF NOT EXISTS spaces (
    id integer primary key autoincrement,
    name text
);
COMMIT;