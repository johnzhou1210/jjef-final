import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveListId, setData, setUserLists, setNewEntryTargetListId } from "../app/listSlice";

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

    async function updateMyLists() {
        // updates the data in redux by fetching from the database.
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        fetch("http://localhost:3001/getAllListIds", requestOptions)
          .then((response) => response.json())
          .then((resJson) => dispatch(setUserLists(resJson)))
          .catch((error) => console.log("error", error));
      }

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
        dispatch(setNewEntryTargetListId(list_id))
        updateListSlice();
    };

    const handleDeleteList = async () => {
        setIsDeleting(true);

        const endpoint = `http://localhost:3001/deleteList/${list_id}`;

        fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`List with ID ${list_id} deleted successfully`);
                    updateListSlice();
                } else {
                    console.error(`Failed to delete the active list`);
                }
            })
            .catch((error) => console.error("Error deleting list:", error))
            .finally(() => setIsDeleting(false));
        updateMyLists();
    };

    useEffect(() => {
        if (Number.isInteger(currActiveListId)) {
            updateListSlice();
            
        }
    }, []);

    return (
        <div className= {currActiveListId == list_id ? 'list-selection-active' : 'list-selection'} onClick={switchActiveList}>
            <div className="list-label">List {list_id}</div>

            <button className="delete-list-button" onClick={handleDeleteList} disabled={isDeleting}>
            ❌
            </button>
        </div>
    );
}

export default ListLabel;
