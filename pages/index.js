import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/v1/status")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      });
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Clone do TabNews!</h1>
      <p>
        Este é um projeto de clone do TabNews, uma plataforma de notícias e
        discussões.
      </p>

      {data && (
        <div>
          <h2>Dados da API:</h2>
          <pre>{data.chave?.toUpperCase()}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;
