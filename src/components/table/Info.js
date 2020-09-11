import React from "react";

const Info = ({ data }) => {
  return (
    <div className="m-3">
      <p>
        Выбран пользователь:{" "}
        <b>
          {data.firstName} {data.lastName}
        </b>
      </p>
      <p>Описание:</p>
      <p>
        <textarea rows={4} cols={80}>
          {data.description}
        </textarea>
      </p>
      <p>
        Адрес проживания: <b>{data.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{data.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{data.address.state}</b>
      </p>
      <p>
        Индекс: <b>{data.address.zip}</b>
      </p>
    </div>
  );
};

export default Info;
