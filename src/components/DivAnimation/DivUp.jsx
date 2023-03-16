import React from "react";
import { motion } from "framer-motion";

const DivUp = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default DivUp;
