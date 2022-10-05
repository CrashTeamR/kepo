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

## REST API Endpoints

URL: `https://api.kontenbase.com/query/api/v1/2fe1b8dd-1b6f-4e91-b884-65382fb84354`

| HTTP   | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| GET    | `/question?$lookup=*` | Get all posts |
| POST   | `/question`           | Create post   |
| PATCH  | `/question/:id`       | Edit post     |
| DELETE | `/question/:id`       | Delete post   |
