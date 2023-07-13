const Burguer = ({ id, isOpen, handleIsOpen }) => {
  return <button id={id} className={isOpen} onClick={handleIsOpen}></button>;
};

export default Burguer;
