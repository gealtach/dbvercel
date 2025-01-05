'use client';

import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
    const loginBtn = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get('email'),
        password: formData.get('password')
      }
      signIn('credentials', {
        ...data,
        callbackUrl: '/dashboard'
      })
    }
    return (
      <div className="flex flex-col border p-4 m-4 rounded w-64">
        Login con next Auth e postgre
        <form onSubmit={loginBtn} className="flex flex-col p-4 m-2">
          <div className="flex flex-col p-4 m-2">
            <label>User:</label>
            <input className="rounded m-2 p-1 text-black" type="email" name="email" />
          </div>
          <div className="flex flex-col p-4 m-2">
            <label>Pass:</label>
            <input className="rounded m-2 p-1 text-black" type="password" name="password" />
          </div>
          <button type="submit" className="bg-blue-700 rounded p-2">Enter</button>
        </form>
      </div>
    );
  }
  