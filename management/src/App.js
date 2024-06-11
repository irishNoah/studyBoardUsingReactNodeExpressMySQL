import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=3​​",
    name: "박창영",
    birthday: "980630",
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=1​",
    name: "홍길동",
    birthday: "901023",
    gender: "male",
    job: "cooker",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=10​",
    name: "김수현",
    birthday: "950101",
    gender: "male",
    job: "actor",
  },
];

function App() {
  return (
    <div>
      {customers.map((customer) => (
        <Customer
          key={customer.id} // map 을 사용하려면 key 라는 속성이 있어야 함(안하면 Console창에 에러가 발생)
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
      ))}
    </div>
  );
}

export default App;
