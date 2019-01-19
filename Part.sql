DROP TABLE list1mil;
DROP TABLE list2mil;
DROP TABLE masteruser;
-- DROP INDEX user5mil_index 
-- DROP INDEX user10mil_index
-- DROP INDEX user15mil_index
-- DROP INDEX user20mil_index
-- DROP INDEX user25mil_index
-- DROP INDEX user30mil_index

CREATE TABLE masteruser(
    userid INT NOT NULL primary key,
    reviewerName  TEXT NOT NULL,
    reviewerPicture TEXT NOT NULL,
    createdAt TEXT
) PARTITION BY RANGE(userid);

-- CREATE TABLE child_user_1mil(
--     CONSTRAINT pk_1mil PRIMARY KEY (userid),
--     CONSTRAINT ck_1mil CHECK ( userid >= 0 AND userid <= 10)
--     )INHERITS (master_user);
-- CREATE INDEX user1mil ON child_user_1mil (userid);

-- INSERT INTO child_user_1mil (userid, reviewerName, reviewerPicture)
-- SELECT id, reviewerName, reviewerPicture
-- FROM users_backup
-- WHERE id >= 0 AND id <=10;

CREATE TABLE user5mil PARTITION of masteruser   
    FOR VALUES FROM (0) TO (5000000);

CREATE TABLE user10mil PARTITION of masteruser
    FOR VALUES FROM (5000000) TO (10000000);
    
CREATE TABLE user15mil PARTITION of masteruser
    FOR VALUES FROM (10000000) TO (15000000);

CREATE TABLE user20mil PARTITION of masteruser
    FOR VALUES FROM (15000000) TO (20000000);

CREATE TABLE user25mil PARTITION of masteruser
    FOR VALUES FROM (20000000) TO (25000000);

CREATE TABLE user30mil PARTITION of masteruser
    FOR VALUES FROM (25000000) TO (30000000);    

INSERT INTO masteruser (userid, reviewerName, reviewerPicture, createdAt)
SELECT id, reviewerName, reviewerPicture, createdAt
FROM users;

-- CREATE INDEX user5mil_index ON user5mil (userid);
-- CREATE INDEX user10mil_index ON user10mil (userid);
-- CREATE INDEX user15mil_index ON user15mil (userid);
-- CREATE INDEX user20mil_index ON user20mil (userid);
-- CREATE INDEX user25mil_index ON user25mil (userid);
-- CREATE INDEX user30mil_index ON user30mil (userid);

