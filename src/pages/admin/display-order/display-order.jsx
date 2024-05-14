import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletedForm, getOrder } from "../../../api/FetchOrder";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import IcDelete from "../../../assets/ic-delete.svg";
import IcUpdate from "../../../assets/ic-update.svg";

export const DisplayOrder = () => {
  const [newOrder, setNewOrder] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleted, setDeleted] = useState(null);

  function fetchDataPost() {
    getOrder()
      .then((res) => {
        setNewOrder(res.data);
        console.log(res.data);
        console.log(newOrder);
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
        const delData = newOrder?.filter(
          (filtered) => filtered.deleted !== deleted
        );
        setNewOrder(delData);
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
        <div className="w-full flex justify-end ">
        <div className="px-4 py-2 bg-[#00A9D9] hover:bg-[#008AB1] mb-5 w-fit rounded-lg text-white ">
          <Link to={"/addOrder"}>Add Order</Link>
        </div>
        </div>
        <table className="mx-auto max-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                No
              </th>
              <th scope="col" className="px-4 py-3">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-3">
                Phone
              </th>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                Service
              </th>
              <th scope="col" className="px-4 py-3">
                Note
              </th>
              <th scope="col" className="px-4 py-3">
                Adress
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newOrder.map((item, i) => (
              <tr
                key={item.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {i + 1}
                </th>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">{item.datePickup}</td>
                <td className="px-4 py-3">{item.typeService}</td>
                <td className="px-4 py-3">{item.note}</td>
                <td className="px-4 py-3">{item.adress}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Link
                    to={`/update/${item.id}`}
                    className="bg-green-500 rounded-md px-3 py-2"
                  >
                    <img src={IcUpdate} width={16} height={16} alt="" />
                  </Link>
                  <div
                    className="bg-red-500 rounded-md px-3 py-2 cursor-pointer"
                    onClick={() => handleDeleteClick(item.id)}
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
                  Are you sure you want to delete this orders?
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
