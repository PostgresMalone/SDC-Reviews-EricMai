DROP TABLE reviews;
DROP TABLE listing;
DROP TABLE users;

CREATE TABLE listing (
    id INT primary key,
    hostName TEXT,
    hostPicture TEXT,
    createdAt TEXT
);

CREATE TABLE users (
    id INT primary key,
    reviewerName  TEXT,
    reviewerPicture TEXT,
    createdAt TEXT
);

CREATE TABLE reviews (
    id INT primary key,
    listingid INT,
    content TEXT,
    userid INT,
    hostComment TEXT,
    createdAt  TEXT
);

-- COPY listing from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\AllData\listingfiles\sdc0.csv' CSV HEADER; 
-- COPY users from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\TestingData\userfiles\my0.csv' CSV HEADER; 
-- COPY reviews from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\TestingData\reviewsfiles\my0.csv' CSV HEADER; 