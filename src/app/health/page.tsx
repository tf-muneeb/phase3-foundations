async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "no-store",
    });
  
    return res.json();
  }
  
  export default async function Health() {
    const data = await getData();
  
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Health Check</h1>
  
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </main>
    );
  }