import React, { useEffect } from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { faPencil, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expeditions } from "../../../redux/actions/expedition";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const { expeditions } = useSelector((state) => state.expeditions);
  expeditions.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(Expeditions());
  }, [dispatch]);

  const {
    user: {
      authUser: { role },
    },
    isLoggedIn,
  } = useSelector((state) => state.user);

  const headerTitle = [
    "Title",
    "Description",
    "Price",
    "Image",
    "itineraire",
    "Places",
    "Tags",
    "Diponibilité",
    "Start Date",
    "End Date",
    role === "USER" && "Book Now",
  ];

  console.log(expeditions, "expedition components");

  return (
    <div className="row-span-full mx-auto">
      <Header title="Expeditions" />
      {role === "ADMIN" && (
        <div className="relative w-[_12rem]">
          <Link to="/admin/create/expedition">
            <button
              className=" bg-slate-100 text-slate-600 shadow-xl pl-4 py-2 my-4 rounded-lg w-full h-full"
              type="button"
            >
              new expedition
              <FontAwesomeIcon
                icon={faPencil}
                className="absolute top-6 mr-4 text-xl left-3 text-slate-600"
              />
            </button>
          </Link>

          <span className="flex h-3 w-3 absolute top-3 right-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
          </span>
        </div>
      )}

      <table className="table table-auto shadow-lg bg-white border-collapse">
        <thead>
          <tr>
            {headerTitle.map((title) => (
              <th
                key={title}
                className="bg-slate-600 text-white border text-left px-4 py-4"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expeditions.map((pack) => (
            <tr key={pack.id}>
              <td className="border px-2 py-1 underline text-slate-600 hover:text-slate-500">
                <Link to={`/admin/expeditions/${pack.id}`}>{pack.title}</Link>
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.description}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.price}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                <a
                  href={`${pack.imageUrls}`}
                  className="underline text-slate-600 hover:text-slate-500"
                >{`Image-${pack.id}`}</a>
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.itineraire}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.places}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.tags}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.available}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.start_date}
              </td>
              <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                {pack.end_date}
              </td>
              {role === "USER" && (
                <td className="border px-2 py-1 text-slate-600 hover:text-slate-500">
                  <Link to={`/admin/expeditions/${pack.id}/book`}>
                    <button
                      className="bg-slate-600 text-white shadow-xl px-1 py-2 my-4 rounded-lg w-full h-full flex text-md justify-around gap-x-1 items-center"
                      type="button"
                    >
                      <p className=""> Book Now</p>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-slate-300"
                      />
                    </button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
