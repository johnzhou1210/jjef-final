import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveListId, setData } from "../app/listSlice";

function ListLabel({ list_id }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const currList = useSelector((state) => state.list.data);
    const currActiveListId = useSelector((state) => state.list.activeListId);
    const dispatch = useDispatch();

    const updateListSlice = async () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(`http://localhost:3001/getList/${list_id}`, requestOptions)
            .then((response) => response.json())
            .then((resJson) => dispatch(setData(resJson)))
            .catch((error) => console.log("error", error));
    };

    const switchActiveList = async () => {
        const endpoint = "http://localhost:3001/updateCurrentList/";

        fetch(endpoint + list_id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => console.log(response.status))
            .catch((error) => console.error(error));
        dispatch(setData(null));
        dispatch(setActiveListId(list_id));
        updateListSlice();
    };

    const handleDeleteList = async () => {
        setIsDeleting(true);

        const endpoint = `http://localhost:3001/deleteList/${currActiveListId}`;

        fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`List with ID ${currActiveListId} deleted successfully`);
                    updateListSlice();
                } else {
                    console.error(`Failed to delete the active list`);
                }
            })
            .catch((error) => console.error("Error deleting list:", error))
            .finally(() => setIsDeleting(false));
    };

    useEffect(() => {
        if (Number.isInteger(currActiveListId)) {
            updateListSlice();
        }
    }, []);

    return (
        <div className="list-selection" onClick={switchActiveList}>
            <span>List {list_id}</span>

            <button onClick={handleDeleteList} disabled={isDeleting}>
                Delete List
            </button>
        </div>
    );
}

export default ListLabel;
