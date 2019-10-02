# Sample API for react-hooks-mst-example repo

API to made [React Hooks MST example](https://github.com/random1911/react-hooks-mst-example) works.

Made with Express and Mongoose and literally my first experience making some backend (can I already consider myself as full-stack developer?).

Based on schema of same large company API React Hooks MST example was made for, but a bit different - they have some strange things, maybe because of legacy.

Work in progress!

## Routes

### Persons

Main thing this app about

-[ ] `GET` `/persons` `?limit=NUMBER` - persons list
TODO: start param

-[x] `GET` `/persons/:id` - get single person info

-[x] `POST` `/persons` `{}` - add person

-[ ] `PUT` `/persons/:id` - edit person

-[x] `DELETE` `/persons/:id` - delete person

-[ ] `GET` `/persons/find` `?name=STRING` - find

-[ ] some kind of request to save order

### Organizations

In original app it was huge thing, same (or even more big) as persons, but here its only to get list of organizations you can put person when create/edit

-[ ] `GET` `/organizations` - list of organizations

### Reset to initial state

-[ ] `GET` `/reset` - will restore original data mocks
