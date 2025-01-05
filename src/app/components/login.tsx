export default function Login() {
    return (
      <div className="flex flex-col border p-4 m-4 rounded w-64">
        Login con next Auth e postgre
        <form className="flex flex-col p-4 m-2">
          <div className="flex flex-col p-4 m-2">
            <label>User:</label>
            <input className="rounded m-2 p-1 text-black" type="email" />
          </div>
          <div className="flex flex-col p-4 m-2">
            <label>Pass:</label>
            <input className="rounded m-2 p-1 text-black" type="password" />
          </div>
          <button className="bg-blue-700 rounded p-2">Enter</button>
        </form>
      </div>
    );
  }
  