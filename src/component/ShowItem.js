import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShowItem = ({ items, editItem, deleteItem }) => {
    return (
        <>
            <motion.div
                className="showItems"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 2, type: "spring", stiffness: 150 }}
                exit={{ x: "-100vw" }}
            >
                <AnimatePresence>
                    {items.map((elem) => {
                        return (
                            <motion.div
                                className="eachItem"
                                key={elem.id}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                // transition={{type:'spring', stiffness: 150}}
                                exit={{ x: "-100vw", scale: [1, 0] }}
                            >
                                <h3>{elem.name}</h3>
                                <div className="todo-btn">
                                    <motion.i
                                        className="far fa-edit add-btn"
                                        title="Edit Item"
                                        onClick={() => editItem(elem.id)}
                                        whileHover={{ scale: 1.07 }}
                                        whileTap={{ scale: 0.8 }}
                                        transition={{ yoyo: Infinity }}
                                    />
                                    <motion.i
                                        className="far fa-trash-alt add-btn"
                                        title="Delete Item"
                                        onClick={() => deleteItem(elem.id)}
                                        whileHover={{ scale: 1.07 }}
                                        whileTap={{ scale: 0.8 }}
                                        transition={{ yoyo: Infinity }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default ShowItem;
