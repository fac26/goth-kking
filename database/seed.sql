- seed the data with some stuff and then try and rotate 
-- if that works we have a look into converting the language
PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO user (id, name, email_address, password, user_points) VALUES 
    (1, 'Iman', 'iman@example.com', 'mypassword', 100),
    (2, 'Georgia', 'georgia@example.com', 'mypassword', 50),
    (3, 'Natalia', 'natalia@example.com', 'mypassword', 75),
    (4, 'Karol', 'karol@example.com', 'mypassword', 70),
    (5, 'Konstantina', 'konstantina@example.com', 'mypassword', 105)
    ON CONFLICT DO NOTHING;

INSERT INTO spaces (id, name) VALUES
    (1, 'Work'),
    (2, 'Home'),
    (3, 'Hobbies')
    ON CONFLICT DO NOTHING;

INSERT INTO space_members (space_id, user_id, is_admin) VALUES
    (1, 1, true),
    (1, 2, false),
    (1, 3, false)
    ON CONFLICT DO NOTHING;

INSERT INTO tasks (id, name, description, task_points, user_id, space_id, is_done) VALUES
    (1, 'Clean the kitchen', 'Wipe down counters and appliances', 10, 1, 2, false),
    (2, 'Mow the lawn', 'Use the lawn mower to trim the grass', 20, 2, 2, false),
    (3, 'Email boss', 'Send weekly report', 5, 3, 1, false),
    (4, 'Practice guitar', 'Work on new song', 15, 4, 3, false)
    ON CONFLICT DO NOTHING;

COMMIT;

PRAGMA foreign_keys = ON;