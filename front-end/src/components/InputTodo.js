import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <h1 class="text-center mt-5">PERN Stack - Todo List</h1>
            <form class="d-flex mt-5 col-5 mx-auto" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button class="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
