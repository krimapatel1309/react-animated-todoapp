import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const errorVar = {
    hidden: {
        opacity: 0,
        // x: "-100vw",
    },
    visible: {
        opacity: 1,
        // x: 0,
    },
    exit: {
        // x: "100vw",
        opacity: 0,
        // transition: { ease: "easeInOut", type: "spring" },
    },
};

const ShowError = ({ setIsError }) => {
    useEffect(() => {
        setTimeout(() => {
            setIsError(false);
        }, 2500);
    }, [setIsError]);

    return (
        <>
            <AnimatePresence>
                     <motion.h5
                        variants={errorVar}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        You Bullshit! It's empty...
                    </motion.h5>
            </AnimatePresence>
        </>
    );
};

export default ShowError;
