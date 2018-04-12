drop database go_db;

create database go_db;

/*This is a basic user config , will change based on passport callback*/
create table go_db.users
(
user_id bigint auto_increment not null,
full_name varchar(500) not null,
email varchar(100),
facebookid varchar(100),
twitterid varchar(100),
googleid varchar(100),
password_encypted varchar(5000), /* Incase the user doesnt want to link */
phone_number varchar(20),
avatar_path varchar(1000), /*Pick from Google,twitter or facebook*/
avatar_image longblob, /*incase you want to upload it*/
unique key (email,facebookid,twitterid,googleid), /*combination has to be always unique*/
primary key (user_id)
);

/*Will create another table called user_preferences later for storing view preferences*/

create table go_db.groups
(
group_id bigint auto_increment not null,
group_name varchar(1000) not null,
group_description varchar(10000),
imagePath varchar(5000),
image longblob,
primary key (group_id)
);


create table go_db.users_groups  /*Linking both groups and users, this is required so that we can configure one user in multiple groups*/
(
user_group_id bigint auto_increment not null,
user_id bigint not null,
group_id bigint not null,
type varchar(10), /*Member or Owner*/
primary key (user_group_id),
unique key (user_id,group_id), /*combination has to be always unique*/
FOREIGN KEY (group_id) REFERENCES groups(group_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

create table go_db.events
(
event_id bigint auto_increment not null,
event_title varchar(500),
event_date date,
event_description varchar(5000),
event_ticket_price integer,
event_ticket_currency varchar(10),
/*Can add more based on what the API returns*/
UNIQUE (event_title),
primary key (event_id)
);

/*To store all images pertaining to an event */
CREATE TABLE go_db.event_media(
    image_id bigint NOT NULL AUTO_INCREMENT,
    event_id bigint NOT NULL,
    media longblob, /*can store audio, video or photos */
    media_link varchar(1000), /*for youtube links*/
    PRIMARY KEY (image_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);


create table go_db.group_events /*Linking groups to events*/
(
group_events_id bigint auto_increment not null,
event_id bigint not null,
group_id bigint not null,
primary key (group_events_id),
Unique (event_id,group_id),
FOREIGN KEY (event_id) REFERENCES events(event_id),
FOREIGN KEY (group_id) REFERENCES groups(group_id)
);


/*To store all comments from users on an event */
CREATE TABLE go_db.events_group_comments(
    comment_id bigint NOT NULL AUTO_INCREMENT,
    group_events_id bigint not null,
    user_id bigint not null,
    comment_date date,
    comment varchar(1000),
    PRIMARY KEY (comment_id),
    FOREIGN KEY (group_events_id) REFERENCES group_events(group_events_id)
);

CREATE TABLE go_db.event_user_votes(
    votes_id bigint NOT NULL AUTO_INCREMENT,
    group_events_id bigint not null,
    user_id bigint not null,
    PRIMARY KEY (votes_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (group_events_id) REFERENCES group_events(group_events_id)
);


/*chat fx will be through the firebase DB*/
