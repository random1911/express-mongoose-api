# Sample API for react-hooks-mst-example repo

API to made [React Hooks MST example](https://github.com/random1911/react-hooks-mst-example) works.

Made with Express and Mongoose and is literally my first experience making some backend (can I already consider myself a full-stack developer?).

Based on the schema of the same large company API React Hooks MST what example was made for, but a bit different - they have some strange things, maybe because of legacy.

Work in progress!

## Routes

### Persons

Main thing this app about

- [x] `GET` `/persons` `?limit=NUMBER&from=NUMBER` - persons list

- [x] `GET` `/persons/:id` - get single person info

- [x] `POST` `/persons` `{}` - add person

- [x] `PUT` `/persons/:id` - edit person

- [x] `DELETE` `/persons/:id` - delete person

- [ ] `GET` `/persons/find` `?name=STRING` - find

- [ ] some kind of request to save order

### Organizations

In original app it was huge thing, same (or even more big) as persons, but here its only to get list of organizations you can put person when create/edit

- [x] `GET` `/organizations` - list of organizations

### Clear persons list

- [x] `DELETE` `/delete-all-persons` - delete all entries in persons list

### Reset to initial state

- [x] `POST` `/restore-default-data` - will restore original persons mocks
