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
    listingid BIGINT NOT NULL references listing(id),
    content TEXT,
    userid BigINT NOT NULL references users(id),
    hostComment TEXT,
    createdAt TEXT
);

-- CREATE INDEX listing_id ON listing (id);
-- Create INDEX users_id ON users(id);
-- CREATE INDEX review_ids ON reviews (listingid , userid);

-- COPY listing from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\AllData\listingfiles\sdc0.csv' CSV HEADER; 
-- COPY users from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\AllData\userfiles\sdc0.csv' CSV HEADER; 
-- COPY reviews from 'D:\Program Files\Git\SDC\SDC-Reviews-EricMai\AllData\reviewsfiles\sdc0.csv' CSV HEADER; 
