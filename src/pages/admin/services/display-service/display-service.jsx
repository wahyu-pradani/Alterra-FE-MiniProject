import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deletedForm, getForm } from "../../../../api/FetchService";
import IcDelete from "../../../../assets/ic-delete.svg";
import IcUpdate from "../../../../assets/ic-update.svg";

export const DisplayService = () => {
  const [service, serviceSet] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleted, setDeleted] = useState(null);

  function fetchDataPost() {
    getForm()
      .then((res) => {
        serviceSet(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchDataPost();
  }, []);

  const handleDeleteClick = (id) => {
    setDeleted(id);
    setOpenModal(true);
  };

  const deleteByIndex = async (e) => {
    if (deleted) {
      console.log(deleted);
      try {
        const res = await deletedForm(deleted);
        console.log("Data berhasil terhapus di API => ", res.data);
        const delData = service?.filter(
          (filtered) => filtered.deleted !== deleted
        );
        serviceSet(delData);
      } catch (er) {
        console.log("Ada Kesalahan dalam code", er);
      } finally {
        setOpenModal(false);
        location.reload();
      }
    }
  };

  return (
    <section className="px-2 py-16">
      <div className="container mx-auto">
        <div className="w-3/4 flex justify-end mx-auto">
          <div className="px-4 py-2 bg-[#00A9D9] hover:bg-[#008AB1] mb-5 w-fit rounded-lg text-white ">
            <Link to={"/addService"}>Add Service</Link>
          </div>
        </div>
        <table className="mx-auto w-3/4 text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-fit py-3 ">
                No
              </th>
              <th scope="col" className="w-fit py-3">
                Name
              </th>
              <th scope="col" className="w-fit py-3">
                price
              </th>
              <th scope="col" className="w-fit py-3">
                Washing Time
              </th>
              <th scope="col" className="w-fit py-3">
                Iron
              </th>
              <th scope="col" className="w-fit py-3">
                Type Service
              </th>
              <th scope="col" className="w-fit py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {service.map((item, i) => (
              <tr
                key={item.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="py-3">{item.name}</td>
                <td className="py-3">{item.price}</td>
                <td className="py-3">{item.washingTime}</td>
                <td className="py-3">{item.iron}</td>
                <td className="py-3">{item.type}</td>
                <td className="flex gap-2 justify-center items-center mx-auto py-3">
                  <Link
                    to={`/updateService/${item.id}`}
                    className="bg-green-500 rounded-md px-3 py-2"
                  >
                    <img src={IcUpdate} width={16} height={16} alt="" />
                  </Link>

                  <div
                    onClick={() => handleDeleteClick(item.id)}
                    className="bg-red-500 rounded-md px-3 py-2 cursor-pointer"
                  >
                    <img src={IcDelete} width={16} height={16} alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this package?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={deleteByIndex}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </table>
      </div>
    </section>
  );
};
