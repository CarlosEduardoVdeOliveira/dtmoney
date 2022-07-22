import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


createServer({
  models:{
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance Web',
          amount: 10000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2022-07-05 09:00:00')
        },
        {
          id: 2,
          title: 'Conta de Luz',
          amount: 150,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2022-07-09 09:00:00')
        },
    ]
    })
  },
    routes() {
      this.namespace = 'api'

      this.get("/transactions", () => (
       this.schema.all('transaction')
      ))
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)

      })
    },
  })


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

