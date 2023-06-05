import React, { useState } from "react";
import CustomInput from "./components/CustomInput";

import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    register_number: "",
    room_number: "",
    year: "1",
    course: "ECE",
    gender: "Male",
    email: "",
    date_of_outing: "",
    date_of_returning: "",
    parent_name: "",
    phone_number: "",
    outing_place: "",
    state: "",
    city: "",
    outgoing_reason: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    setLoading(true);

    axios
      .post("http://localhost:8000/form", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <main className="flex h-[130vh] w-[100%] min-h-screen bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_1200,w_1500/v1685986831/background_i6229o.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="w-[50%] mx-auto my-auto bg-white border border-gray-200 rounded-lg shadow sm:p-2 md:p-4 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Hostel Outing Form
        </h5>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 flex flex-row flex-wrap gap-3"
        >
          <CustomInput
            label={"Name:"}
            name="name"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.name}
          />
          <CustomInput
            label={"Registration number:"}
            name="register_number"
            type={"number"}
            onChage={handleChange}
            placeholder=""
            value={form.register_number}
          />
          <CustomInput
            label={"Room Number:"}
            name="room_number"
            type={"number"}
            onChage={handleChange}
            placeholder=""
            value={form.room_number}
          />
          <div className="form-control w-full max-w-xs">
            <label
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
              htmlFor="year"
            >
              <span className="label-text">Year</span>
            </label>
            <select
              className="select select-bordered"
              onClick={handleChange}
              name="year"
            >
              <option value={"1"}>1st year</option>
              <option value={"2"}>2nd year</option>
              <option value={"3"}>3rd year</option>
              <option value={"4"}>4th year</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
              htmlFor="course"
            >
              <span className="label-text">Course</span>
            </label>
            <select
              className="select select-bordered"
              onClick={handleChange}
              name="course"
            >
              <option>ECE</option>
              <option>CSE</option>
              <option>MECH</option>
              <option>AIDS</option>
              <option>CIVIL</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
              htmlFor="gender"
            >
              <span className="label-text">Gender:</span>
            </label>
            <select
              className="select select-bordered"
              onClick={handleChange}
              name="gender"
            >
              <option>Male</option>
              <option>Female</option>
              <option>others</option>
            </select>
          </div>
          <CustomInput
            label={"Email:"}
            name="email"
            type={"email"}
            onChage={handleChange}
            placeholder=""
            value={form.email}
          />
          <div className="flex items-center">
            <div className="relative">
              <label
                className="flex justify-start mb-3"
                htmlFor="date_of_outing"
              >
                Date
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mt-8 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="start"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
                onChange={({ target }) => {
                  setForm({
                    ...form,
                    date_of_outing: target.valueAsDate,
                  });
                }}
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <label
                className="flex justify-start mb-3"
                htmlFor="date_of_outing"
              >
                Date of Returning
              </label>
              <div className="absolute mt-8 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="start"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
                onChange={({ target }) =>
                  setForm({
                    ...form,
                    date_of_returning: target.valueAsDate,
                  })
                }
              />
            </div>
          </div>
          <CustomInput
            label={"Parent Name:"}
            name="parent_name"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.parent_name}
          />
          <CustomInput
            label={"Phone number:"}
            name="phone_number"
            type={"number"}
            onChage={handleChange}
            placeholder=""
            value={form.phone_number}
          />
          <CustomInput
            label={"Outing Place:"}
            name="outing_place"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.outing_place}
          />
          <CustomInput
            label={"State:"}
            name="state"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.state}
          />
          <CustomInput
            label={"City:"}
            name="city"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.city}
          />
          <CustomInput
            label={"Outgoing Reason:"}
            name="outgoing_reason"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.outgoing_reason}
          />
          <CustomInput
            label={"Address:"}
            name="address"
            type={"text"}
            onChage={handleChange}
            placeholder=""
            value={form.address}
          />

          {!loading ? (
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="loading loading-spinner text-neutral"></span>
            </button>
          )}
        </form>
      </div>
    </main>
  );
}

export default App;
