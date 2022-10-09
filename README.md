# KEPO

KEPO is a social media website that inspirated by _Stack Overflow_ and _Quora_

## Main Features :

Main features that will be implemented on the website :

- Posting in user's **timeline** / **feed**
- Commenting or asking

## Contributors :

1. Eric Pradana ([Eric](https://github.com/ericprd))
2. Ersan Karimi ([Ersan](https://github.com/ersankarimi))
3. Bayu Satrio Wibowo ([Bayu](https://github.com/baysatriow))
4. Denny Setyawan Huda ([Denny](https://github.com/dennyshuda))

## Design and Links

Figma : https://www.figma.com/file/LOzYffy9wwSK7lXTnMeXtW/KEPO.com

Flowchart: https://www.figma.com/file/uVu0vBGyQL0QK0nZc96nNC/Flowchart

Live : kepo.baysatriow.me

## Preview

- Home Page

![Home Page](/assets/screenshots/home.png)

- Ask Question Page

![Ask Question Page](/assets/screenshots/ask-question.png)

## REST API Endpoints

- `kepo-backend.ericprd.site/api/questions` GET method to get all questions in database.
- `kepo-backend.ericprd.site/api/questions` POST method to post question to database

  ### parameters schema

  > username: String

  > title: String

  > question: string

- `kepo-backend.ericprd.site/api/questions/:id` GET method to get question by id from database.
- `kepo-backend.ericprd.site/api/questions/:id` DELETE method to get question by id from database.
