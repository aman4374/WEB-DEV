# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

We have to use an API and display the data in the form fo a card under a containe. All the data points
returned by API should be converted to cards.  

USE THIS API: https://jsonplaceholder.typicode.com/posts

Hint:  Create a state for the data which will be fetch to populate that state and then use map to render the cards from that state .