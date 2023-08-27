import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Scroll({ button }) {
  return (
    <>
      {button && (
        <motion.button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
          className="scroll"
          key="scroll"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <BsArrowUp />
        </motion.button>
      )}
    </>
  );
}
