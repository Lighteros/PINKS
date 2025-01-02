import styles from "./MobileModal.module.css";
function MobileModal({ isOpen, children, onClose }) {
  const modalClasses = [
    styles["mobile-menu-overlay"],
    isOpen ? styles.open : "",
  ];
  const handleClose = (e) => {
    e.stopPropagation();
    onClose()
  }
  return (
    <div className={modalClasses.join(" ")} onClick={handleClose}>
      <div className={styles["mobile-modal-wrap"]}>{children}</div>
    </div>
  );
}

export default MobileModal;
