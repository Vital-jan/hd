import { useState } from "react";
import Header from "@/components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        showHome={false}
        title="Приватний автоінструктор"
        subtitle="автоматична коробка передач"
        homeHref="/"
      />
      <div>Автоінструктор</div>
    </>
  );
}

export default App;
