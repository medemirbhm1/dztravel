import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://modulus-project.onrender.com/auth/users/", formData)
      .then(() => {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
        toast.success("Account created successfuly");
        router.push("/login");
      })
      .catch((err) => {
        toast.error(Object.values(err.response.data)[0][0]);
      });
  };

  return (
    <section className="bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Your first name
                </label>
                <input
                  value={formData.first_name}
                  onChange={(e) =>
                    setFormData((old) => ({
                      ...old,
                      first_name: e.target.value,
                    }))
                  }
                  type="text"
                  name="firstname"
                  id="firstname"
                  className=" border 0 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="john"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your last name
                </label>
                <input
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData((old) => ({
                      ...old,
                      last_name: e.target.value,
                    }))
                  }
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((old) => ({ ...old, email: e.target.value }))
                  }
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((old) => ({
                      ...old,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-whit  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light  text-gray-200">
                Already have an account ?{" "}
                <Link
                  href="/login"
                  className="font-medium  hover:underline text-blue-500"
                >
                  Signin
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signup;
