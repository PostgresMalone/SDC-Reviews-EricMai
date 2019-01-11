DROP TABLE reviews;
DROP TABLE listing;
DROP TABLE users;

CREATE TABLE listing (
    id INT NOT NULL primary key,
    hostName TEXT NOT NULL,
    hostPicture TEXT,
    createdAt TEXT
);

CREATE TABLE users (
    id INT NOT NULL primary key,
    reviewerName  TEXT NOT NULL,
    reviewerPicture TEXT NOT NULL,
    createdAt TEXT
);

CREATE TABLE reviews (
    id INT NOT NULL,
    listingid INT NOT NULL references listing(id),
    content TEXT,
    userid INT NOT NULL references users(id),
    hostComment TEXT,
    createdAt TEXT
);
COPY listing from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\TestingData\listingfiles\my0.csv' CSV HEADER; 
COPY users from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\TestingData\userfiles\my0.csv' CSV HEADER; 
COPY reviews from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\TestingData\reviewsfiles\my0.csv' CSV HEADER; 
