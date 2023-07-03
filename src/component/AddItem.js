import React from "react";
import { motion } from "framer-motion";

const AddItem = ({inputData, setInputData, toggleSubmit, addItem}) => {
    return (
        <>
            <motion.div className="addItems"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
            >
                <input
                    type="text"
                    placeholder="✍ Add Items..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                {toggleSubmit ? (
                    <i
                        className="fa fa-plus add-btn"
                        title="Add Item"
                        onClick={addItem}
                    ></i>
                ) : (
                    <i
                        className="far fa-edit add-btn"
                        title="Update Item"
                        onClick={addItem}
                    ></i>
                )}
            </motion.div>
        </>
    );
};

export default AddItem;
